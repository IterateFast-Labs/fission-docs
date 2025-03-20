---
title: RAFT - RAG based Finetunning
date: 2025-01-01
authors: daemonlee
---

### Why We Need RAFT: Adapting Language Models to Domain-Specific RAG

The evolution of Retrieval-Augmented Generation (RAG) has unlocked unprecedented possibilities in AI, enabling generative models to retrieve and incorporate external data dynamically. However, as AI frameworks increasingly interface with domain-specific contexts like Web3, there is a growing need for a specialized adaptation mechanism—RAFT (Retrieval-Adapted Fine-Tuning). This blog explores why RAFT is essential for adapting language models to domain-specific RAG, enhancing real-time interactions with the Web3 community and its users.

### The Challenge: Domain-Specificity in RAG

Web3 ecosystems are inherently dynamic and domain-specific, characterized by:

1. **Unique Jargon and Concepts**: Terms like "staking," "DAO," "NFT minting," and "gas fees" are ubiquitous in Web3 but rarely encountered in general-purpose datasets.
2. **Rapidly Evolving Information**: Web3 platforms are continuously updated with new protocols, smart contracts, and token standards.
3. **Decentralized Data Sources**: Information is dispersed across blockchains, decentralized file systems, and community-managed repositories.

While RAG frameworks excel in retrieving relevant data, they often struggle with adapting generative outputs to these domain-specific requirements. Without fine-tuning, language models risk producing generic or irrelevant responses that fail to meet the expectations of Web3 users.

### Enter RAFT: Retrieval-Adapted Fine-Tuning

![image.png](/img/docs/blog/post/raft-rag/1-img.png)

RAFT bridges the gap between general-purpose language models and domain-specific RAG systems. It fine-tunes generative AI models based on:

1. **Domain-Specific Retrieval Feedback**: Using real-time feedback loops from RAG outputs to iteratively improve model understanding of domain-specific data.
2. **Contextual Adaptation**: Embedding domain-specific knowledge directly into the model, ensuring outputs align with Web3 terminology and concepts.
3. **Real-Time Interaction**: Enabling models to dynamically adapt to the evolving nature of decentralized communities.

### Why RAFT is Essential for Web3

### 1. **Enhanced Domain Understanding**

By fine-tuning on retrievals from Web3-specific datasets, RAFT ensures:

- Accurate interpretations of blockchain data.
- Consistent use of Web3 terminology.
- Contextually relevant responses to user queries.

### 2. **Improved User Experience**

RAFT reduces response errors and latency, providing Web3 users with:

- Precise answers to technical questions (e.g., "How do I connect my wallet?").
- Contextualized insights from decentralized governance proposals.

### 3. **Adaptation to Rapid Change**

With RAFT, models can:

- Quickly incorporate updates from newly launched protocols.
- Adjust to shifts in community discourse and trending topics.

### 4. **Scalability for Decentralized Data**

Using RAFT, language models can seamlessly interface with decentralized storage solutions like [IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/), as well as multi-modal vector databases like [Milvus](https://milvus.io/).

### How RAFT Works

1. **Data Collection**:
   - Gather domain-specific datasets from decentralized sources, including blockchain data, community forums, and project whitepapers.
2. **Domain-Specific Retrieval**:
   - Leverage RAG frameworks to fetch relevant data dynamically.
3. **Fine-Tuning**:
   - Adapt language models using retrieval outputs, incorporating:
     - Lexical and semantic feedback.
     - Domain-specific annotations.
     - Task-specific prompts (e.g., transaction analysis, community Q&A).
4. **Evaluation and Feedback**:
   - Iteratively evaluate model outputs using metrics like BLEU, ROUGE, and human validation.

<!-- truncate -->

### Comparative Analysis: General RAG vs. Domain-Specific RAFT

### Figure 1: Accuracy Comparison

- **General RAG**: Struggles with domain-specific jargon.
- **RAFT-Enhanced RAG**: Achieves significantly higher accuracy in Web3-related tasks.

### Figure 2: Response Latency

- **General RAG**: Slower due to inefficiencies in adapting retrieved data.
- **RAFT-Enhanced RAG**: Optimized for real-time interactions.

### Real-World Applications

### 1. **Decentralized Governance Support**:

- RAFT enables accurate summarization of proposals from DAOs, fostering informed decision-making within communities.

### 2. **Web3 Customer Support**:

- RAFT-enhanced chatbots can address user queries about wallets, transactions, and staking mechanisms with precision.

### 3. **Multi-Chain Interoperability**:

- Facilitates understanding of cross-chain protocols, improving developer support for interoperability solutions.

### Why Our Technology is the Future

By integrating RAFT into our domain-specific RAG systems, we are setting a new standard for real-time, contextually accurate AI in the Web3 space. Our approach:

- Harnesses cutting-edge retrieval and fine-tuning methodologies.
- Leverages decentralized data to ensure inclusivity and transparency.
- Empowers Web3 communities with AI that truly understands their unique needs.

Explore how RAFT is transforming Web3 interactions and shaping the next generation of decentralized AI solutions.
