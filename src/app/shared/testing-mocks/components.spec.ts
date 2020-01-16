import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-users-table',
    template: ''
})
export class MockUsersTableComponent {
    @Input() dataSource: any[];
}
