import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { MatDatepickerInputEvent, MatInput } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  date = new FormControl();

  @Output() filterChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.filterChange.emit(event.value);
  }

  clearDate() {
    this.date.setValue(null);
  }
}
