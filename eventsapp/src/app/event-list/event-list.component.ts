import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { Event } from '../event/event.model';
import { EventsService} from '../event/event.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']})

  export class EventListComponent implements OnInit, OnDestroy{
    events: Event[] = [];
    private eventsSub: Subscription;

    constructor(public eventsService: EventsService) {}

    ngOnInit(): void {
      this.events= this.eventsService.getEvents();
      this.eventsSub= this.eventsService.getEventUpdateListener().subscribe((events: Event[]) => {
        this.events= events;
      });
    }

    ngOnDestroy(){
      this.eventsSub.unsubscribe();
    }
  }
