import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headers } from './api';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  musicNow: any;
  statusLine: any;

  constructor(private http:HttpClient) { }

  get(dato){
    return this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${dato}`,{headers});
  }

  playNow(){
    let now = this.musicNow.querySelector(".info").querySelector(".box-info").children[2];
    let icon = this.musicNow.querySelector(".material-icons");
    let iconLine = this.statusLine.querySelector(".material-icons.play");
    if(now.paused){
        now.play();
        icon.innerHTML = 'pause_circle_outline';
        iconLine.innerHTML = 'pause_circle_outline'; 
      }else{
        now.pause();
        icon.innerHTML = 'play_circle_outline';
        iconLine.innerHTML = 'play_circle_outline';
      }
      now.onended = function(){
        icon.innerHTML = 'play_circle_outline';
        iconLine.innerHTML = 'play_circle_outline';
      }
  }
  currentLine(){
    let song = this.musicNow.querySelector('.info .box-info').children[2];
    let p = (song.currentTime / song.duration)*100;
    this.statusLine.querySelector('.current').style.width = `${p}%`;
  }

  timer(song){
    let initMin = Math.floor(song.currentTime/60);
    let initSeg = Math.floor(song.currentTime%60);
    let initT = "";
    if(initSeg < 10){
      initT = `${initMin}:0${initSeg}`;
    }else{
      initT = `${initMin}:${initSeg}`;
    }
    let finishMin = Math.floor(song.duration/60);
    let finishSeg = Math.floor(song.duration%60);
    let finishT = "";
    if(finishSeg < 10){
      finishT = `${finishMin}:0${finishSeg}`;
    }else{
      finishT = `${finishMin}:${finishSeg}`;
    }
    this.statusLine.querySelector('.boxTime .boxLine').children[0].innerHTML = initT;
    this.statusLine.querySelector('.boxTime .boxLine').children[2].innerHTML = finishT;

    
    
  }
  
}
