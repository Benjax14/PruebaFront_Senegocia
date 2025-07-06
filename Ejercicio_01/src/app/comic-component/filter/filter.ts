import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter implements OnInit {

  @Input() data: any;
  @Input() dataCharacter: any;
  @Input() source: string = '';
  @Output() filterChange: EventEmitter<any> = new EventEmitter();
  @Output() filterChangeCharacter: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onFilterChange(event: any) {
    this.filterChange.emit(event.target.value);
  }
  onFilterChangeCharacter(event: any) {
    this.filterChangeCharacter.emit(event.target.value);
  }

}
