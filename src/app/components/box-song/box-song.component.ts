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
    item.querySelector(".imagen").style.filter = "blur(2px)";
  }
  
  onLeave(e){
    let item = e.target.parentNode;
    item.querySelector(".material-icons").classList.add("hiden");
    item.querySelector(".imagen").style.filter = "blur(0px)";
  }

  onClick(e){
    let item = e.target.parentNode;
    let playIcon = item.querySelector(".material-icons");
    playIcon.innerHTML = (playIcon.innerHTML == 'pause_circle_outline')?'play_circle_outline':'pause_circle_outline';
  }

}
