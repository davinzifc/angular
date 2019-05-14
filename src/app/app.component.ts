import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reproductor';

  constructor(private musicService: MusicService){

  }

  updateName(e){
   this.musicService.music.title = e.target.value;
  }

}
