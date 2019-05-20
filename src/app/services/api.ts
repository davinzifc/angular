export var API_KEY = "4e5d63fbc1msh7fe2ee60683177ep18cd03jsn1cb6a407268f";
export var API_HOST = "deezerdevs-deezer.p.rapidapi.com";

import { MusicService } from  './music.service';
import { HttpHeaders } from '@angular/common/http';

export {
    MusicService
}

export var headers = new HttpHeaders();
headers = headers.set('X-RapidAPI-Key',`${API_KEY}`);
headers = headers.set('X-RapidAPI-Host',`${API_HOST}`);
