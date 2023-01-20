import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isLoggedIn: boolean = false;

    constructor(private authSrv: AuthService) { }

    ngOnInit(): void {
        this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    onLogout() {
        this.authSrv.logout();
    }

}
