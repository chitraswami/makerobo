import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})

export class CatchComponent implements OnInit {
  showComponent = false;

  constructor(private chatService: ChatService)  { }

  ngOnInit() {
    this.chatService.getShowNewComponent().subscribe((showComponent: boolean) => {
      this.showComponent = showComponent;
    });
  }
}

