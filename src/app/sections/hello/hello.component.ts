import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  currentLanguage = 'English';
  menuItems: Array<string> = ['Main', 'About', 'Skills', 'Electronics', 'Music', 'Experience', 'Contacts'];
  title = { firstName: 'Сергей', lastName: 'Надточий' };
  subTitle = 'Личный сайт';

  ngOnInit() {}
}
