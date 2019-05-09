import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{RouterModule,Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { NavvComponent } from './navv/navv.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { AnimComponent } from './anim/anim.component';
const appRoutes:Routes=[
{path: '', component: AnimComponent },
{path:'first-page',component:FirstPageComponent},
{path:'second-page',component:SecondPageComponent},
{path:'third-page',component:ThirdPageComponent},
{path: 'anim', component: AnimComponent  },
	]
@NgModule({
  declarations: [
    AppComponent,
  
    NavvComponent,
  
    FirstPageComponent,
  
    SecondPageComponent,
  
    ThirdPageComponent,
  
    AnimComponent
  ],
  imports: [
  MatSidenavModule,MatToolbarModule,MatListModule,MatTooltipModule,
    BrowserModule,
	BrowserAnimationsModule,
	BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
	MatGridListModule,
    LayoutModule,
	RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
