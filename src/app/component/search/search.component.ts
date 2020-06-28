import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchLabel: string;
  @Output() onTextSearch = new EventEmitter<string>();
  valueInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickSearch() {
    if(this.valueInput === "")
      alert("Digite um nome para pesquisar!")
    else
      this.onTextSearch.emit(this.valueInput);
  }

}
