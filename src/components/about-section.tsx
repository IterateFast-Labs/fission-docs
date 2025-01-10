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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="p-4 rounded-xl">
          <h3 className="text-2xl font-bold mb-8">
            How exactly did you integrate Solana?
          </h3>
          <p className="font-medium leading-relaxed">
            We integrated Solana by adopting Solend's Solana Lending Program to
            enable decentralized borrowing and lending. Jito's JitoSOL is
            utilized as the primary asset in our Fee Pool, enhancing liquidity.
            We also help to connect Solana with Telegram and World miniapps,
            enabling seamless interactions for users to participate in AI
            training and governance, ensuring a smooth and efficient experience
            for users within the Solana ecosystem, leveraging Solana's speed and
            scalability.
          </p>
        </article>
        <article className="p-4 rounded-xl">
          <h3 className="text-2xl font-bold mb-8">
            How exactly did you integrate AI?
          </h3>
          <p className="font-medium leading-relaxed">
            We integrated AI through a community-driven approach to data
            labeling and validation, enabling continuous AI training. Our
            platform utilizes real-time feedback loops to refine and improve
            models dynamically. By leveraging AI frameworks like OpenAI's GPT
            for natural language processing and TensorFlow for machine learning,
            we ensure that our agents exhibit intelligent and autonomous
            behavior. This integration allows our agents to adapt and evolve
            based on user interactions, providing more accurate and relevant
            responses over time, while maintaining the flexibility to
            incorporate community contributions for enhanced model performance.
          </p>
        </article>
        <article className="p-4 min-h-72 md:col-span-2">
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
        </article>
      </div>
    </div>
  );
}
