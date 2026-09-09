export type StackTool = {
  name: string;
  slug: string;
  category: string;
  integrationStatus: "built" | "supported";
};
export const STACK_TOOLS: StackTool[] = [
  {
    name: "Google Calendar",
    slug: "google-calendar",
    category: "Scheduling",
    integrationStatus: "supported",
  },
  {
    name: "Gmail",
    slug: "gmail",
    category: "Email",
    integrationStatus: "supported",
  },
  {
    name: "Google Drive",
    slug: "google-drive",
    category: "Files",
    integrationStatus: "supported",
  },
  {
    name: "Google Sheets",
    slug: "google-sheets",
    category: "Spreadsheets",
    integrationStatus: "supported",
  },
  {
    name: "Slack",
    slug: "slack",
    category: "Messaging",
    integrationStatus: "supported",
  },
  {
    name: "Stripe",
    slug: "stripe",
    category: "Payments",
    integrationStatus: "supported",
  },
  {
    name: "QuickBooks",
    slug: "quickbooks",
    category: "Accounting",
    integrationStatus: "supported",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    integrationStatus: "supported",
  },
  {
    name: "Calendly",
    slug: "calendly",
    category: "Scheduling",
    integrationStatus: "supported",
  },
  {
    name: "Notion",
    slug: "notion",
    category: "Documents",
    integrationStatus: "supported",
  },
  {
    name: "Airtable",
    slug: "airtable",
    category: "Database",
    integrationStatus: "supported",
  },
  {
    name: "Zoom",
    slug: "zoom",
    category: "Meetings",
    integrationStatus: "supported",
  },
];
