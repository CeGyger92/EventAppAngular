import { Component } from '@angular/core';
import {Event} from './event/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventsapp';
  retrievedEvents = [];

  onEventAdded(event){
    this.retrievedEvents.push(event);
    console.log(event);
  }
}
