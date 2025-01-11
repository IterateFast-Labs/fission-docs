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
        <article className="p-4 rounded-xl">
          <p className="font-medium leading-relaxed">
            Fission is a decentralized platform that transforms the AI landscape by integrating blockchain and Web3 frameworks to create a transparent, fair, and inclusive approach to AI development. With a focus on community-driven data labeling, decentralized governance, and tokenized incentives, Fission empowers contributors from around the world to participate in shaping AI models that benefit all.
            <br/>
            <br/>
            At Fission, we leverage blockchain infrastructure to democratize AI training and governance, ensuring that everyone has a stake in the future of AI. Our ecosystem is designed for scalability, enabling a wide range of applications—from AI-powered meme coins to decentralized AI agents. 
            As we build momentum and grow, our long-term vision is to redefine how AI models are created, managed, and monetized, fostering a decentralized and equitable AI economy.
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
