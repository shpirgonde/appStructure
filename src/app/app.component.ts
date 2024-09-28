import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from "./modules/RxJS/rxjs/rxjs.component";
import { BgridSimpleComponent } from "./modules/bootstrap/bgrid-simple/bgrid-simple.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsComponent, BgridSimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'apstructure';
}
