import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {of} from "rxjs";

@Injectable()
export class AvatarService {
  private AVATARS = [
    'svg-1',
    'svg-2',
    'svg-3',
    'svg-4',
    'svg-5',
    'svg-6',
    'svg-7',
    'svg-8',
    'svg-9',
    'svg-10',
    'svg-11',
    'svg-12',
    'svg-13',
    'svg-14',
    'svg-15',
    'svg-16',
    'NONE'
  ];

  constructor() {}

  getAvatars(): Observable<string[]> {
    return of(this.AVATARS);
  }
}
