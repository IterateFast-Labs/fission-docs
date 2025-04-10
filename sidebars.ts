import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  researchSidebar: [
    {
      type: 'category',
      label: 'RAG + AI Research Paper List',
      collapsed: true,
      items: [
        'fission-research/rag-ai/concept-of-rag',
        'fission-research/rag-ai/framework-analysis',
        'fission-research/rag-ai/biased-data',
        'fission-research/rag-ai/hybrid-approach',
        'fission-research/rag-ai/true-agent',
        'fission-research/rag-ai/rag-based-finetunning',
      ],
    },
    {
      type: 'category',
      label: 'RP LLM Research Paper',
      collapsed: true,
      items: [
        'fission-research/rp-llm/llm-prompting-body',
        'fission-research/rp-llm/relatable-persona-prompting',
      ],
    },
  ],
};

export default sidebars;
