import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { Search } from '../model/search';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private criteria: string="";
  private criteriaValue: string="";
  model= new Search("","","");
  profiles: Profile[]=[];
  skills = ['HTML-CSS-JAVASCRIPT', 'ANGULAR', 'REACT', 'Asp.Net Core','RESTFUL','Entity Framework',
            'GIT', 'DOCKER','JENKINS','Azure','SPOKEN','COMMUNICATION','APTITUDE'];
  submitted = false;
 
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

  }

  onSubmit() {
     this.submitted = true; 
     this.getCriteria()
     this.adminService.GetProfiles(this.criteria, this.criteriaValue).subscribe(data=>{
      this.profiles=data;
      
  })
  }

  getCriteria(){
    if(this.model.name!=""){
      this.criteria = "Name";
      this.criteriaValue = this.model.name;
    }else if(this.model.associateId!=""){
      this.criteria = "AssociateId";
      this.criteriaValue = this.model.associateId;
    }else if(this.model.skill!=""){
      this.criteria = "Skill";
      this.criteriaValue = this.model.skill;
    }
  }

 

}
