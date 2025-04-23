import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy,ElementRef, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'Suriya portfolio';


  titles: string[] = [
    ' Full Stack Developer',
    ' MEAN Stack Developer',
    ' MERN Stack Developer',
    ' Graphic Designer'
  ];
  currentTitle: string = this.titles[0];
  private titleIndex: number = 0;
  private intervalId: any;


  constructor(private elRef: ElementRef) {}
 
  // contactForm!: FormGroup;


  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.currentTitle = this.titles[this.titleIndex];
    }, 3000);

    // this.contactForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   subject: ['', Validators.required],
    //   message: ['', Validators.required]
    // });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


  images = [
    './assets/html.jpg',
    './assets/css.png',
    './assets/bootstrap.png',
    './assets/tailwind.png',
    './assets/javascript.png',
    './assets/ts.webp',
    './assets/sql.png',
    './assets/mongo db.png',
    './assets/express.png',
    './assets/react.png',
    './assets/angular.jpg',
    './assets/node.png',
    './assets/ionicimg.png',
  ];
  squares=[
    './assets/wordpress.png',
    './assets/WixStudio.jpg',
  ]
  boxes = [
    './assets/figma.png',
    './assets/Jira_Logo.svg.png',
    './assets/git.png',
    './assets/photoshop.webp',
    '../../assets/Coreldraw-free-trial.png',
  ];

  projects = [
    {
      img: './assets/portfolio.png',
      description: 'My portfolios design is implemented using the Angular framework and styled with the responsive and customizable components of Bootstrap. This combination allows for a dynamic, user-friendly, and visually appealing presentation of my skills and projects.',
      link: 'https://your-tailwind-project-link.com'
    },
    {
      img: './assets/Ecom.png',
      description: 'This portfolio project showcases my ability to create a responsive and visually appealing eCommerce website using HTML, CSS, and Bootstrap. It highlights my front-end development skills in building structured layouts, styling components, and ensuring a smooth user experience across devices.',
      link: 'https://suriyar1410.github.io/E-com-website/'
    },
    {
      img: './assets/RPC.png',
      description: 'This portfolio project features a fully functional Rock Paper Scissors game built using HTML for structure, CSS for styling, and JavaScript for interactive game logic. It effectively demonstrates my front-end development skills in creating engaging and responsive user experiences.',
      link: 'https://suriyar1410.github.io/Rock-Paper-Scissors/'
    },
    {
      img: './assets/Weather API.png',
      description: 'This portfolio project leverages a weather API (built with OpenAPI specifications) to fetch and display real-time weather information. It showcases my skills in consuming external APIs, handling JSON responses, and presenting dynamic data to create a practical and informative user interface.',
      link: 'https://suriyar1410.github.io/weather-API/'
    },
    {
      img: './assets/Dog API.png',
      description: 'This portfolio project utilizes the Dog API (built with OpenAPI specifications) to fetch and display random facts about dogs. It demonstrates my ability to integrate with external APIs, handle JSON data, and present information dynamically on the web, showcasing my API interaction and front-end development skills.',
      link: 'https://suriyar1410.github.io/Dog-API/'
    },
    {
      img: './assets/NC.png',
      description: 'This portfolio project features a sleek and intuitive calculator application designed with the subtle depth and soft highlights of the neomorphism UI trend. Built using [mention technologies if applicable, e.g., HTML, CSS, JavaScript], it demonstrates my ability to create visually engaging and user-friendly interfaces.',
      link: 'https://suriyar1410.github.io/calculator/'
    },
    {
      img: './assets/DC.png',
      description: 'This portfolio project showcases a visually appealing digital clock with a modern glassmorphism effect achieved through CSS. It elegantly blends aesthetic design with functional JavaScript for real-time time display, highlighting my front-end styling and scripting abilities.',
      link: 'https://suriyar1410.github.io/Digital-clock/'
    },
    {
      img: './assets/pic.png',
      description: 'A responsive photography website built with HTML and Bootstrap, showcasing my skills in clean design, image galleries, and mobile-friendly layouts.',
      link: 'https://suriyar1410.github.io/photography-site/'
    },
  ];

 

  // getMailBody(): string {
  //   return `Name: ${this.contactForm.value.name}%0D%0A` +
  //          `Email: ${this.contactForm.value.email}%0D%0A` +
  //          `Subject: ${this.contactForm.value.subject}%0D%0A` +
  //          `Message: ${this.contactForm.value.message}`;
  // }

  ngAfterViewInit() {
    const boxes = this.elRef.nativeElement.querySelectorAll('.square-box');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.3
    });
  
    boxes.forEach((box: Element) => observer.observe(box));
  }
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
   
  
  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     console.log('Form submitted:', this.contactForm.value);
  //   } else {
  //     Object.values(this.contactForm.controls).forEach(control => {
  //       control.markAsTouched();
  //     });
  //   }
  // }
}
