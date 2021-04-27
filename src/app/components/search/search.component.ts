import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  name: string;
  searchString = '';

  @Output()
  searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendSearchString(): void {
    console.log(this.searchString);
    this.searchEvent.emit(this.searchString);
  }
}
