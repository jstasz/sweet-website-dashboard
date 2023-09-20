export type Message = {
  email: string;
  message: string;
  name: string;
  status: string;
  answer: string;
};

export type MessageFilter = "received" | "completed";
