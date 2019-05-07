import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AccomodationComponent} from '../../src/app/accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { WelnessAndSpaComponent } from './life-style/welness-and-spa/welness-and-spa.component';
import { ResortsActivitiesComponent } from './life-style/resorts-activities/resorts-activities.component';
import { ExperiencesComponent } from './life-style/experiences/experiences.component';
import { ExcursionsComponent } from './life-style/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { BookNowComponent } from './book-now/book-now.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'lifestyle', component: LifeStyleComponent},
  { path: 'welness-and-spa', component: WelnessAndSpaComponent},
  { path: 'resorts-activities', component: ResortsActivitiesComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'excursions', component: ExcursionsComponent},
  { path: 'weddings', component: WeddingsComponent},
  { path: 'thai-weddings', component: ThaiWeddingsComponent},
  { path: 'westerns-weddings', component: WesternsWeddingsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'food-and-beverage', component: FoodAndBeverageComponent},
  { path: 'foodandbeverage', redirectTo: 'food-and-beverage', pathMatch: 'full'},
  { path: 'bars', component: BarsComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'book-now', component: BookNowComponent},
  { path: 'booknow', redirectTo: 'book-now', pathMatch: 'full'},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  AppComponent,
    AccomodationComponent,
    RoomsComponent,
    LifeStyleComponent,
    WelnessAndSpaComponent,
    ResortsActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternsWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    FoodAndBeverageComponent,
    BarsComponent,
    RestaurantComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    BookNowComponent
];
