import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

export const alt =
  'Adam Mould, Principal Frontend Engineer. I take products from zero to shipped.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadInter(weight: number) {
  let css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
  ).then((response) => response.text())
  let url = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  )?.[1]
  if (!url) {
    throw Error(`Could not load Inter ${weight}`)
  }
  return fetch(url).then((response) => response.arrayBuffer())
}

export default async function Image() {
  let avatar = await readFile(join(process.cwd(), 'src/images/avatar.jpg'))
  let avatarSrc = `data:image/jpeg;base64,${avatar.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 80,
        background: '#fafafa',
        fontFamily: 'Inter',
        color: '#27272a',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <img
          src={avatarSrc}
          alt=""
          width={112}
          height={112}
          style={{ borderRadius: 9999, border: '4px solid #ffffff' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 40, fontWeight: 600 }}>Adam Mould</div>
          <div style={{ fontSize: 28, color: '#71717a' }}>
            Principal Frontend Engineer
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          textWrap: 'balance',
        }}
      >
        I take products from zero to shipped.
      </div>
      <div style={{ display: 'flex', fontSize: 28, color: '#14b8a6' }}>
        adam-mould.co.uk
      </div>
    </div>,
    {
      ...size,
      fonts: await Promise.all(
        ([400, 600, 700] as const).map(async (weight) => ({
          name: 'Inter',
          data: await loadInter(weight),
          weight,
        })),
      ),
    },
  )
}
