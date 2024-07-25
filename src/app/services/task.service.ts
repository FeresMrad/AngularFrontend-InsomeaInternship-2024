import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../core/models/Task'; // Import the model

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:5000/api/tasks'; // URL to Flask API

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(content: string): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, { content });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateTask(id: number, content: string): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, { content });
  }
}
