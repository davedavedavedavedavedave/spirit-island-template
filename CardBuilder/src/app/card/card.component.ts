import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() cardChanged = new EventEmitter();
  public editing: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleElement(elementName: string): void {
    this.card.elements[elementName] = !this.card.elements[elementName];
    this.cardChanged.emit(this.card);
  }
  
  toggleSpeed(): void {
    this.card.speed = this.card.speed == 'fast' ? 'slow' : 'fast';
    this.cardChanged.emit(this.card);
  }

  toggleTargetType(): void {
    this.card.targetType = this.card.targetType == "Targets" ? "Target Land" : "Targets";
    this.cardChanged.emit(this.card);
  }

  toggleEdit(propertyName: string): void {
    let idx = this.editing.indexOf(propertyName);
    if (idx >= 0) {
      this.editing.splice(idx, 1);
    } else {
      this.editing.push(propertyName);
    }
  }

  changeCost(value: number): void {
    this.card.cost = value;
    this.cardChanged.emit(this.card);
  }

  changeTitle(value: string): void {
    this.card.title = value;
    this.cardChanged.emit(this.card);
  }

  changeRange(value: string): void {
    this.card.range = value;
    this.cardChanged.emit(this.card);
  }

  changeTarget(value: string): void {
    this.card.target = value;
    this.cardChanged.emit(this.card);
  }

  changeText(value: string): void {
    this.card.text = value;
    this.cardChanged.emit(this.card);
  }

  formatString(str: string): string {
    return '<p>' + (str || '').replace(/([^#]|^)#([^\s#:]+)(?::([^\s#]+))?/gm, '$1<span class="icon-$2">$3</span>')
              .replace(/\n\n/gm, '</p><p>') + '</p>';
  }
}
