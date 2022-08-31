import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskChange } from 'src/app/interfaces';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss']
})
export class BoardTaskComponent implements OnInit {
  @Input() task: string = '';
  @Output() changeTask: EventEmitter<TaskChange> =new EventEmitter<TaskChange>();

  constructor() { }

  ngOnInit(): void {
  }

}
