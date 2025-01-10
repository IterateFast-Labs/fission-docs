import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Vimeo from '@u-wave/react-vimeo';
import { type ReactNode } from 'react';

import { Hero } from '../components/hero';
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
        <article className="relative">
          <div className="z-10 relative flex items-center gap-6 flex-col lg:flex-row">
            <div className="flex-grow">
              <h2 className="text-4xl text-black font-extrabold mb-14">
                Welcome to Fission
              </h2>
              <p className="leading-relaxed text-balance font-medium">
                Fission empowers decentralized AI training with DAO-driven
                governance, tokenized incentives, and a unique Borrow + Bonding
                Curve model. <br />
                <br />
                Our miniapps on Telegram and World offer seamless participation
                for global contributors, ensuring high-quality, unbiased data
                for AI models.
              </p>
              <p className="font-medium text-red-500 bg-red-600/20 px-4 py-2 rounded-xl w-fit border-solid border-[2px] border-red-500">
                Beware of scams. Fission doesn't have any tokens yet!
              </p>
            </div>
            <img
              width={1800 / 5}
              src="/image/visual.png"
              alt="Fission"
              className="block mx-auto buoyancy"
            />
          </div>
        </article>
        <article className="relative">
          <img
            src="/image/framework-desktop.jpg"
            alt="Fission"
            className="mx-auto hidden lg:block"
            style={{ imageRendering: 'pixelated' }}
            width={964}
            height={672}
          />
          <img
            src="/image/framework-mobile.jpg"
            alt="Fission"
            className="block lg:hidden mx-auto"
            style={{ imageRendering: 'pixelated', aspectRatio: '600/1232' }}
          />
          <p className="leading-relaxed font-medium mt-14">
            Participants borrow DAO tokens through the Borrow + Bonding Curve
            model, creating liquidity and encouraging long-term engagement.{' '}
            <br />
            The associated borrow and liquidation fees are collected into a Fee
            Pool, which is used to create liquidity pools (LPs) for future use.
            <br />
            DAO tokens are also available on external AMM pools, allowing users
            to buy, sell, or short sell tokens, offering opportunities for
            speculation and hedging against price fluctuations.
          </p>
        </article>
        <article className="relative md:bg-gray-800/60 md:py-10 md:rounded-2xl overflow-hidden lg:shadow-xl">
          <img
            src="/image/logomark3d.png"
            className="opacity-50 absolute -top-[12%] -left-[12%] rotate-90 z-0 hidden md:block"
          />
          <img
            src="/image/logomark3d.png"
            className="opacity-50 absolute -bottom-[10%] -right-[4%] z-0 rotate-45 hidden md:block"
          />
          <div className="mx-auto w-fit min-w-[300px]">
            <div className="bg-[#1f1d22] flex justify-between items-center px-3 py-4 gap-4 rounded-tr-2xl rounded-tl-2xl">
              <span className="text-sm text-[#88878D] font-bold">Close</span>
              <div className="flex flex-col text-center">
                <span className="text-white font-bold">Fission</span>
                <span className="text-[#88878D] font-bold text-xs">
                  mini app
                </span>
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M62 33C62 49.0164 49.0161 62 33 62C16.9839 62 4 49.0164 4 33C4 16.9836 16.9839 4 33 4C49.0161 4 62 16.9836 62 33ZM66 33C66 51.2253 51.2256 66 33 66C14.7744 66 0 51.2253 0 33C0 14.7747 14.7744 0 33 0C51.2256 0 66 14.7747 66 33ZM18 37C20.7612 37 23 34.7615 23 32C23 29.2385 20.7612 27 18 27C15.2388 27 13 29.2385 13 32C13 34.7615 15.2388 37 18 37ZM38 32C38 34.7615 35.7612 37 33 37C30.2388 37 28 34.7615 28 32C28 29.2385 30.2388 27 33 27C35.7612 27 38 29.2385 38 32ZM48 37C50.7612 37 53 34.7615 53 32C53 29.2385 50.7612 27 48 27C45.2388 27 43 29.2385 43 32C43 34.7615 45.2388 37 48 37Z"
                  fill="#88878D"
                />
              </svg>
            </div>
            <div className="w-full aspect-[320/529] bg-[#1f1d22] relative overflow-hidden rounded-bl-xl rounded-br-xl">
              <Vimeo
                width={320}
                className="w-full aspect-[320/529] z-10 relative"
                video={1045595278}
                showByline={false}
                showTitle={false}
                showPortrait={false}
                playsInline
                muted
                loop
                autoplay
                controls={false}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-1 z-0">
                <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
                <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
                <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
                <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <p className="text-center lg:text-white/90 font-medium">
              The release date of the mini app will be announced soon.
            </p>
          </div>
        </article>
        <section className="px-2 py-10 md:px-6 md:py-10 lg:p-12 border-solid border-[#eaeaea] rounded-2xl">
          <h2 className="text-4xl text-black font-extrabold text-center mb-10 md:mb-12 lg:mb-20">
            About Fission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="p-4 hover:bg-gray-100 rounded-xl">
              <h3 className="text-2xl font-bold mb-8">
                0. How exactly did you integrate Solana?
              </h3>
              <p className="font-medium leading-relaxed">
                We integrated Solana by adopting Solend's Solana Lending Program
                to enable decentralized borrowing and lending. Jito's JitoSOL is
                utilized as the primary asset in our Fee Pool, enhancing
                liquidity. We also help to connect Solana with Telegram and
                World miniapps, enabling seamless interactions for users to
                participate in AI training and governance, ensuring a smooth and
                efficient experience for users within the Solana ecosystem,
                leveraging Solana's speed and scalability.
              </p>
            </article>
            <article className="p-4 rounded-xl">
              <h3 className="text-2xl font-bold mb-8">
                1. How exactly did you integrate AI?
              </h3>
              <p className="font-medium leading-relaxed">
                We integrated AI through a community-driven approach to data
                labeling and validation, enabling continuous AI training. Our
                platform utilizes real-time feedback loops to refine and improve
                models dynamically. By leveraging AI frameworks like OpenAI's
                GPT for natural language processing and TensorFlow for machine
                learning, we ensure that our agents exhibit intelligent and
                autonomous behavior. This integration allows our agents to adapt
                and evolve based on user interactions, providing more accurate
                and relevant responses over time, while maintaining the
                flexibility to incorporate community contributions for enhanced
                model performance.
              </p>
            </article>
            <article className="p-4 min-h-72">
              <h3 className="text-2xl font-bold mb-8">
                2. Key Components of Fission
              </h3>
              <p>[TODO]</p>
            </article>
            <article className="p-4 min-h-72">
              <h3 className="text-2xl font-bold mb-8">
                3. Challenges and Solutions
              </h3>
              <p>[TODO]</p>
            </article>
          </div>
        </section>

        <article className="p-4 bg-black/5 rounded-2xl">
          <header className="flex items-center flex-col pt-20">
            <h2 className="text-4xl text-black font-extrabold text-center mb-4">
              Fission Communities
            </h2>
            <p className="font-medium text-red-500 bg-red-600/20 px-3 py-1 rounded-xl w-fit border-solid border-[2px] border-red-500">
              Beware of scams, Always check the official links!
            </p>
          </header>
          <div className="flex flex-wrap gap-10 items-center justify-center py-20">
            <a
              href="https://hub.xyz/fission"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-black rounded-xl w-full md:w-auto"
            >
              <img src="/image/logo.svg" alt="Fission" width={40} height={40} />
              <span className="font-medium text-white text-lg">
                Check out Fission on Hub
              </span>
            </a>{' '}
            <a
              href="https://github.com/IterateFast-Labs/Solana-AI-Hackathon-Info/tree/main"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-6 py-4 bg-black rounded-xl w-full md:w-auto"
            >
              <svg
                height="40"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="40"
                data-view-component="true"
              >
                <path
                  d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                  fill="white"
                ></path>
              </svg>
              <span className="font-medium text-white text-lg">
                Check out our GitHub
              </span>
            </a>
          </div>
        </article>
      </main>
    </Layout>
  );
}
