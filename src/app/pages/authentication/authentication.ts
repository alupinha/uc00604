import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {
onSubmit() {
throw new Error('Method not implemented.');
}

   protected signinForms!: UntypedFormGroup;

   constructor(private fb: UntypedFormBuilder) {
       this.signinForms = this.fb.nonNullable.group({
         email: [''],
         password:['']
       });


     console.log('meu form', this.signinForms.value)

   }

}


