import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storeData/store-data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  organizationName: string = '';
  organizationSector: string = '';
  bandScores: { [dimension: string] : number} = {};

  showNextTableBtn: boolean = false;
  count: number = 0;

  bandValueSelectedForWorkforceLearning: number;
  bandValueSelectedForLeadershipCompetency: number;
  bandValueSelectedForCompanyCollaboration: number;
  bandValueSelectedForStrategyGovernance: number;

  bandValue: any = ['0','1','2','3','4','5'];

  constructor(private postData: StoreDataService) {}

  ngOnInit(): void {}




  rating: any[] = [0, 1, 2, 3, 4, 5];



  test(event: any){
    console.log("band score", this.bandScores)
  }


  workForceDevelopmentDisplay=false;
  workForceDevelopmentValue:any;
  getworkForceDevelopment(i:any){
    console.log(i);
    this.workForceDevelopmentDisplay=true;
    this.workForceDevelopmentValue = i;
    this.bandValueSelectedForWorkforceLearning=i;
    this.bandScores['workForceDevelopment'] = i;

    this.count++;

    if(this.count>=4 && this.workForceDevelopmentDisplay==true && this.leadershipCompetencyDisplay==true && this.collaborationDisplay==true && this.strategyAndGoveranceDisplay==true){
      this.showNextTableBtn=true
    }
  }

  leadershipCompetencyDisplay=false;
  leadershipCompetencyValue:any;
  getleadershipCompetency(i:any){
    console.log(i);
    this.leadershipCompetencyDisplay=true;
    this.leadershipCompetencyValue = i;
    this.bandValueSelectedForLeadershipCompetency=i;
    this.bandScores['leadershipCompetency'] = i;

    this.count++;

    if(this.count>=4 && this.workForceDevelopmentDisplay==true && this.leadershipCompetencyDisplay==true && this.collaborationDisplay==true && this.strategyAndGoveranceDisplay==true){
      this.showNextTableBtn=true
    }
  }


  collaborationDisplay=false;
  collaborationValue:any;
  getcollaboration(i:any){
    console.log(i);
    this.collaborationDisplay=true;
    this.collaborationValue = i;
    this.bandValueSelectedForCompanyCollaboration=i;
    this.bandScores['collaboration'] = i;

    this.count++;

    if(this.count>=4 && this.workForceDevelopmentDisplay==true && this.leadershipCompetencyDisplay==true && this.collaborationDisplay==true && this.strategyAndGoveranceDisplay==true){
      this.showNextTableBtn=true
    }
  }

  strategyAndGoveranceDisplay=false;
  strategyAndGoveranceValue:any;
  getstrategyAndGoverance(i:any){
    console.log(i);
    this.strategyAndGoveranceDisplay=true;
    this.strategyAndGoveranceValue = i;
    this.bandValueSelectedForStrategyGovernance=i;
    this.bandScores['strategyAndGoverance'] = i;

    this.count++;

    if(this.count>=4 && this.workForceDevelopmentDisplay==true && this.leadershipCompetencyDisplay==true && this.collaborationDisplay==true && this.strategyAndGoveranceDisplay==true){
      this.showNextTableBtn=true
    }
  }


  workForceDevelopment:any=[
    'Informal mentorship and apprenticeship is the predominant mode of workforce L&D.',
    'Formally designed training curricula for skills acquisition is the predominant mode of workforce L&D.',
    'Structured L&D programmes are designed to run on an ongoing basis, to enable the ongoing enhancement and/or expansion of employees’ skillsets.',
    'Continuous L&D programmes are formally aligned with the organization’s business needs and human resources (HR) functions.',
    'Integrated L&D programmes are actively developed, refreshed and customized based on insights provided by key stakeholders through feedback loops.',
    'Active efforts are made to identify and incorporate innovative L&D practices and training for future skillsets into the adaptive L&D programmes.'
  ];

  leadershipCompetency:any=[
    'Management is unfamiliar with the most recent trends and technologies.',
    'Management has some awareness, through ad-hoc channels, of the most recent trends and technologies.',
    'Management is well-informed, through formal channels and avenues, of the most recent trends and technologies.',
    'Management is reliant on external partners to develop initiatives that leverage on the most recent trends and technologies to improve at least one area of the organization.',
    'Management is able to, with relative independence, develop initiatives that leverage on the latest trends and technology to improve more than one area of the organization.',
    'Management is able to independently adapt its organizational transformation framework to changing trends and technologies.'
  ]

  collaboration:any=[
    'Communication and information sharing across teams happens on an informal basis.',
    'Formal channels are established for communication and information sharing across teams.',
    'Formal channels are established to allow teams to work together on discrete/one-off tasks and projects.',
    'Teams are empowered by the organization to make adjustments that will facilitate cooperation on discrete tasks and projects.',
    'Teams are empowered by the organization to share resources on both discrete and longer-term tasks and projects.',
    'Formal channels are established to enable dynamically-forming teams to work on cross-functional projects with shared goals, resources and KPIs.'
  ];

  strategyAndGoverance:any=[
    'Transformation towards a Factory/Plant-of-the-Future is not present in any part of the organization strategy.',
    'Transformation towards a Factory/Plant-of-the-Future has been formally identified as a business strategy at the corporate or business level.',
    'Transformation initiative towards a Factory/Plant-of-the-Future is being developed or has been developed by a dedicated team.',
    'Transformation Initiative towards a Factory/Plant-of-the-Future has been formally implemented in least one functional area.',
    'Transformation initiative towards a Factory/Plant-of-the-Future is expanded to include more than one functional area.',
    'Transformation initiative towards a Factory/Plant-of-the-Future is refreshed and updated dynamically.'
  ]






  saveOrganisation(){
      this.postData.postOrganisation(this.organizationName,this.bandScores).subscribe(response=>{
        console.log(response);
      })

      this.postData.getOrganisationResults(this.bandScores);

  }


}
