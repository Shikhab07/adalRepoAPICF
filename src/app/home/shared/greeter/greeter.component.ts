import { ExampleService } from 'app/shared/utility/example.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'boilerplate-greeter',
  templateUrl: 'greeter.component.html',
  styleUrls: ['./shared/greeter.component.scss'],
})
export class GreeterComponent implements OnInit {

  @Input() greetings: string;
  constructor() {
  }

  ngOnInit() {
    if (!this.greetings) {
      this.greetings = 'home.welcome';
    }
  }
}
