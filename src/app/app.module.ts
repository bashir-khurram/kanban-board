import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { DialogTaskDeleteComponent } from './components/dialog-task-delete/dialog-task-delete.component';
import { DialogTaskUpdateComponent } from './components/dialog-task-update/dialog-task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardTaskComponent,
    BoardColumnComponent,
    DialogTaskDeleteComponent,
    DialogTaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
