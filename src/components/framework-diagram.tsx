import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FrameworkDiagram() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <img
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/framework-desktop.jpg`}
        alt="Fission"
        className="mx-auto hidden lg:block"
        style={{ imageRendering: 'pixelated' }}
        width={964}
        height={672}
      />
      <img
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/framework-mobile.jpg`}
        alt="Fission"
        className="block lg:hidden mx-auto"
        style={{ imageRendering: 'pixelated', aspectRatio: '600/1232' }}
      />
      <p className="leading-relaxed text-lg font-medium mt-10 p-8 border-solid rounded-2xl border-[#eaeaea]">
        Participants borrow DAO tokens through the Borrow + Bonding Curve model,
        creating liquidity and encouraging long-term engagement. <br />
        The associated borrow and liquidation fees are collected into a Fee
        Pool, which is used to create liquidity pools (LPs) for future use.
        <br />
        DAO tokens are also available on external AMM pools, allowing users to
        buy, sell, or short sell tokens, offering opportunities for speculation
        and hedging against price fluctuations.
      </p>
    </div>
  );
}
