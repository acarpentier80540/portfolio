import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corp',
  templateUrl: './corp.component.html',
  styleUrls: ['./corp.component.css'],
})
export class CorpComponent implements OnInit {
  cerf: any = '../../assets/cerf.png';
  moi: any = '../../assets/moi.png';
  constructor() {}

  ngOnInit(): void {}
}
