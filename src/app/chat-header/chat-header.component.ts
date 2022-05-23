import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
  @Output() onMenuBtnClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onMenuBtnClickHandler() {
    this.onMenuBtnClickEvent.emit();
  }
}
