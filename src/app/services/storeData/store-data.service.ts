import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';

const enum endpoint{
  // POST
  postCompanyData = '/addCompanyDetails',

  //GET
  getSurveyDataForCompany = '/getAllSurveyValues',
  getTestData = '/test',
}

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  surveyValues:any;

  private URL = 'http://127.0.0.1:5000';
  processValues: any;
  technologyValues: any;
  organisationValues: any;

  constructor(private http: HttpClient) { }

  //GET METHODS

  getTestData(): Observable<any>{
    return this.http.get<any>(`${this.URL}${endpoint.getTestData}`, {
    });
  }

  getSurveyDataForCompany(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getSurveyDataForCompany}`, {
    });
  }

  //POST METHODS

  postCompanyDetails(name: string, sector: string): Observable<any>{
    return this.http.post<Results>(`${this.URL}${endpoint.postCompanyData}/${name}/${sector}`, {
    });
  }

  postProcess(name:string,a:any): Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/process?name=${name}&verticalIntegration=${a['vertical integration']}&horizontalIntegration=${a['horizontal integration']}&processLifeCycle=${a['integrated ProductLifeCycle']}
    `,{
    });
  }

  postOrganisation(name:string,a:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/organisation?name=BMU&workForceDevelopment=${a['workForceDevelopment']}&leadershipCompetency=${a['leadershipCompetency']}&collaboration=${a['collaboration']}&strategyAndGoverance=${a['strategyAndGoverance']}
    `,{
    });
  }

  postTechnology(name:string,a:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/technology?name=BMU&shopFloorAutomation=${a['shop floor automation']}&enterpriseAutomation=${a['enterprise automation']}&facilityAutomation=${a['facility automation']}&shopFloorConnectivity=${a['shop floor connectivity']}&enterpriseConnectivity=${a['enterprise connectivity']}&facilityConnectivity=${a['facility connectivity']}&shopFloorIntelligence=${a['shop floor intelligence']}&enterpriseIntelligence=${a['enterprise intelligence']}&facilityIntelligence=${a['facility intelligence']}
    `,{
    });
  }

  getProcessResults(a:any){
    this.processValues= a;
    console.log(this.processValues)
  }

  getTechnologyResults(a:any){
    this.technologyValues = a;
    console.log(this.technologyValues)
  }

  getOrganisationResults(a:any){
    this.organisationValues = a;
    console.log(this.organisationValues)
  }

  }


