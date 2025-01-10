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
          Fission empowers decentralized AI training with DAO-driven governance,
          tokenized incentives, and a unique Borrow + Bonding Curve model.{' '}
          <br />
          <br />
          Our miniapps on Telegram and World offer seamless participation for
          global contributors, ensuring high-quality, unbiased data for AI
          models.
        </p>
        <p className="font-medium text-red-500 bg-red-600/20 px-4 py-2 rounded-xl w-fit border-solid border-[2px] border-red-500">
          Beware of scams. Fission doesn't have any tokens yet!
        </p>
      </div>
      <img
        width={1800 / 5}
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/visual.png`}
        alt="Fission"
        className="block mx-auto buoyancy"
      />
    </div>
  );
}
