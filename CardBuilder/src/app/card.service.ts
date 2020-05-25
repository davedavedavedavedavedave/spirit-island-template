import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Element {
  public sun: boolean;
  public moon: boolean;
  public fire: boolean;
  public air: boolean;
  public water: boolean;
  public earth: boolean;
  public plant: boolean;
  public animal: boolean;
}

export class Card {
  public title: string;
  public cost: number;
  public elements: Element;
  public speed: string;
  public range: string;
  public targetType: string;
  public target: string;
  public text: string;
  public threshold: string;
  public imageUrl: string;
  public imageBase64: string;

  constructor() {
    this.elements = new Element();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cards$: BehaviorSubject<Card[]>;

  constructor() {
    let cardsStr = localStorage.getItem("cards");
    if (cardsStr) {
      this.cards$ = new BehaviorSubject(JSON.parse(cardsStr));
    } else {
      this.cards$ = new BehaviorSubject([]);
    }

    this.cards$.subscribe(cards => {
      localStorage.setItem("cards", JSON.stringify(cards));
    });
  }
}
