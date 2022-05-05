export interface Message {
  sender_id: string;
  id: string;
  is_outgoing: boolean;
  content: string;
}
