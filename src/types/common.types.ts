export type InfoItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type SubscriptionCardItem = {
  id: number;
  price: number;
  type: "monthly" | "yearly";
  onSelect?: () => void;
  agents: number;
  plan?: "basic" | "plus" | "pro";
};

export type FAQType = {
  id: number;
  title: string;
  description: string;
};
