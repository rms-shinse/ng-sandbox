import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  hello(): string {
    return 'hello, from UiService';
  }
}
