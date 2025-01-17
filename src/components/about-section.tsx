const keyComponentsDocs = [
  {
    url: '/docs/users/our-insight/stop-calling-agent',
    title: 'Stop Calling Everything an Agent – Here’s What it Actually Means',
  },
  {
    url: '/docs/users/our-insight/why-centralized-data',
    title: 'Why Centralized Data Labeling will be a huge problem in AI?',
  },
  {
    url: '/docs/users/our-insight/retrieval-augmented-generation',
    title:
      'Retrieval Augmented Generation : A Critical Tool for Managing and Selecting Dataset in Web3',
  },
  {
    url: '/docs/users/our-insight/how-to-find-good-agent',
    title: 'Alright, But How the Hell Can We Find(Evaluate) A good Agent?',
  },
  {
    url: '/docs/users/our-insight/challenges-and-directions',
    title: 'Challenges and directions for crypto-based AI agents',
  },
  {
    url: '/docs/users/our-insight/hybrid-search',
    title: 'Hybrid Search : Spare + Dense RAG',
  },
  {
    url: '/docs/users/our-insight/raft-rag',
    title: 'RAFT : RAG based Finetunning',
  },
];

export default function AboutSection() {
  return (
    <div className="px-2 py-10 md:px-6 md:py-10 lg:p-12 border-solid border-[#eaeaea] rounded-2xl">
      <h2 className="text-4xl text-black font-extrabold text-center mb-10 md:mb-12 lg:mb-20">
        About Fission
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="p-4 rounded-xl">
          <p className="font-medium leading-relaxed">
            Fission is a decentralized platform that transforms the AI landscape
            by integrating blockchain and Web3 frameworks to create a
            transparent, fair, and inclusive approach to AI development. With a
            focus on community-driven data labeling, decentralized governance,
            and tokenized incentives, Fission empowers contributors from around
            the world to participate in shaping AI models that benefit all.
            <br />
            <br />
            At Fission, we leverage blockchain infrastructure to democratize AI
            training and governance, ensuring that everyone has a stake in the
            future of AI. Our ecosystem is designed for scalability, enabling a
            wide range of applications—from AI-powered meme coins to
            decentralized AI agents. As we build momentum and grow, our
            long-term vision is to redefine how AI models are created, managed,
            and monetized, fostering a decentralized and equitable AI economy.
          </p>
        </div>
        <div className="p-4 min-h-72 md:col-span-2">
          <h3 className="text-2xl font-bold mb-8">Our Insights</h3>
          <ul className="list-none pl-0 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyComponentsDocs.map((doc) => (
              <li
                key={doc.url}
                className="p-3 border-solid border-[#cbcbcb] rounded-xl min-h-32 hover:bg-gray-100"
              >
                <a
                  href={doc.url}
                  className="font-medium hover:underline text-black text-lg line-clamp-3"
                >
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-wrap md:flex-nowrap items-center gap-10 p-4"
          id="tay"
        >
          <div className="order-2 space-y-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-extrabold mb-0 pb-0">
                TAY AI Agent:
              </h3>
              <p className="text-2xl font-bold text-pretty">
                Redefining Social Engagement with Decentralized Intelligence
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/docs/tay-intro"
                className="block basis-full md:basis-auto px-6 py-4 bg-black hover:bg-white text-white hover:text-black border-solid border-[#cbcbcb] rounded-xl font-bold"
              >
                Learn more
              </a>

              <a
                href="https://dexscreener.com/solana/F5z4iCEsgDU3V4xdvQDykffjoDnePNprvVCjhbDVCDg6"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 group px-6 py-4 basis-full md:basis-auto bg-black hover:bg-white text-white hover:text-black border-solid border-[#cbcbcb] rounded-xl font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#fff"
                  fillRule="evenodd"
                  viewBox="0 0 252 300"
                  focusable="false"
                  className="group-hover:fill-black"
                >
                  <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path>
                  <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path>
                </svg>
                <span>DexScreener</span>
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-square w-60 order-1">
            <img
              src="/image/tay.jpg"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
