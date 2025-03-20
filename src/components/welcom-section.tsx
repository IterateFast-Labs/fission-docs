import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function WelcomSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="z-10 relative flex items-center gap-4 lg:gap-10 flex-col lg:flex-row">
      <div className="flex-grow">
        <h2 className="text-4xl text-black font-extrabold mb-14">
          Welcome to Fission
        </h2>

        <p className="leading-relaxed text-balance font-medium">
          Fission is pioneering the future of AI in the Web3 era. By combining
          the power of decentralized technologies with cutting-edge AI, we are
          creating an inclusive, transparent, and community-driven ecosystem
          where AI models evolve and grow through collaborative efforts. <br />
          <br />
          Join us in revolutionizing the way AI is built, trained, and governed.
          <br />
          Welcome to a new era of AI – decentralized, scalable, and powered by
          the people.
        </p>
      </div>
      <img
        width={1800 / 5}
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/landing-img/visual.png`}
        alt="Fission"
        className="block mx-auto buoyancy"
      />
    </div>
  );
}
