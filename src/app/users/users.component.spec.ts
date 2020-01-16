import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Subject } from 'rxjs/internal/Subject';

import { UsersComponent } from './users.component';
import { UserService } from './services';
import { NotificationService } from '../core';
import { MockUsersTableComponent } from '../shared/testing-mocks/components.spec';
import { User } from './models';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userListSubject: Subject<any>;

  let userServiceStub: Partial<UserService> = {
    getUserList: () => userListSubject
  };
  let notifcationServiceStub: Partial<NotificationService> = {
    error: () => { },
    success: () => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        MockUsersTableComponent
      ],
      providers: [
        { provide: NotificationService, useValue: notifcationServiceStub },
        { provide: UserService, useValue: userServiceStub },
      ]
    });
  });

  beforeEach(() => {
    userListSubject = new Subject();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    notifcationServiceStub = TestBed.get(NotificationService);
    userServiceStub = TestBed.get(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user list when the user navigates to /user and show success message', fakeAsync(() => {
    const user = getUser();
    const spyNotificationSuccess = spyOn(notifcationServiceStub, 'success').and.callFake(() => {})

    userListSubject.next([user]);
    tick();

    expect(spyNotificationSuccess).toHaveBeenCalled();
    expect(component.users[0]).toEqual(user);
  }));

  it('should not load user list when the api fails and show error', fakeAsync(() => {
    const spyNotificationSuccess = spyOn(notifcationServiceStub, 'error').and.callFake(() => {})

    userListSubject.error('error');
    tick();

    expect(spyNotificationSuccess).toHaveBeenCalledWith('Uups! error :( error', 'Error');
    expect(component.users).toEqual(undefined);
  }));

  function getUser(id: string = new Date().getUTCMilliseconds().toString()) {
    return new User({
      $id: id
    })
  }
});
