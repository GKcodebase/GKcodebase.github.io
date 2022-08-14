import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const projectsURL = 'https://api.github.com/users/GKcodebase/repos?sort=pushed';
    return this.http.get<any[]>(projectsURL);
  }

  getBlogs(): Observable<any[]> {
    const starredURL = 'https://dev.to/api/articles?username=gokul_gk';
    return this.http.get<any[]>(starredURL);
  }
}
