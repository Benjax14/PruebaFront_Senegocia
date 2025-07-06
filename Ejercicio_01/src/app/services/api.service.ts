import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class MarvelService {

    apiURL = environment.apiURL;
    apiKey = environment.apiKey;
    hash = environment.hash;
    ts = environment.ts;

    constructor(private http: HttpClient) { }

    getComics() {
        const url = `${this.apiURL}/comics?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
        return this.http.get(url);
    }

    getCharacters() {
        const url = `${this.apiURL}/characters?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
        return this.http.get(url);
    }

}