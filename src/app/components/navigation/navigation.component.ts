import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isLogged = false;

  constructor(private router: Router, private tokerService: TokenService){}

  ngOnInit(): void{
    if(this.tokerService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokerService.logOut();
    location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }
}
