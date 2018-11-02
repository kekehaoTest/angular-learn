import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TodosRoutingModule } from './todos.routing';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { TodoComponent } from './todo/todo.component';
import { ForbiddenNameDirective } from './todo/forbiddenName.directive';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/core/services/in-memory-data/in-memory-data.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TodosRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    ForbiddenNameDirective
  ],
  providers: [TodosService]
})
export class TodosModule { }
