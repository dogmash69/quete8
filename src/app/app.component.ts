import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete8';

  toPush: boolean = false;

  onomatopoeiaList: Array<string> = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event)
  }

  pushIn(): void {
    this.toPush = true;
  }

}
