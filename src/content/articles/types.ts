export type Claim = { text: string; source: string; url: string; date: string };
export type AgentTask = {
  name: string;
  todayItLooksLike: string;
  whoItSuits: string;
};
export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  icp: string;
  publishedISO: string;
  updatedISO: string;
  intro: string[];
  nowAnswer: string;
  tasksAnswer: string;
  faqAnswer: string;
  doThisNow: { heading: string; body: string }[];
  agentTasks: AgentTask[];
  claims: Claim[];
  faq: { q: string; a: string }[];
};
