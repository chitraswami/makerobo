import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private showComponent = new BehaviorSubject<boolean>(false);

  showNewComponent() {
    this.showComponent.next(true);
  }

  getShowNewComponent() {
    return this.showComponent.asObservable();
  }
}
