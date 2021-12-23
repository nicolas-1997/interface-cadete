import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // list = document.querySelectorAll('.list');
  // activeLink() {
  //   this.list.forEach((item) =>
  //   item.classList.remove('active'));
  //   this.classList.add('active')
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
