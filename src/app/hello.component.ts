import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello Raja {{name}}!</h1> {{child}}`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() name: string;
  intervaltime = null;
  child = 'Hero Angular';

  constructor() {
    console.log('construct called');
    console.log(this.name);
  }
  ngOnChanges(SimpleChange) {
    console.log('OnChanges called', SimpleChange.name.currentValue);
  }
  ngOnInit() {
    console.log('Component Initialized');
    // this.intervaltime = setInterval(() => {
    //   console.log(new Date());
    // }, 1000);
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    console.log('Component Destroy');
    clearInterval(this.intervaltime);
  }
}
