import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../service/auth.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router, private toast: ToastrService) { }

  ngOnInit() {
  }

  login(form:any):void{

    if(this.form.valid){

      console.log(form)

      const body:any={
        email:form.email,
        password:form.password
      }

      /* const { email, password} = this.form.getRawValue(); */
      this.auth.login(body.email, body.password)

      .then(() => {
        this.toast.success('Se inicio sesión', 'Ingreso exitoso...')
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        this.toast.error('Correo o Contraseña incorrectos o no existente', 'Ingreso erroneo...')
        console.log(error);
      });

    }else {

      this.form.markAllAsTouched();

    }

  }

  ingresoGitHub(){
    this.auth.loginWithGitHub()
    .then(() => {
      this.toast.success('Se inicio sesión con GitHub', 'Ingreso exitoso...')
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      this.toast.error('Upss al parecer no se pudo ingresar con GitHub', 'Ingreso erroneo...')
      console.log(error);
    });
  }

  ingresoGoogle(){
    this.auth.loginWithGoogle()
    .then(() => {
      this.toast.success('Se inicio sesión con Google', 'Ingreso exitoso...')
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      this.toast.error('Upss al parecer no se pudo ingresar con Google', 'Ingreso erroneo...')
      console.log(error);
    });
  }

  ingresoFacebook(){
    this.auth.loginWithFacebook()
    .then(() => {
      this.toast.success('Se inicio sesión con Faceboook', 'Ingreso exitoso...')
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      this.toast.error('Upss al parecer no se pudo ingresar con Facebook', 'Ingreso erroneo...')
      console.log(error);
    });
  }

  ingresoMicrosoft(){
    this.auth.loginWithMicrosoft()
    .then(() => {
      this.toast.success('Se inicio sesión con Microsoft', 'Ingreso exitoso...')
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      this.toast.error('Upss al parecer no se pudo ingresar con Microsoft', 'Ingreso erroneo...')
      console.log(error);
    });
  }

}
