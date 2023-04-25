import { Component  } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent {
  isActive: boolean = false;

  constructor(private chatService: ChatService, private router: Router) {}

  showNewComponent() {
    this.isActive = true;
    this.chatService.showNewComponent();
    this.router.navigate(['/catch']);
  }

  goToSummary() {
    this.router.navigate(['/summary']);
  }

}










