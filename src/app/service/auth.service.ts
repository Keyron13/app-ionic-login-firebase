import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$ = authState(this.afAuth);

  constructor(private afAuth: Auth, private toast: ToastrService) { }

  async register(email: string, password: string){
    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  login(email: string, password: string){
    console.log(email,password)
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  loginWithGitHub(){
    return signInWithPopup(this.afAuth, new GithubAuthProvider());
  }

  loginWithGoogle(){
    return signInWithPopup(this.afAuth, new GoogleAuthProvider());
  }

  loginWithFacebook(){
    return signInWithPopup(this.afAuth, new FacebookAuthProvider());
  }

  logout(){
    this.toast.success('Se cerro sesión exitosamente', 'Sesión cerrada...')
    return signOut(this.afAuth);
  }

}
