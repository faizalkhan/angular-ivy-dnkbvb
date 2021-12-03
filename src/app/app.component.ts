import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  VERSION,
  ViewChild,
} from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked, DoCheck {
  name = 'Angular ' + VERSION.major;
  show = false;
  @ViewChild(HelloComponent, { static: false }) childvar: HelloComponent;

  toogle() {
    this.show = !this.show;
  }
  ngDoCheck()
  {
    console.log('Parent doCheck');
  }
  ngAfterViewInit() {
    console.log('parent component', this.childvar.child);
    this.childvar.child = 'angular 18';
  }
  ngAfterViewChecked() {
    console.log('parent component AfterViewChecked');
  }
}
