import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AccomodationComponent} from '../../src/app/accomodation/accomodation.component';

import { LifeStyleComponent } from './life-style/life-style.component';

import { WeddingsComponent } from './weddings/weddings.component';

import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';

import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { SitepolicyComponent } from './sitepolicy/sitepolicy.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  { path: '', redirectTo:  'home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacypolicyComponent },
  { path: 'accomodation', component: AccomodationComponent},
  { path: 'contact-us', component: ContactusComponent},
  { path: 'about-us', component: AboutusComponent},
  { path: 'legal-notice', component: LegalnoticeComponent},
  { path: 'site-policy', component: SitepolicyComponent},
  { path: 'sitemap', component: SitemapComponent},
  { path: 'dashboard', component: DashboardComponent},

  { path: 'lifestyle', component: LifeStyleComponent},

  { path: 'celebrations', component: WeddingsComponent},

  { path: 'offers', component: OffersComponent},
  { path: 'weddings', component: CelebrationsComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signin', component: SigninComponent},

  { path: 'food-and-beverage', component: FoodAndBeverageComponent},
  { path: 'foodandbeverage', redirectTo: 'food-and-beverage', pathMatch: 'full'},

  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  AppComponent,
    AccomodationComponent,

    LifeStyleComponent,

    WeddingsComponent,

    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,

    FoodAndBeverageComponent,

    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    ContactusComponent,
    PagenotfoundComponent,
    AboutusComponent,
    LegalnoticeComponent,
    SitepolicyComponent,
    PrivacypolicyComponent,
    SitemapComponent,
    DashboardComponent

];
