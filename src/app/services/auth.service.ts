import { Injectable, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCredential = signal<any>(null);
  loginError = signal<string | null>(null);

  constructor(private auth: Auth) { }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      cred => {
        this.userCredential.set(cred.user);
        this.loginError.set(null);
        console.log(cred.user);
      }
    ).catch(
      (err: FirebaseError) => {
        this.userCredential.set(null);
        // this.loginError.set(err);

        this.getErrorCode(err);
        console.log(err.code);

        console.log('fehler:', err);
      }
    );
  }

  getErrorCode(err: FirebaseError) {
    let errMessage = 'Unbekanter Fehler';

    switch (err.code) {
      case 'auth/invalid-email':
        errMessage = 'Bitte eine gültige E-Mail-Adresse eingeben.';
        break;
      case 'auth/user-disabled':
        errMessage = 'Dieser Account wurde deaktiviert.';
        break;
      case 'auth/user-not-found':
        errMessage = 'Kein Benutzer mit dieser E-Mail gefunden.';
        break;
      case 'auth/wrong-password':
        errMessage = 'Falsches Passwort.';
        break;
      case 'auth/too-many-requests':
        errMessage = 'Zu viele Fehlversuche – bitte später erneut versuchen.';
        break;
      case 'auth/operation-not-allowed':
        errMessage = 'E-Mail/Passwort Login ist deaktiviert.';
        break;
      case 'auth/invalid-credential':
        errMessage = 'Falsche/s Passwort oder Email';
        break
    }

    this.loginError.set(errMessage);

  }
}
