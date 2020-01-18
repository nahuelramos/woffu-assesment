import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  date: Date;

  @Output() filterChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.filterChange.emit(event.value);
  }

}
