import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'; 
import { Task } from '../core/models/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  newTaskContent: string = '';
  taskToUpdate: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  addTask(): void {
    if (this.newTaskContent.trim()) {
      this.taskService.addTask(this.newTaskContent).subscribe(task => {
        this.tasks.push(task);
        this.newTaskContent = ''; 
      });
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  startUpdate(task: Task): void {
    this.taskToUpdate = { ...task };
  }

  updateTask(): void {
    if (this.taskToUpdate) {
      this.taskService.updateTask(this.taskToUpdate.id, this.taskToUpdate.content).subscribe(updatedTask => {
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
        this.taskToUpdate = null; 
      });
    }
  }
}
