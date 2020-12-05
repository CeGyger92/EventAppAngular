import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EventsService} from '../event/event.model';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  userEventTitle = '';
  userEventDescription = '';
  userEventLocation = '';

  @Output() userEventCreated = new EventEmitter();

  constructor(public eventsService: EventsService) { }

  onAddEvent(form: NgForm){
    if (form.invalid){return;}
    this.eventsService.addEvent(form.value.title, form.value.location, form.value.description);
  }


  ngOnInit(): void {
  }

}
