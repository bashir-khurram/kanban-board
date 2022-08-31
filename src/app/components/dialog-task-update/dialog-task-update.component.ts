import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-update',
  templateUrl: './dialog-task-update.component.html'
})
export class DialogTaskUpdateComponent implements OnInit {

  task: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData : any,
    public dialogRef: MatDialogRef<DialogTaskUpdateComponent>) {
  }

  ngOnInit(): void {
    this.task = this.dialogData.task;
  }

}
