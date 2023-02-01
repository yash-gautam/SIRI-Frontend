import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storeData/store-data.service';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  showNextTableBtn: boolean = false;

  organizationName: string = '';
  organizationSector: string = '';
  count: number = 0;

  bandScores: { [dimension: string] : number} = {};
  bandValueSelectedForShopFloorAutomation: number;
  bandValueSelectedForEnterpriseAutomation: number;
  bandValueSelectedForFacilityAutomation: number;

  bandValueSelectedForShopFloorConnectivity: number;
  bandValueSelectedForEnterpriseConnectivity: number;
  bandValueSelectedForFacilityConnectivity: number;

  bandValueSelectedForShopFloorIntelligence: number;
  bandValueSelectedForEnterpriseIntelligence: number;
  bandValueSelectedForFacilityIntelligence: number;


  bandValue: any = ['0','1','2','3','4','5'];


  constructor(private postData: StoreDataService) {}

  ngOnInit(): void {}

  enterOrganizationName(event: any) {
    this.organizationName = event.target.value;
    console.log('org name: ', this.organizationName);
  }

  enterOrganizationSector(event: any) {
    this.organizationSector = event.target.value;
    console.log('org sector: ', this.organizationSector);
  }

  shopFloorAutomationValue: any;
  shopFloorAutomationDisplay:any=false;
  enterpriseAutomationValue: any;
  enterpriseAutomationDisplay:any=false;
  facilityAutomationValue: any;
  facilityAutomationDisplay:any=false;

  shopFloorConnectivityValue: any;
  shopFloorConnectivityDisplay:any=false;
  enterpriseConnectivityValue: any;
  enterpriseConnectivityDisplay:any=false;
  facilityConnectivityValue: any;
  facilityConnectivityDisplay:any=false;

  shopFloorIntelligenceValue: any;
  shopFloorIntelligenceDisplay:any=false;
  enterpriseIntelligenceValue: any;
  enterpriseIntelligenceDisplay:any=false;
  facilityIntelligenceValue: any;
  facilityIntelligenceDisplay:any=false;

  rating: any[] = [0, 1, 2, 3, 4, 5];

  test(){
    console.log(this.bandScores)
  }

  getShopFloorAutomationRate(i: any) {
    console.log(i);
    this.shopFloorAutomationDisplay=true;
    this.shopFloorAutomationValue = i;
    this.bandValueSelectedForShopFloorAutomation = i;
    this.bandScores['shop floor automation'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getEnterpriseAutomationRate(i: any) {
    console.log(i);
    this.enterpriseAutomationDisplay=true;
    this.enterpriseAutomationValue = i;
    this.bandValueSelectedForEnterpriseAutomation = i;
    this.bandScores['enterprise automation'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getFacilityAutomationRate(i: any) {
    console.log(i);
    this.facilityAutomationDisplay=true;
    this.facilityAutomationValue = i;
    this.bandValueSelectedForFacilityAutomation = i;
    this.bandScores['facility automation'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }




  getShopFloorConnectivityRate(i: any) {
    console.log(i);
    this.shopFloorConnectivityDisplay=true;
    this.shopFloorAutomationValue = i;
    this.bandValueSelectedForShopFloorConnectivity = i;
    this.bandScores['shop floor connectivity'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getEnterpriseConnectivityRate(i: any) {
    console.log(i);
    this.enterpriseConnectivityDisplay=true;
    this.enterpriseConnectivityValue = i;
    this.bandValueSelectedForEnterpriseConnectivity = i;
    this.bandScores['enterprise connectivity'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getFacilityConnectivityRate(i: any) {
    console.log(i);
    this.facilityConnectivityDisplay=true;
    this.facilityConnectivityValue = i;
    this.bandValueSelectedForFacilityConnectivity = i;
    this.bandScores['facility connectivity'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getShopFloorIntelligenceRate(i: any) {
    console.log(i);
    this.shopFloorIntelligenceDisplay=true;
    this.shopFloorIntelligenceValue = i;
    this.bandValueSelectedForShopFloorIntelligence = i;
    this.bandScores['shop floor intelligence'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getEnterpriseIntelligenceRate(i: any) {
    console.log(i);
    this.enterpriseIntelligenceDisplay=true;
    this.enterpriseIntelligenceValue = i;
    this.bandValueSelectedForEnterpriseIntelligence = i;
    this.bandScores['enterprise intelligence'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }

  getFacilityIntelligenceRate(i: any) {
    console.log(i);
    this.facilityIntelligenceDisplay=true;
    this.facilityIntelligenceValue = i;
    this.bandValueSelectedForFacilityIntelligence = i;
    this.bandScores['facility intelligence'] = i;

    this.count++;

    if(this.count>=9 && this.shopFloorAutomationDisplay==true && this.enterpriseAutomationDisplay==true && this.facilityAutomationDisplay==true && this.shopFloorConnectivityDisplay==true && this.enterpriseConnectivityDisplay==true && this.facilityConnectivityDisplay==true && this.shopFloorIntelligenceDisplay==true && this.enterpriseIntelligenceDisplay==true && this.facilityIntelligenceDisplay==true){
      this.showNextTableBtn=true;
    }
  }


  shopFloorAutomation: any = [
    'Repetitive production and support processes are not automated.',
    'Repetitive production processes are partially automated, with significant human intervention. Repetitive support processes are not automated.',
    'Repetitive production processes are automated, with minimal human intervention. Repetitive support processes are not automated.',
    'Repetitive production processes are fully automated, with no human intervention. Repetitive support processes are partially automated, with limited human intervention.',
    'Automated production processes are reconfigurable through plug-and-play automation. Repetitive support processes are partially automated, with limited human intervention.',
    'Flexible production and support processes are converged with enterprise and facility automation platforms to form highly autonomous networks.'
  ];

  enterpriseAutomation: any = [
    'Enterprise processes are not automated.',
    'Enterprise processes are partially automated, with significant human intervention.',
    'Enterprise processes are automated, with minimal human intervention.',
    'Enterprise processes are fully automated, with no human intervention.',
    'Automated enterprise processes are adaptable.',
    'Flexible enterprise processes are converged with shop floor and facility automation platforms to form highly autonomous networks.'
  ];

  facilityAutomation: any = [
    'Facility processes are not automated.',
    'Facility processes are partially automated, with significant human intervention.',
    'Facility processes are automated, with minimal human intervention.',
    'Facility processes are fully automated, with no human intervention.',
    'Automated facility processes are adaptable.',
    'Flexible facility processes are converged with shop floor and enterprise automation platforms to form highly autonomous networks.',
  ];




  shopFloorConnectivity: any = [
    'Production assets and systems are not connected.',
    'Production assets and systems are connected via multiple communication technologies & protocols.',
    'Connected production assets and systems are interoperable across multiple communication technologies & protocols.',
    'Interoperable production assets and systems are secure.',
    'Interoperable production assets and systems are secure and capable of real-time communication.',
    'Interoperable production assets and systems are secure, capable of real-time communication, and scalable.'
  ];

  enterpriseConnectivity: any = [
    'Enterprise IT systems are not connected.',
    'Enterprise IT systems are connected via multiple communication technologies & protocols.',
    'Enterprise IT systems are interoperable across multiple communication technologies & protocols.',
    'Interoperable Enterprise IT systems are secure.',
    'Interoperable Enterprise IT systems are secure and capable of real-time communication.',
    'Interoperable Enterprise IT systems are secure, capable of real-time communication, and scalable.'
  ];

  facilityConnectivity: any = [
    'Facility assets and systems are not connected.',
    'Facility assets and systems are connected via multiple communication technologies & protocols.',
    'Facility assets and systems are interoperable across multiple communication technologies & protocols.',
    'Interoperable facility assets and systems are secure.',
    'Interoperable facility assets and systems are secure and capable of real-time communication.',
    'Interoperable facility assets and systems are secure, capable of real-time communication, and scalable.'
  ];

  shopFloorIntelligence: any = [
    'OT & IT systems are not in use.',
    'OT & IT systems execute pre-programmed tasks and processes.',
    'Computerized OT & IT systems are able to identify deviations.',
    'Computerized OT & IT systems are able to identify deviations and diagnose potential causes.',
    'Computerized OT & IT systems are able to diagnose problems and predict future states of assets and systems.',
    'Computerized OT & IT systems are able to diagnose problems, predict future states and autonomously execute decisions to adapt to changes.'
  ];

  enterpriseIntelligence: any = [
    'Enterprise systems are not in use.',
    'Enterprise IT systems execute pre-programmed tasks and processes.',
    'Enterprise IT systems are able to identify deviations.',
    'Enterprise IT systems are able to identify deviations and diagnose potential causes.',
    'Enterprise IT systems are able to diagnose problems and predict future states of assets and systems.',
    'Enterprise IT systems are able to diagnose problems, predict future states, and autonomously execute decisions to adapt to changes.'
  ];

  facilityIntelligence: any = [
    'OT & IT systems are not in use.',
    'OT & IT systems execute pre-programmed tasks and processes.',
    'Computerized OT & IT systems are able to identify deviations.',
    'Computerized OT & IT systems are able to identify deviations and diagnose potential causes.',
    'Computerized OT & IT systems are able to diagnose problems and predict future states of assets and systems.',
    'Computerized OT & IT systems are able to diagnose problems, predict future states, and autonomously execute decisions to adapt to changes.'
  ];


  saveTechnology(){
    this.postData.postTechnology(this.organizationName,this.bandScores).subscribe(response=>{
      console.log(response);
    })


    this.postData.getTechnologyResults(this.bandScores);
  }

}
