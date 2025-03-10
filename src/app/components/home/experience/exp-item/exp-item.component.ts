import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp-item',
  imports: [],
  templateUrl: './exp-item.component.html',
  styleUrl: './exp-item.component.sass',
})
export class ExpItemComponent {
  @Input() exptype: string = 'work';

  exps = [
    {
      id: 1,
      company: 'SS&C Technology',
      position: 'Associate Software Engineer',
      start: '2022',
      stop: 'Present',
      descriptions: [
        'Investigated and resolved broker/dealer issues using COBOL mainframe to support sub-accounting services.',
        'Executed unit and regression testing within TDD framework ensuring code reliability, and minimizing production issues in financial service features.',
        'Implemented robotic process automation (RPA) to streamline scheduled jobs, reduce manual tasks, and enhance process efficiency up to 20% against to ongoing processes.',
        'Collaborated with US-based teams to resolve broker/dealer issues by providing high performance solution.',
      ],
    },
    {
      id: 2,
      company: 'mu Space and Advanced Technology Co., Ltd.',
      position: 'Software Engineer',
      start: '2021',
      stop: '2022',
      descriptions: [
        'Researched and designed communication components that implemented an ML-based demodulation model of Laser module to minimize uncertainty evaluation.',
        'Developed a GUI application for automated document formatting reducing manual processing time for the business section.',
      ],
    },
    {
      id: 3,
      company: 'True Corporation.',
      position: 'Operation Engineer Intern',
      start: 'JUN 2020',
      stop: 'OCT 2020',
      descriptions: [
        'Designed and developed a LINE Bot powered task management application applying, improving time tracking and task visibility for staff.',
        'Built and integrated advanced features in the LINE Bot application for real-time base-station monitoring.',
        'Analyzed base-station data to identify resource usage problems to provide primitive troubleshooting or need a staff action.',
      ],
    },
  ];

  edus = [
    {
      id: 1,
      institute: 'Chiangmai University',
      degree: 'Bachelor of Electrical Engineering',
      start: '2017',
      stop: '2021',
    },
  ];
}
