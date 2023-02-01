import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentMatrixComponent } from './components/assessmentMatrix/assessment-matrix/assessment-matrix.component';
import { CoverComponent } from './components/cover/cover/cover.component';
import { CoverPageNewComponent } from './components/coverPageNew/cover-page-new/cover-page-new.component';
import { GraphComponent } from './components/graph/graph/graph.component';
import { OrganizationComponent } from './components/organization/organization/organization.component';
import { TechnologyComponent } from './components/technology/technology/technology.component';
import { TrialComponent } from './components/trial/trial/trial.component';

const routes: Routes = [
  {path: "", component: CoverComponent},
  {path: "new", component: CoverPageNewComponent},
  {path: "assessment", component: AssessmentMatrixComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "organization", component: OrganizationComponent},
  {path: "graph", component: GraphComponent},
  {path: "trial", component: TrialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
