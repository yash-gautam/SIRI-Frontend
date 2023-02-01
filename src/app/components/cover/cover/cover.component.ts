import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storeData/store-data.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  showCoverPage: boolean = true;
  showCoverImage: boolean = true;
  showAssessmentPage: boolean = false;
  showProcessTable: boolean = false;
  showNextTableBtn: boolean = false;

  organizationName: string = "";
  organizationSector: string = "";
  bandScores: { [dimension: string] : number} = {};
  bandValueSelectedForVerticalInt: number;
  bandValueSelectedForHorizontalInt: number;
  bandValueSelectedForProductLifecycle: number;

  bandValue: any = ['0','1','2','3','4','5'];

  count: number = 0;

  constructor(private postData: StoreDataService) { }

  ngOnInit(): void {
  }

  takeAssessmentIsClicked(event: any){
    this.showCoverPage = false;
    this.showCoverImage = false;
  }

  goToCoverPage(event: any){
    this.showCoverPage = true;
    this.showCoverImage = true;
    this.showAssessmentPage = false;
  }

  enterOrganizationName(event: any){
    this.organizationName = event.target.value;
    console.log("org name: ", this.organizationName);
  }

  enterOrganizationSector(event: any){
    this.organizationSector = event.target.value;
    console.log("org sector: ", this.organizationSector);
  }

  closeOrgDetailsModal(){
    this.showAssessmentPage = true;
    // this.showProcessTable = true;
  }

  test(){
    this.postData.getTestData().subscribe(response=>{
      console.log(response);
    })
  }

  // test(event: any){
  //   console.log("band score", this.bandScores)
  // }

  verticalIntegrationValue: any;
  verticalIntegrationDisplay:any=false;
  horizontalIntegrationValue: any;
  horizontalIntegrationDisplay:any=false;
  ProductLifeCycleValue:any;
  ProductLifeCycleDisplay:any=false;
  rating: any[] = [0, 1, 2, 3, 4, 5];

  getRate(i: any) {
    console.log(i);
    this.verticalIntegrationDisplay=true;
    this.verticalIntegrationValue = i;
    this.bandValueSelectedForVerticalInt = i;
    this.bandScores['vertical integration'] = i;

    this.count++;

    if(this.count>=3 && this.verticalIntegrationDisplay==true && this.horizontalIntegrationDisplay==true && this.ProductLifeCycleDisplay==true){
      this.showNextTableBtn=true
    }
  }


  getHorizontalRate(i:any){
    console.log(i);
    this.horizontalIntegrationDisplay=true;
    this.horizontalIntegrationValue = i;
    this.bandValueSelectedForHorizontalInt=i;
    this.bandScores['horizontal integration'] = i;

    this.count++;

    if(this.count>=3 && this.verticalIntegrationDisplay==true && this.horizontalIntegrationDisplay==true && this.ProductLifeCycleDisplay==true){
      this.showNextTableBtn=true
    }
  }

  getProductLifeCycleRate(i:any){
    console.log(i);
    this.ProductLifeCycleDisplay=true;
    this.ProductLifeCycleValue = i;
    this.bandValueSelectedForProductLifecycle=i;
    this.bandScores['integrated ProductLifeCycle'] = i;

    this.count++;

    if(this.count>=3 && this.verticalIntegrationDisplay==true && this.horizontalIntegrationDisplay==true && this.ProductLifeCycleDisplay==true){
      this.showNextTableBtn=true
    }
  }

  verticalIntegration: any = [
    'Vertical processes are not explicitly defined.',
    'Vertical processes are defined and executed by humans, with the support of analogue tools.',
    'Defined vertical processes are completed by humans with the support of digital tools.',
    'Digitized vertical processes and systems are securely integrated across all hierarchical levels of the automation pyramid.',
    'Integrated vertical processes and systems are automated, with limited human intervention.',
    'Automated vertical processes and systems are actively analysing and reacting to data.',
  ];

  horizontalIntegration:any=[
    'Supply chain processes are not explicitly defined.',
    'Supply chain processes are defined and executed by humans, with the support of analogue tools.',
    'Defined supply chain processes are completed by humans with the support of digital tools.',
    'Digitized supply chain processes and systems are securely integrated across business partners and clients along the value chain.',
    'Integrated supply-chain processes and systems are automated, with limited human intervention.',
    'Automated supply chain processes and systems are actively analysing and reacting to data.'
  ];

  ProductLifeCycle:any=[
    'Product lifecycle processes are not explicitly defined.',
    'Product lifecycle processes are defined and executed by humans, with the support of analogue tools.',
    'Defined product lifecycle processes are completed by humans, with the support of digital tools.',
    'Digitized product lifecycle processes and systems are securely integrated across all stages of the product lifecycle.',
    'Integrated product lifecycle processes are automated, with limited human intervention.',
    'Automated product lifecycle processes are actively analysing and reacting to data.'
  ];































  //DATASET PART
  saveCompanyDetails(){
    this.postData.postCompanyDetails(this.organizationName, this.organizationSector).subscribe(response=>{
      console.log(response);
    })

    this.showAssessmentPage = true;
  }

  saveProcessData(){
    this.postData.postProcess(this.organizationName,this.bandScores).subscribe(response=>{
      console.log(response);
    })

    this.postData.getProcessResults(this.bandScores);
  }


}
