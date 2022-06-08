import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/authorization/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private API_URL = environment.apiUrl;
  public todo: Todo;
  constructor(private http: HttpClient, private authService: AuthService) {}

  public get httpHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `Bearer ${this.authService.token}`,
    });
  }

  public create(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.API_URL}/todos/`, JSON.stringify(todo), {
        headers: this.httpHeader,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public getAll(): Observable<Todo[]> {
    return this.http
      .get(`${this.API_URL}/todos/`, {
        headers: this.httpHeader,
      })
      .pipe(map((response: Todo[]) => response));
  }

  public remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/todos/${id}`, {
      headers: this.httpHeader,
    });
  }

  public edit(id: number, title: string): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.API_URL}/todos/${id}`, JSON.stringify({ title }), {
        headers: this.httpHeader,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public check(id: number, completed: boolean): Observable<Todo> {
    return this.http
      .patch<Todo>(
        `${this.API_URL}/todos/${id}`,
        {},
        {
          headers: this.httpHeader,
        }
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
