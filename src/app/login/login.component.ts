import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

// Servicio
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  resul: any;
  status: any;
  Err: string;
  Espera = false;
  TituloButton = 'Siguiente';

  constructor(private login: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private snackBar: MatSnackBar,
              ) {

                const Cerr = this.route.snapshot.queryParamMap.get('error');

                switch (Cerr){
                  case '28502': {
                    this.snackBar.open('Tu sesión ha caducado, vuelve a iniciar.', '', {
                      duration: 3800,
                      horizontalPosition: 'center',
                      verticalPosition: 'top',
                      panelClass: 'blue-snackbar'
                    });
                    break;
                  }


                }

               }

  ngOnInit(): void {
  }


  getUser(user: string){
    this.TituloButton = 'Validando';
    this.Espera = true;
    this.login.qUser(user).subscribe(data => {
      this.status = data;

      if (this.status.Resultado === 200){
        const that = this;
        let interval: any;
        interval = setTimeout( () => {
          that.router.navigate(['/loginPsw', that.status.Usr]);
          that.Espera = false;
        }, 1000);

      }else{
          this.Espera = false;
          this.TituloButton = 'Siguiente';
          this.snackBar.open('Usuario Incorrecto!', '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'red-snackbar'
          });
      }
      });
    }

}
