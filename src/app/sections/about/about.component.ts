import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}
  avatar = '/assets/images/Evdokim.png';
  additionalText = `В свободное время гуляю по пещерам и снежным равнинам.
    Позирую&nbsp;своим пиксельным телом для обложек журналов.
    Посмотрите&nbsp;какой&nbsp;я&nbsp;красивый!`;
  stats = [{ label: 'Проживаю', data: 'Полярный круг' }, { label: 'Возраст', data: '4' }, { label: 'Родился', data: '31 февраля' }];
  description = `Я занимаюсь разработкой современных сайтов и приложений.
                 Мне нравится делать интересные и современные проекты.`;
  name = 'Евдоким';
  greetings = 'Привет, меня зовут';
  ngOnInit() {}
}
