import { Component } from '@angular/core';
import { Task } from '../core/models/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  listTasks:Task[]=[
    {id:1,"name": "El fel","address":"Borj Cedria"},
    {id:2,"name": "El yasmine","address":"Ezzahra"},
    {id:3,"name": "El Arij","address":"Rades"},
    {id:4,"name": "El Anber","address":"Manzah 5"}
    ];

}
