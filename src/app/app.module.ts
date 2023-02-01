import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover/cover.component';
import { CoverPageNewComponent } from './components/coverPageNew/cover-page-new/cover-page-new.component';
import { AssessmentMatrixComponent } from './components/assessmentMatrix/assessment-matrix/assessment-matrix.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechnologyComponent } from './components/technology/technology/technology.component';
import { ColorDirDirective } from './components/assessmentMatrix/color-dir.directive';
import { OrganizationComponent } from './components/organization/organization/organization.component';
import { GraphComponent } from './components/graph/graph/graph.component';
import { TrialComponent } from './components/trial/trial/trial.component';



import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    CoverPageNewComponent,
    AssessmentMatrixComponent,
    TechnologyComponent,
    ColorDirDirective,
    OrganizationComponent,
    GraphComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
