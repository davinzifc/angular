import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
@Component({
  selector: 'app-box-song',
  templateUrl: './box-song.component.html',
  styleUrls: ['./box-song.component.scss']
})
export class BoxSongComponent implements OnInit {
  condicion: boolean = false;
  active:boolean = false;
  result: any = [];
  buscar:string = "";
  listen:any = [null,null];


  constructor(private musicService: MusicService) { 
    
  }

  ngOnInit() {
  }
 

  updateData(e){
    this.buscar = e.target.value;
  }

  search(){
    this.result = [];
    this.musicService.get(this.buscar).subscribe((data)=>{
      try{
      for (let i = 0; i < data["data"].length; i++) {
        const element = data["data"][i];
        this.result.push(element);
      }
    }catch(error){

    }
    console.log(this.result);
    });
  }

  onHover(e){
    let item = e.target.parentNode;
    item.querySelector(".material-icons").classList.remove("hiden");
    item.querySelector(".imagen").style.filter = "blur(1.5px)";
  }
  
  onLeave(e){
    let item = e.target.parentNode;
    item.querySelector(".material-icons").classList.add("hiden");
    item.querySelector(".imagen").style.filter = "blur(0px)";
  }

  onClick(e){
    let item = e.target.parentNode;
    let playIcon = item.querySelector(".material-icons");
    let song = item.parentNode.querySelector(".info").querySelector(".box-info").children[2];
    this.musicService.musicNow = e.target.parentNode.parentNode;
    this.musicService.playNow();
    this.nowSong(song, playIcon);
    song.ontimeupdate = () => {this.musicService.currentLine();
                               this.musicService.timer(song);};
  }

  nowSong(song, icon){
    if(this.listen[0] == null){
      this.listen[0] = song;
      this.listen[1] = icon;
      
    }else if(this.listen[0] != song){
        this.listen[0].pause();
        this.listen[0].currentTime = 0;
        this.listen[1].innerHTML = 'play_circle_outline';
        this.listen[0] = song;
        this.listen[1] = icon;
      }

  }

  onKey(e){
    if(e['keyCode'] == 13){
      this.search();
    }
  }

}
