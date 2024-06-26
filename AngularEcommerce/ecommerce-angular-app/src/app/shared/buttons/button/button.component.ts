import { Component, Input } from '@angular/core';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: ButtonType;

  constructor() {
    this.type = 'button';
  }

  ngOnInit(): void {

  }
}
