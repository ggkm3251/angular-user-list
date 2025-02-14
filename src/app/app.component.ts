import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-user-list></app-user-list>',
  imports: [UserListComponent]
})
export class AppComponent {}
