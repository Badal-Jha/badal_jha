import { Component } from '@angular/core';
import { projects } from 'src/assets/projects/projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
     projects:any=[];
     ngOnInit(){
      this.projects=projects
      console.log(projects)
     }
    

}
