import { Component, OnInit, signal } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-pokenmon',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule],
  templateUrl: './pokenmon.component.html',
  styleUrl: './pokenmon.component.scss'
})
export class PokenmonComponent implements OnInit {
  public silhouette: string = '';
  public name: string = '';
  public guess: string = '';
  public pokemonOptions: any = [];
  public counter = signal(0);
  public isSelectionCorrect: boolean = false;
  public isContentDisplayed: boolean = false
  constructor(private shareService: SharedService) { }
  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    const randomId = Math.floor(Math.random() * 50) + 1; // First 50 Pokemon
    this.shareService.getPokemon(randomId).subscribe((data: any) => {
      this.silhouette = data.sprites.front_default; 
      this.name = data.name;
      this.getFilterPokeman();//to avoid duplicate pokemon options
    });
  }

  checkSelection(value: string): void {
    if (value === this.name.toLowerCase()) {
      this.increMent()
      this.isSelectionCorrect = true;

    } else {
      this.decreMent()
      this.isSelectionCorrect = false;
    }

    this.displayMessage()
  }

  private getRandomPokemonName(names: any): void {
    this.pokemonOptions = []
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      if (names[randomIndex] != this.name) {
        this.pokemonOptions.push(names[randomIndex])
      }
    }
  }

  private getFilterPokeman(): void {
    const options = this.shareService.pokeMonNames.filter(pokeman => pokeman.name != this.name);
    this.getRandomPokemonName(options)
    this.pokemonOptions.push({ id: 4, name: this.name })
  }

  private increMent(): void {
    this.counter.set(this.counter() + 1)
  }
  private decreMent(): void {
    this.counter.set(this.counter() - 1)
  }

  public displayMessage(): void {
    this.isContentDisplayed = true
  }

  public loadNextPokemon(): void {
    this.isContentDisplayed = false
    this.loadPokemon();
  }
}




