import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-time-lina',
  templateUrl: './time-lina.component.html',
  styleUrls: ['./time-lina.component.scss']
})
export class TimeLinaComponent implements OnInit {

  progres: any;
  initTime: any;
  endTime: any;

  constructor(private musicService: MusicService) {
  }
  
  ngOnInit() {
    this.musicService.statusLine = document.querySelector('.boxTime .timeLine');
    this.targetLine();
  }
  
  onClick(){
    if(this.musicService.musicNow != null){ 
      this.musicService.playNow();
    }
  }
  
  songUp(dato){
    if(this.musicService.musicNow != null){
    let song = this.musicService.musicNow.querySelector('.info .box-info').children[2];
    song.currentTime = song.duration * dato;
    }
  }

  
  
  targetLine(){
      this.progres = document.querySelector('.boxTime .boxLine .line');
      this.progres.onclick = (e) => {
        let pos = e.offsetX;
        let total = this.progres.clientWidth;
        let p = (pos / total);
        this.songUp(p);
      }

    
  }

  }
