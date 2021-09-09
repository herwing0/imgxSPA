import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goLinkedin() {
    const url = "https://www.linkedin.com/in/penarandajn/";
    window.open(url, "_blank");
  }


}
