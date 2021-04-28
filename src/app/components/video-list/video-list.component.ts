import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Video} from '../../models/interfaces/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  placeholder  = 'Search cryptocurrency';
  searchString = '';
  videos: Video[];
  data: any;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  search($event: string): void {
    console.log('parent', $event);
    this.searchString = $event;

    const searchedVideo: Video = this.videos.find((video: Video) => video.title === $event);
    alert(`${searchedVideo.title} ${searchedVideo.createdAt}`);
  }
}
