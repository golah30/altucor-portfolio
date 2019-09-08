import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  constructor() {}
  heading = 'My skills';
  caption = 'Take a look at the technologies with which I worked and how I can be useful to you.';
  skills = [
    { label: 'C/C++', value: '75' },
    { label: 'R.E.', value: '57' },
    { label: 'PYTHON', value: '80' },
    { label: 'PHP', value: '34' },
    { label: 'PLS HELP', value: '97' },
    { label: 'QT', value: '67' },
    { label: 'NETWORK', value: '20' },
    { label: 'EMBEDDED', value: '75' }
  ];
  ngOnInit() {}
}
