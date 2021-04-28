import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../models/interfaces/video';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.apiUrl}video`).pipe(
      map((videos: any) => videos.map((video: any) =>  {
        return {
          id: +video.id,
          title: video.title,
          createdAt: new Date(video.createdAt)
        };
        }
      )),
      tap(console.log)
    );
  }

  getData(): Observable<any> {
    return this.http.get<any>('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms');
  }
}
