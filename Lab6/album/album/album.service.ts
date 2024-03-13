import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {
  private baseUrl = 'http://your-api-url.com/';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}albums`);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}albums/${id}`);
  }

  updateAlbumTitle(id: number, title: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}albums/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}albums/${id}/photos`);
  }
}
