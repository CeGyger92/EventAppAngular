import { Subject } from 'rxjs';
export interface Event{
  title: string;
  location: string;
  description: string;
}

export class EventsService{
  private events: Event[] = [];
  private eventsUpdated= new Subject<Event []>();

  getEvents() {
    return [...this.events];
  }

  getEventUpdateListener() {
    return this.eventsUpdated.asObservable();
  }

  addEvent(title: string, location: string, description: string){
    const event: Event = {title: title, location: location, description: description};
    this.events.push(event);
    this.eventsUpdated.next([...this.events]);
  }
}
