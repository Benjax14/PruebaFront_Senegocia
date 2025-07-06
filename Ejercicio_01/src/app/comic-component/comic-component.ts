import { Component, OnInit, inject } from '@angular/core';
import { MarvelService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { Filter } from "./filter/filter";

interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string, extension: string };
}

interface Character {
  id: number;
  name: string;
  thumbnail: { path: string, extension: string };
}

@Component({
  selector: 'app-comic-component',
  templateUrl: './comic-component.html',
  styleUrl: './comic-component.css',
  imports: [CommonModule, Filter],
})

export class ComicComponent implements OnInit {

  apiService = inject(MarvelService);
  comics: Comic[] = [];
  filteredComics: Comic[] = [];
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.isLoading = true;
    forkJoin({
      comics: this.apiService.getComics(),
      characters: this.apiService.getCharacters()
    }).subscribe({
      next: (data: any) => {
        this.comics = data.comics.data.results as Comic[];
        this.characters = data.characters.data.results as Character[];
        this.isLoading = false;
        this.filteredComics = this.comics
        this.filteredCharacters = this.characters;
      },
      error: (error) => {
        console.error('Error al buscar:', error);
        this.isLoading = false;
      }
    });
  }

  onFilterChangeComic(event: any) {
    const selectedComicTitle = event;
    if (selectedComicTitle) {
      this.filteredComics = this.comics.filter(comic => comic.title === selectedComicTitle);
    } else {
      this.ngOnInit();
    }
  }

  onFilterChangeCharacter(event: any) {
    const selectedCharacterName = event;
    if (selectedCharacterName) {
      this.filteredCharacters = this.characters.filter(character => character.name === selectedCharacterName);
    } else {
      this.ngOnInit();
    }
  }

}
