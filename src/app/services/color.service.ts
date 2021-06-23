import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private color$ = new Subject<boolean>();

  getColorMode() {
    return this.color$;
  }

  changeColorMode(color: boolean) {
    this.color$.next(color);
    console.log('service: ' + color);
  }
}
