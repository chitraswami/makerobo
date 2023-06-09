import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',

})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['dialog-content-example-dialog.css']

})
export class DialogContentExampleDialog {}


