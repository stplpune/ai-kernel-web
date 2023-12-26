import { Injectable } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CommonMethodsService {

  constructor(private _SnackBar: MatSnackBar) { }

  snackBar(data: string, status: number) {
    let snackClassArr: any = ['snack-success', 'snack-danger', 'snack-warning'];
    this._SnackBar.open(data, " ", {
      duration: 2000,
      panelClass: [snackClassArr[status]],
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
    })
  }
}
