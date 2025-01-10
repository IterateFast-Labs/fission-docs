import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Communities() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="p-4 bg-black/5 rounded-2xl">
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
          <img
            src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/logo.svg`}
            alt="Fission"
            width={40}
            height={40}
          />
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
    </div>
  );
}
