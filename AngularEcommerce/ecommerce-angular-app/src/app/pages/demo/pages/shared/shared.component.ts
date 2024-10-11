import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null]
    });
  }

  onPatchValue(): void {
    this.form.patchValue({input: 'Vaxi Drez'});
  }

  onSubmit(): void {
    console.log('Button pressed!');
  }
}