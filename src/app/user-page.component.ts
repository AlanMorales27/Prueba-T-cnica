import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-user-page',
  imports: [ NavBarComponent, UsersComponent],
  template: `
    <app-nav-bar/>
    <app-users/>`,
  styles: ''
})
export class UserPageComponent {

}
