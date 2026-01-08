import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {


   protected signinForms!: UntypedFormGroup;

   constructor(private fb: UntypedFormBuilder) {
       this.signinForms = this.fb.nonNullable.group({
         email: ['', [Validators.required]],
         password:['', [Validators.required]]
       });


     console.log('meu form', this.signinForms.value)

   }

onSubmit() {
  this.signinForms.get('email')?.getError('required');
  console.log("Controls", this.signinForms.controls['email']);

console.log("Meu Forms", this.signinForms.value);
}

}


