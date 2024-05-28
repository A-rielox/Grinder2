import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

export interface SignupCredentials {
   username: string;
   password: string;
   passwordConfirmation: string;
}
interface SignupResponse {
   username: string;
}
interface SignedinResponse {
   authenticated: boolean;
   username: string;
}
interface SigninCredentials {
   username: string;
   password: string;
}

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   rootUrl = 'https://api.angular-email.com';
   signedin$ = new BehaviorSubject<any>(null); // null p' indicar q no conocemos es estado de autenticacion todavia
   username: string = '';

   constructor(private http: HttpClient) {}

   usernameAvailable(username: string) {
      return this.http.post<{ available: boolean }>(
         this.rootUrl + '/auth/username',
         {
            username: username,
         }
      );
   }

   // 🟡 ,{withCredentials: true} para q Angular no descarte las cookies y ahora las guarde y reenvie
   signup(credentials: SignupCredentials) {
      return (
         this.http
            .post<SignupResponse>(
               this.rootUrl + '/auth/signup',
               credentials /* , {withCredentials: true} */
            )
            //si viene un error del http.post se salta el tap q es lo q quiero
            .pipe(
               tap((res) => {
                  this.signedin$.next(true);
                  this.username = res.username;
               })
            )
      );
   }

   // revisa si ya esta logeado
   checkAuth() {
      return this.http
         .get<SignedinResponse>(this.rootUrl + '/auth/signedin')
         .pipe(
            tap((res) => {
               // console.log(res);  {authenticated: true, username: 'arielox1'}

               this.signedin$.next(res.authenticated);
               this.username = res.username;
            })
         );
   }

   signout() {
      return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
         tap((res) => {
            console.log('SIGN out RESPONSE', res);
            this.signedin$.next(false);
         })
      );
   }

   signin(credentials: SigninCredentials) {
      return this.http
         .post<{ username: string }>(this.rootUrl + '/auth/signin', credentials)
         .pipe(
            // si entra credenciales incorrectas, viene error como response del http post y se salta el tap()
            tap((res) => {
               console.log('SIGN IN RESPONSE', res);
               this.signedin$.next(true);
               this.username = res.username;
            })
         );
   }
}

// 🟡 la razon de usar un subject ( q es un observable y observer ) es q puede emitir eventos desde fuera de el (con .next()) en cualquier momento.
// EXPLICACION EN VIDEO 297-298 (oh no, more rxjs - using behaviorSubjects) DE seccion 22
// 🟡 con BehaviorSubject tengo acceso al ultimo valor emitido por el subject
