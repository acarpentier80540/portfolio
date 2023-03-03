import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cheminLindkedin:any = "../../assets/lidkedin.png";
  cheminSncf:any = "../../assets/sncf.png";
  constructor() { }

  ngOnInit(): void {
  }

}
