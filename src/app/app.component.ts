import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReferencesComponent } from './references/references.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

//import { MapComponent } from './map/map.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ExperienceComponent,EducationComponent,SkillsComponent,
    HobbiesComponent,ContactInfoComponent,NavBarComponent,ReferencesComponent,
    PortfolioComponent,ContactFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bayslope-task';

  generatePDF(): void {
    const element = document.body; // Select the resume content
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('resume.pdf');
    });
  }
}
