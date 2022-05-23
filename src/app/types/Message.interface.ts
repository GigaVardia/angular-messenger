export interface Message {
  sender_id: string;
  id: string;
  is_outgoing: boolean;
  content: MessageContentType;
}

export interface MessageContentType {
  attachment?: string;
  links?: string[];
  text: string;
}
