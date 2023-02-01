import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assessment-matrix',
  templateUrl: './assessment-matrix.component.html',
  styleUrls: ['./assessment-matrix.component.css'],
})
export class AssessmentMatrixComponent implements OnInit {
  organizationName: string = '';
  organizationSector: string = '';
  bandScores: { [dimension: string] : number} = {};
  bandValueSelectedForVerticalInt: number;
  bandValueSelectedForHorizontalInt: number;
  bandValueSelectedForProductLifecycle: number;



  bandValue: any = ['0','1','2','3','4','5'];

  toggle = true;
  status = 'Enable';

  constructor() {}

  ngOnInit(): void {}

  enterOrganizationName(event: any) {
    this.organizationName = event.target.value;
    console.log('org name: ', this.organizationName);
  }

  enterOrganizationSector(event: any) {
    this.organizationSector = event.target.value;
    console.log('org sector: ', this.organizationSector);
  }

  verticalIntegrationValue: any;
  verticalIntegrationDisplay:any=false;
  horizontalIntegrationValue: any;
  horizontalIntegrationDisplay:any=false;
  ProductLifeCycleValue:any;
  ProductLifeCycleDisplay:any=false;
  rating: any[] = [0, 1, 2, 3, 4, 5];
  bandTierOne: any = 1;
  bandTierTwo: any = 2;
  bandTierThree: any = 3;
  bandTierFour: any = 4;
  bandTierFive: any = 5;

  test(){
    console.log(this.bandScores)
  }

  getVerticalIntBandValue(event: any, value: any){
    console.log("value: ", value);
    this.verticalIntegrationDisplay=true;
    this.verticalIntegrationValue = value;
    this.bandScores['vertical integration'] = value;

    if(this.toggle==true){
      this.toggle=false;
    }
  }

  getRate(i: any) {
    // if(this.verticalIntegrationDisplay==false){
    //   this.verticalIntegrationDisplay=true;
    // }

    // this.toggle = !this.toggle;
    // this.status = this.toggle ? 'Enable' : 'Disable';

    console.log(i);
    this.verticalIntegrationDisplay=true;
    this.verticalIntegrationValue = i;
    this.bandValueSelectedForVerticalInt = i;
    this.bandScores['vertical integration'] = i;

    // if(this.verticalIntegrationDisplay==true){
    //   this.verticalIntegrationDisplay=false;
    // }
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    if(this.verticalIntegrationDisplay==true){
      this.verticalIntegrationDisplay=false;
    }
}

  getHorizontalRate(i:any){
    console.log(i);
    this.horizontalIntegrationDisplay=true;
    this.horizontalIntegrationValue = i;
    this.bandValueSelectedForHorizontalInt=i;
    this.bandScores['horizontal integration'] = i;
  }

  getProductLifeCycleRate(i:any){
    console.log(i);
    this.ProductLifeCycleDisplay=true;
    this.ProductLifeCycleValue = i;
    this.bandValueSelectedForProductLifecycle=i;
    this.bandScores['integrated ProductLifeCycle'] = i;
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



}
