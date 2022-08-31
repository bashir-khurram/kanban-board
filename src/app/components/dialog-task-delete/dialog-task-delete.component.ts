import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-delete',
  templateUrl: './dialog-task-delete.component.html'
})
export class DialogTaskDeleteComponent implements OnInit {

  task: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData : any,
    public dialogRef: MatDialogRef<DialogTaskDeleteComponent>) {
  }

  ngOnInit(): void {
    this.task = this.dialogData.task;
  }
}
