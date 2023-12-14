import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private POST_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  // Viết các phương thức trong service ở đây
  // GET
  getAll(): Observable<any> {
    return this.http
      .get<any>(`${this.POST_URL}`)
      .pipe(catchError(this.handleError));
  }

  // POST
  addPost(post: any): Observable<any> {
    return this.http
      .post<any>(`${this.POST_URL}`, post)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  deletePost(id: number): Observable<unknown> {
    const url = `${this.POST_URL}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // PUT
  updatePost(post: any): Observable<any> {
    const url = `${this.POST_URL}/${post.id}`;
    return this.http.put<any>(url, post).pipe(catchError(this.handleError));
  }
}

// ng g s service/post
