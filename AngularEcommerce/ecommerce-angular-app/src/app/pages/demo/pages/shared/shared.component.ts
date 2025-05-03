import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'src/app/shared';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexError = regexErrors;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      myInput: [
        null, 
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.number)
          ]
        }
      ]
    });
  }

  onPatchValue(): void {
    this.form.patchValue({myInput: 'Vaxi Drez'});
  }

  onSubmit(): void {
    console.log('Button pressed!');
  }

  organizeElement() {
    this.isInline = !this.isInline;
  }
}