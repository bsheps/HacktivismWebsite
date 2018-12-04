import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationSchematicComponent } from './navigation-schematic/navigation-schematic.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CaseStudiesComponent } from './case_studies/case_studies.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { IntroComponent } from './intro/intro.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSchematicComponent,
    CaseStudiesComponent,
    ConclusionComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // material animations support
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      { path: 'case', component: CaseStudiesComponent },
      { path: 'Conclusion', component: ConclusionComponent },
      { path: '', redirectTo: 'intro', pathMatch: 'full'},
      { path: '**', redirectTo: 'intro', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
