import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headers } from './api';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  music = {
    cover_medium: "",
    id: null,
    title: ""
  }

  constructor(private http:HttpClient) { }

  get(dato){
    return this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${dato}`,{headers});
  }
}
