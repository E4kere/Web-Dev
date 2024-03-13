import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbumById(id).subscribe(album => {
      this.album = album;
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbumTitle(this.album.id, this.album.title).subscribe(() => {
      // Optionally, you can show a success message here
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
