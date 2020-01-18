import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-users-table',
    template: ''
})
export class MockUsersTableComponent {
    @Input() dataSource: any[];
}

@Component({
    selector: 'app-filter',
    template: ''
})
export class MockFilterComponent {
    @Output() filterChange = new EventEmitter;
}

