import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  goLinkedin() {
    const url = "https://www.linkedin.com/in/penarandajn/";
    window.open(url, "_blank");
  }

}
