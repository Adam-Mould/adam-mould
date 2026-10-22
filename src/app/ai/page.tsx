import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'AI',
  description: 'Shipping faster with AI, without losing the craft.',
}

export default function AI() {
  return (
    <SimpleLayout
      title="Shipping faster with AI, without losing the craft."
      intro="I build with AI every day, on Scenario Builder at TransitionZero and on my own products. It’s changed how fast I get from idea to production. I still own the architecture, the UX detail and the quality bar, and more and more of my work is building the systems that let agents meet that bar. Here’s how that works in practice."
    >
      <div className="space-y-20">
        <ToolsSection title="How I work">
          <Tool title="Specs before code">
            Features start as a spec, worked out by having an agent grill me
            until the edge cases are on the table. The spec becomes the plan,
            the issues and the record of why.
          </Tool>
          <Tool title="Reference prototypes">
            I take a spec straight to a high-fidelity, working prototype,
            sometimes pairing with a designer, so we can test whole user
            journeys end to end. With AI, prototype code is cheap, so the
            prototype becomes the reference for the production design and build.
          </Tool>
          <Tool title="Parallel agents, layered review">
            Several Claude Code sessions run in parallel, test-first where it
            fits. Every change gets an AI first-pass review before I read it.
          </Tool>
          <Tool title="Codebases built for agents">
            Something I took from{' '}
            <a
              href="https://x.com/poteto"
              className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Lauren Tan
            </a>
            : to handle thousands of PRs a month, a codebase needs strong
            architecture and static analysis first. On Scenario Builder I’m
            building custom skills, agents, rules and strict static analysis so
            that backend engineers can ship frontend features agentically with
            little or no input from me.
          </Tool>
          <Tool title="Trust, verification and quality gates">
            If I review every line myself, I become the bottleneck. On A Legacy
            Beyond, Claude writes the code, CodeRabbit and GPT review it, and I
            audit those reviews against coding standards I set up at the start.
            Trust comes from verification, and that’s what lets a software
            factory scale to dozens of agents.
          </Tool>
          <Tool title="A software factory">
            Beyond engineering, I’m working with product, design, and AI and
            data specialists to build a quality-controlled software factory
            around these agents.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tools">
          <Tool title="Claude Code" href="https://claude.com/claude-code">
            My main tool for building, refactoring and reviewing. Remote Control
            lets me keep agents moving from my phone.
          </Tool>
          <Tool title="Skills" href="https://github.com/mattpocock/skills">
            Matt Pocock’s skills are my base, with Superpowers for
            brainstorming. On top sits my own suite of custom skills, some
            written from scratch and some adapted from popular ones like Grill
            Me.
          </Tool>
          <Tool title="MCP servers" href="https://modelcontextprotocol.io">
            Figma, GitHub, Postman and Vercel, among many others. MCP gives
            agents the same context I have, from designs and issues to APIs and
            deployments, so I’m not pasting it in by hand.
          </Tool>
          <Tool title="Claude Design and Artifacts">
            For exploring designs and visualising flows as diagrams.
          </Tool>
          <Tool
            title="Verification"
            href="https://github.com/ChromeDevTools/chrome-devtools-mcp"
          >
            Claude in Chrome and Chrome DevTools let agents check their own work
            in a real browser, profiling included.
          </Tool>
          <Tool title="Second opinions">
            ChatGPT when I want another model’s take, and CodeRabbit in code
            review.
          </Tool>
          <Tool title="Building AI products" href="https://ai-sdk.dev">
            AI SDK, AI Gateway and AI Elements for customer-facing AI features,
            and Vercel Eve when a product needs a full agent framework.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Learning">
          <Tool title="MEGA" href="https://mega.dev">
            I’m in the first cohort of mega.dev’s program for developers
            building with agents, taught by Kent C. Dodds, Angie Jones, John
            Lindquist and Theo Browne.
          </Tool>
          <Tool title="What’s next">
            Going from orchestrating 1–5 agents to 10+. Today I lean on
            structured, hand-holding workflows. Next I want enough trust in them
            to let go.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Reading">
          <Tool title="Matt Pocock / AI Hero" href="https://aihero.dev">
            Practical agent workflows and skills. The workflow I’m most aligned
            with right now.
          </Tool>
          <Tool title="Kent C. Dodds" href="https://kentcdodds.com">
            Testing, TypeScript, and teaching engineering well, now applied to
            building with AI.
          </Tool>
          <Tool title="Cursor blog" href="https://cursor.com/blog">
            Where AI coding tools are heading, from the people building them.
          </Tool>
          <Tool
            title="Anthropic engineering"
            href="https://www.anthropic.com/engineering"
          >
            First-hand writing on agents, evals and Claude Code.
          </Tool>
          <Tool title="Theo" href="https://t3.gg">
            Sharp, opinionated takes on the TypeScript and AI ecosystem.
          </Tool>
          <Tool
            title="The Pragmatic Engineer"
            href="https://newsletter.pragmaticengineer.com"
          >
            How engineering teams are actually adopting AI.
          </Tool>
          <Tool title="Lauren Tan" href="https://x.com/poteto">
            Running agents at scale. She’s the author of pstack.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
