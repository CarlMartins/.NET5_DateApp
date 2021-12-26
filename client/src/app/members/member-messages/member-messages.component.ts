import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../_models/message';
import { MessageService } from '../../_services/message.service';


@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
})
export class MemberMessagesComponent implements OnInit {
  @Input() username: string;
  messages: IMessage[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessageThread(this.username)
      .subscribe(messages => {
        this.messages = messages
      })
  }

}
