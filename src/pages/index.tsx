import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Vimeo from '@u-wave/react-vimeo';
import { type ReactNode } from 'react';

import AboutSection from '../components/about-section';
import Communities from '../components/communities';
import FrameworkDiagram from '../components/framework-diagram';
import { Hero } from '../components/hero';
import PreviewSection from '../components/preview-section';
import WelcomSection from '../components/welcom-section';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Fission: Web3-powered, decentralized AI data ecosystem. Transparent ownership, token-based incentives, & AI-driven data labeling + monetization"
    >
      <header>
        <Hero />
      </header>

      <main className="flex flex-col container h-auto py-10 gap-14">
        <article>
          <WelcomSection />
        </article>
        <article className="relative">
          <FrameworkDiagram />
        </article>
        <article>
          <PreviewSection />
        </article>
        <section>
          <AboutSection />
        </section>

        <article>
          <Communities />
        </article>
      </main>
    </Layout>
  );
}
