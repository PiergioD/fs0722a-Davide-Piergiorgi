import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user:any;

  constructor(private us:UsersService, private  as:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.as.user$.subscribe((user)=>{
      if(!user){
        this.router.navigate(['/login'])
        return null
      }else{
      this.user = user.user
      return this.user
    }})
  }

}

