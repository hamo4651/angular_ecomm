import { Component } from '@angular/core';
import { ReactiveFormsModule,

  FormBuilder,
  FormControl,
  FormGroup, 
  Validators,


} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // list :Array<any> = [];

  
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S+$/)]],

      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirm_password: ['', [Validators.required]]

    });
  }

  

  submitted = false
  
  handleSubmit(){
    this.submitted = true;
    // const ob ={
    //   name: this.registerForm.value['name'],
    //   username: this.registerForm.value['username'],
    //   email: this.registerForm.value['email'],
    //   password: this.registerForm.value['password'] 
    // }

    // this.list.push(ob);
    // console.log(this.list);
    // // console.log(this.registerForm.value['password']);
    // console.log(this.registerForm.value['name']);
    // console.log(this.registerForm.value['username']);
    // console.log(this.registerForm.value['email']);

  }

}
