import { Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public router:Router, ) {}

  public ToNdtvNews(){
  
    this.router.navigate(["./home/ndtvnews"])

  }
  public ToIndiaTodayNews(){
  
    this.router.navigate(["./home/indiatoday"])

  }
  public ToIndianExpressNews(){
  
    this.router.navigate(["./home/india-express"])

  }

}
