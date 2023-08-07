import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService} from './../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    alias: ['', [Validators.required]],
  })

  constructor(private formBuilder:FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  registro(form:any){


    if(this.form.valid){

      console.log(form)

      const body:any={
        email:form.email,
        password:form.password,
        alias:form.confirmPassword
      }

      /* const { email, password, confirmPassword} = this.form.getRawValue(); */
      this.auth.register(body.email, body.password)

      .then(() => {
        this.router.navigate(['/home'])
      })
      .catch((error) => {
        console.log(error);
      });

    }else {

      this.form.markAllAsTouched();

    }

  }

}
