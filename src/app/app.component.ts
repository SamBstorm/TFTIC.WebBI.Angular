import { SessionService } from './services/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'demo';

  constructor(private _sessionService : SessionService){}

  public connect(){
    this._sessionService.toggleConnection();
    alert(this._sessionService.isConnected)
  }
}
