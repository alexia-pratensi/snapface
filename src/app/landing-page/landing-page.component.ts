import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  // implementation of router in a component
  constructor(private router: Router){}

  ngOnInit(): void {

  }
  // implementation of router in a component with route
  onContinue(): void {
    this.router.navigateByUrl('facesnaps')
  };

}
