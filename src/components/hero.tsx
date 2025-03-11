import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useRef } from 'react';

export function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container py-10">
      <div className="bg-primary/80 rounded-3xl relative shadow-2xl p-6 lg:p-16 aspect-square md:aspect-video flex justify-center items-center overflow-hidden">
        <Background />

        <div className="bg-gradient-to-b from-black/0 to-primary/50 absolute w-full h-full inset-0 z-10"></div>
        <div className="bg-gradient-to-t from-black/0 to-primary/50 absolute w-full h-full inset-0 z-10"></div>
        <div className="space-y-10 relative z-10">
          <h1 className="text-center">
            <Logo className="hidden md:block" width={500} />
            <Logo className="inline-block md:hidden" width={300} />
            <span className="sr-only">{siteConfig.title}</span>
          </h1>

          <p className="text-xl font-medium text-center align-middle text-white">
            Web3-powered, decentralized AI data ecosystem.
          </p>
          <div className="w-fit mx-auto">
            <a
              className="flex items-center rounded-xl text-white hover:text-white bg-[#c0426a]"
              href="#tay"
            >
              <img
                src="/image/tay.jpg"
                alt="TAY"
                className="w-20 h-20 rounded-tl-lg rounded-bl-lg overflow-hidden shrink-0"
              />
              <span className="font-bold text-lg px-8 h-20 flex justify-center items-center relative overflow-hidden rounded-lg">
                <span className="relative z-10">Learn more about TAY</span>
                <span className="absolute w-20 h-6 bg-gradient-to-r from-[#c0426a] to-[#0ABEEF]/80 z-0 -right-1 -top-1"></span>
                <span className="absolute w-20 h-6 bg-gradient-to-r from-[#c0426a] to-[#ba6bfb]/90 z-0 -right-2 top-2"></span>
                <span className="absolute w-20 h-6 bg-gradient-to-r from-[#c0426a] to-[#6bfbed]/100 z-0 -right-4 top-8"></span>
                <span className="absolute w-20 h-6 bg-gradient-to-r from-[#c0426a]/20 to-[#36ff65]/90 z-0 -right-1 top-16"></span>
                <span className="absolute w-20 h-6 bg-gradient-to-r from-[#c0426a]/20 to-[#36b9ff]/90 z-0 -right-1 top-14"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo({
  width = 370,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <>
      <svg
        viewBox="0 0 692 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M23.9999 67.2C23.9999 83.2055 32.7042 97.178 45.6373 104.642C45.8265 99.1817 46.7311 93.9029 48.2602 88.8968C42.2173 83.6174 38.3999 75.8545 38.3999 67.2C38.3999 51.2942 51.2941 38.4 67.1999 38.4C75.8545 38.4 83.6174 42.2174 88.8967 48.2603C93.9029 46.7311 99.1816 45.8266 104.642 45.6373C97.178 32.7042 83.2054 24 67.1999 24C43.3412 24 23.9999 43.3413 23.9999 67.2Z"
          fill="white"
        />
        <path
          d="M67.1999 110.4C91.0586 110.4 110.4 91.0587 110.4 67.2C110.4 64.7803 110.201 62.4071 109.819 60.0958C108.821 60.0323 107.814 60 106.8 60C102.873 60 99.0592 60.4836 95.4146 61.3946C95.7984 63.2698 95.9999 65.2113 95.9999 67.2C95.9999 83.1058 83.1057 96 67.1999 96C65.2113 96 63.2697 95.7984 61.3945 95.4146C60.4836 99.0593 59.9999 102.873 59.9999 106.8C59.9999 107.814 60.0322 108.821 60.0957 109.819C62.407 110.201 64.7803 110.4 67.1999 110.4Z"
          fill="white"
        />
        <path
          d="M153.6 106.8C153.6 132.647 132.647 153.6 106.8 153.6C81.9671 153.6 61.6516 134.259 60.0957 109.819C54.9056 108.96 50.0278 107.176 45.6373 104.642C45.6125 105.358 45.5999 106.078 45.5999 106.8C45.5999 140.6 73.0001 168 106.8 168C140.6 168 168 140.6 168 106.8C168 73.0002 140.6 45.6 106.8 45.6C106.078 45.6 105.358 45.6125 104.642 45.6373C107.176 50.0278 108.96 54.9057 109.819 60.0958C134.259 61.6517 153.6 81.9672 153.6 106.8Z"
          fill="white"
        />
        <path
          d="M88.8967 48.2603C69.4944 54.1867 54.1866 69.4945 48.2602 88.8968C51.9347 92.107 56.4322 94.399 61.3945 95.4146C65.5686 78.7146 78.7146 65.5687 95.4146 61.3946C94.3989 56.4322 92.107 51.9348 88.8967 48.2603Z"
          fill="white"
        />
        <path
          d="M224 56.0002L220 60V84H264V104H220V160H200V48L216 32H272V56.0002H224Z"
          fill="white"
        />
        <path d="M280 60V44H296V60H280ZM280 160V72H296V160H280Z" fill="white" />
        <path
          d="M364 160H304V144H360L364 140V128L360 124.001H316L304 112V88L320 72H376V88H328.186L320 96V104L324 108H364.186L380 124V144L364 160Z"
          fill="white"
        />
        <path
          d="M448 160H388V144H444L448 140V128L444 124.001H400L388 112V88L404 72H460V88H412.186L404 96V104L408 108H448.186L464 124V144L448 160Z"
          fill="white"
        />
        <path d="M472 60V44H488V60H472ZM472 160V72H488V160H472Z" fill="white" />
        <path
          d="M560 160H512L496 144V88L512 72H560.369L576 88V144L560 160ZM560.369 96L556.369 92H516.369L512.369 96V136L516.738 140H556.369L560.369 136V96Z"
          fill="white"
        />
        <path
          d="M648 160L648 96.0179L644 92.0211L612 92.0192L604 96.0179L604 160L584 159.998V72.0273H604V80.0239L612 72L652 72.0273L668 87.996V160H648Z"
          fill="white"
        />
      </svg>
    </>
  );
}

function Background() {
  return (
    // 항상 부모의 가운데에 위치하도록 설정
    // absolute: 부모 요소를 기준으로 위치를 잡음
    <img
      src="/image/hero-background.png"
      alt="Hero"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
