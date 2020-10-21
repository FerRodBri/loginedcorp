import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Servicio
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.scss']
})
export class PwdComponent implements OnInit {

  usr: string;
  status: any;

  constructor(private login: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
              ) {
                this.route.params.subscribe(params => {
                  this.usr = params.loguser;
                });
              }

  ngOnInit(): void {

  }

  IniciarSIP(Clve: string){

      this.login.qPwd( this.usr, Clve ).subscribe(data => {
        this.status = data;
        if (this.status.Resultado === 200) {
          // En producción
          // window.location.href = 'https://app.edcorp.mx';
          // Pruebas
          // Arriba en pruebas
          // window.location.href = 'http://localhost:4200/';
          // Local
           alert('Ya estas dentro');
        }else{
          this.router.navigate(['/login']);
          this.snackBar.open('Contraseña Incorrecta!', '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'red-snackbar'
          });
        }
      });
  }



}
