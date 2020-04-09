import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  public dummy = [
    {
      name: 'Boost Your Business',
      img: 'boost.png',
      points: [
        'Respond more quickly to market demands and increase customer retention',
        'Accelerate delivery of new products and features to your customers',
        'Automate processes to create a seamless user experience and improve customer service',
        'Turn customers into your brand ambassadors to reduce marketing costs'
      ]
    },
    {
      name: 'Reduce Your Costs',
      img: 'costs.png',
      points: [
        'Streamline internal processes to help your employees do more, faster',
        'Eliminate the need to perform repetitive tasks and enable your team to bring more value to your business',
        `Gain access to highly skilled IT talent to boost your team's expertise and foster knowledge sharing`,
        `Eliminate or greatly reduce the need to work extra hours or late-night shifts`
      ]
    },
    {
      name: 'Optimize Your Operations',
      img: 'time.png',
      points: [
        `Increase productivity in the SDLC with reusable components and flexible app structures`,
        `Set up a continuous deployment process to deliver new features regularly and seamlessly`,
        `Leverage follow-the-sun development principles to reduce time to market`,
        `Ensure better test coverage of complex systems with test automation frameworks`
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
