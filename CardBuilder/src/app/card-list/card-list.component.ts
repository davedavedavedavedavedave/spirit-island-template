import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards$: BehaviorSubject<Card[]>;

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.cards$;
  }

  removeCard(idx: number): void {
    let cards = this.cards$.getValue();
    cards.splice(idx, 1);
    this.cards$.next(cards);
  }

  addCard(): void {
    this.cards$.next(this.cards$.getValue().concat(new Card()));
  }

}
