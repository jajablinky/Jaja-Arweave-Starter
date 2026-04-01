import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const GITHUB_SKILL =
  'https://github.com/jajablinky/neo-minimal-permaweb-design-skill';

const INSTALL_CMD =
  'npx skills add jajablinky/neo-minimal-permaweb-design-skill';

const PERMAWEB_MD_URL =
  'https://arweave.net/9c93sN0jo1_BlHZSjNbgaSo1hoD_fPi6YG9MB9eBnPI';

const PRINCIPLES = [
  {
    title: 'Symbiosis of form and function',
    body: 'Remove what does not earn its place so structure stays clear and every accent reads as deliberate emphasis.',
  },
  {
    title: 'Quiet typography',
    body: 'Keep DM Sans at weight 400 or 500 with sentence case labels',
  },
  {
    title: 'Restrained color',
    body: 'Stay neutral-first and use one accent family sparingly',
  },
] as const;

const SIGNALS = [
  {
    key: 'Motion',
    value: 'subtle + reduced-motion safe',
  },
  {
    key: 'Buttons',
    value: 'neutral by default',
  },
  {
    key: 'Corners',
    value: 'no radius',
  },
] as const;

function HomePage() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const block = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 4 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.04 * i,
        duration: reduceMotion ? 0 : 0.22,
        ease: easeOut,
      },
    }),
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadMarkdown = () => {
    const principles = PRINCIPLES.map(
      (principle, index) =>
        `${index + 1}. **${principle.title}** - ${principle.body}`
    ).join('\n');
    const signals = SIGNALS.map(
      signal => `- **${signal.key}**: ${signal.value}`
    ).join('\n');

    const markdown = `# Neo-minimal permaweb design skill

## Install
\`\`\`bash
${INSTALL_CMD}
\`\`\`

## Permaweb

${PERMAWEB_MD_URL}

## Core principles
${principles}

## UI signals
${signals}
`;

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'neo-minimal-permaweb-design-skill.md';
    link.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 1200);
  };

  return (
    <div className="min-h-screen w-full bg-bg-primary font-dm-sans text-text-primary antialiased">
      <main className="mx-auto my-8 max-w-3xl md:my-12">
        <motion.header
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } },
          }}
        >
          <motion.div
            className="px-7 py-8 md:px-9 md:py-10"
            variants={block}
            custom={0}
          >
            <div className="flex flex-wrap gap-0 text-[0.75rem]">
              <span className="mr-2 py-1 text-text-secondary">
                install skill
              </span>
              <a
                href={GITHUB_SKILL}
                className="px-2 py-1 text-accent-link transition-colors hover:bg-accent-link/5"
                rel="noopener noreferrer"
              >
                github
              </a>
            </div>
            <h1 className="mt-2 text-section font-medium leading-snug tracking-[-0.01em] md:text-[1.5rem]">
              Neo-minimal permaweb design skill
            </h1>
            <p className="mt-3 text-[0.875rem] leading-relaxed text-text-secondary">
              A neo-minimal approach for the permaweb keeps interfaces light-first and
              flat, lets clean borders define structure, and uses color only for
              purposeful emphasis.
            </p>
          </motion.div>
        </motion.header>

        <motion.section
          className="mt-4 px-7 py-5 md:mt-5 md:px-9 md:py-6"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.04,
                delayChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
        >
          <motion.div variants={block} custom={0}>
            <p className="text-[0.75rem] text-text-secondary">Install</p>
            <div className="mt-4 grid border border-border-default">
              <div className="border-b border-border-default px-4 py-3 text-[0.8125rem] text-text-primary">
                <span className="text-text-secondary">$ </span>
                {INSTALL_CMD}
              </div>
              <div className="grid grid-cols-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-3 text-[0.75rem] text-text-secondary transition-colors hover:bg-text-primary/5 hover:text-text-primary"
                >
                  {copied ? 'copied' : 'copy command'}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadMarkdown}
                  className="border-l border-border-default px-4 py-3 text-[0.75rem] text-text-secondary transition-colors hover:bg-text-primary/5 hover:text-text-primary"
                >
                  {downloaded ? 'downloaded' : 'download .md'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-8"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.04,
                delayChildren: reduceMotion ? 0 : 0.06,
              },
            },
          }}
        >
          <motion.div
            className="px-7 py-6 md:px-9 md:py-7"
            variants={block}
            custom={1}
          >
            <p className="text-[0.75rem] text-text-secondary">
              Core principles
            </p>
            <div className="mt-5 space-y-5">
              {PRINCIPLES.map((principle, idx) => (
                <article
                  key={principle.title}
                  className="grid grid-cols-[36px_calc(50%-3.75rem)_1fr] items-start gap-x-3"
                >
                  <div className="pt-0.5 text-[0.75rem] text-text-secondary tabular-nums">
                    {`0${idx + 1}`}
                  </div>
                  <div className="col-start-3">
                    <h2 className="text-[0.9375rem] font-medium">
                      {principle.title}
                    </h2>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-text-secondary">
                      {principle.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 space-y-1">
              {SIGNALS.map(signal => (
                <div
                  key={signal.key}
                  className="grid grid-cols-[calc(50%-0.75rem)_1fr] gap-x-3 text-[0.75rem]"
                >
                  <p className="py-1 text-text-secondary">{signal.key}</p>
                  <p className="py-1 text-left text-text-primary">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

export default HomePage;
