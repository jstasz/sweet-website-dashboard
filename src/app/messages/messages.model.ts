export type Message = {
  id: string;
  email: string;
  message: string;
  name: string;
  status: string;
  answer: string;
};

export type MessageFilter = "received" | "completed";
