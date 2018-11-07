import {Observable} from "rxjs";

export abstract class SystemEventsApi {
  getNewsItems: () => Observable<any>;
  getSystemEventItems: (newsItems: string[]) => Observable<SystemEvent[]>;
  openSideNav: () => void;
  getOpenSideNav: () => Observable<boolean>;
  toggleSystemEventReadStatus: (systemEvent: SystemEvent, newsItems: string[]) => void;
  getNumberOfUnreadSystemEventsObservable: () => Observable<number>;
}

export interface SystemEvent {
  name: string;
  date: Date;
  read: boolean;
}
