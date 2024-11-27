import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  jobs = [
    {
      title: 'Software Developer',
      dates: 'Jan 2020 - Present',
      description: 'Worked on developing scalable web applications.',
      showDetails: false
    },
    {
      title: 'Intern',
      dates: 'Jun 2018 - Dec 2019',
      description: 'Assisted in front-end development tasks.',
      showDetails: false
    }
  ];

  toggleJobDetails(job: any) {
    job.showDetails = !job.showDetails;
  }

}
