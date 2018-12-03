import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationSchematicComponent } from './navigation-schematic/navigation-schematic.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConsComponent } from './Cons/cons.component';
import { ProsComponent } from './Pros/pros.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationSchematicComponent,
    ConsComponent,
    ProsComponent,
    ConclusionComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // material animations support
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {path: 'intro', component: IntroComponent },
      {path: 'cons', component: ConsComponent },
      { path: 'pros', component: ProsComponent },
      { path: 'Conclusion', component: ConclusionComponent },
      { path: '', redirectTo: 'intro', pathMatch: 'full'},
      { path: '**', redirectTo: 'intro', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
