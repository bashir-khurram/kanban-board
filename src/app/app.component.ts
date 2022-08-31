import { Component, OnInit } from '@angular/core';
import { BoardColumns, BOARD_COLUMNS_KEY, Column } from './interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTaskUpdateComponent } from './components/dialog-task-update/dialog-task-update.component';
import { DialogTaskDeleteComponent } from './components/dialog-task-delete/dialog-task-delete.component';
import { LocalStorageUtils } from './utils/local-storage-utils';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kanban board';
  boardColumns: BoardColumns = {
    todo: { tasks: [], title: 'To do' },
    impl: { tasks: [], title: 'Implementing' },
    done: { tasks: [], title: 'Done' }
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let storageData = LocalStorageUtils.get(BOARD_COLUMNS_KEY) as BoardColumns;
    this.boardColumns = Object.assign(this.boardColumns, storageData);
    if (this.boardColumns.todo.tasks.length === 0 &&
      this.boardColumns.impl.tasks.length === 0 &&
      this.boardColumns.done.tasks.length === 0) {
      fetch('./assets/dummyData.json')
      .then(res => res.json())
      .then(jsonData => {
        this.boardColumns.todo.tasks = jsonData.todo;
        this.boardColumns.impl.tasks = jsonData.impl;
        this.boardColumns.done.tasks = jsonData.done;
        LocalStorageUtils.set(BOARD_COLUMNS_KEY, this.boardColumns);
      });
    }
  }

  addTask(): void {
    this.dialog.open(DialogTaskUpdateComponent, {
      data: {},
      width: '40%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
    } as MatDialogConfig).afterClosed().subscribe(result => {
      if (result && result.length > 0) {
        this.boardColumns.todo.tasks.push(result);
        LocalStorageUtils.set(BOARD_COLUMNS_KEY, this.boardColumns);
      }
    });
  }

  editTask(task: string, column: Column): void {
    this.dialog.open(DialogTaskUpdateComponent, {
      data: { task: task },
      width: '40%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',

    } as MatDialogConfig).afterClosed().subscribe(result => {
      if (result && result.length > 0 && result !== task) {
        let index: number = -1;
        index = column.tasks.findIndex(colTask => colTask === task);
        if (index > -1) {
          column.tasks[index] = result;
          LocalStorageUtils.set(BOARD_COLUMNS_KEY, this.boardColumns);
        }
      }
    });
  }

  deleteTask(task: string, column: Column): void {
    this.dialog.open(DialogTaskDeleteComponent, {
      data: { task: task },
      width: '40%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',

    } as MatDialogConfig).afterClosed().subscribe(result => {
      if (result) {
        let index: number = -1;
        index = column.tasks.findIndex(colTask => colTask === task);
        if (index > -1) {
          column.tasks.splice(index, 1);
          LocalStorageUtils.set(BOARD_COLUMNS_KEY, this.boardColumns);
        }
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
