import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects = [
    {
      name: 'Rest api calling through Angular',
      description: 'Description of Project 1',
      image: 'api.jpg'
    },
    {
      name: 'crud app in angular',
      description: 'Description of Project 2',
      image: 'crud.jpg'
    }
  ];

}
