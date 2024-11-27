import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    { name: 'Angular', rating: 5 },
    { name: 'JavaScript', rating: 4 },
    { name: 'HTML & CSS', rating: 5 },
    { name: 'Team Leadership', rating: 4 },
    { name: 'Communication', rating: 5 },
  ];

  hoveredSkill: any = null;

  setHoveredSkill(skill: any) {
    this.hoveredSkill = skill;
  }

  clearHoveredSkill() {
    this.hoveredSkill = null;
  }

}
