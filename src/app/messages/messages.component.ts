import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-messages',
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }

}
