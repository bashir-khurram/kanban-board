import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column, TaskChange } from 'src/app/interfaces';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent  {
  @Input() columnData: Column = { title: 'No name', tasks: [] };
  @Output() edit: EventEmitter<string> =new EventEmitter<string>();
  @Output() delete: EventEmitter<string> =new EventEmitter<string>();

  constructor() { }

  updateTask(task: TaskChange ): void {
    switch(task.operation) {
      case 'edit':
        this.edit.emit(task.task);
        break;
      case 'delete':
        this.delete.emit(task.task);
    }
  }

}
