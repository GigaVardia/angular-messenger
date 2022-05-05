import { Component, OnInit } from '@angular/core';
import { Message } from '../types/Message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: Message[] = [
    {
      id: 'aaeasesaesac',
      sender_id: '1111',
      is_outgoing: false,
      content: 'text',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
