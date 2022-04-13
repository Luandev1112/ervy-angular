import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SaasHomeComponent } from './components/pages/saas-home/saas-home.component';
import { NavbarOneComponent } from './components/layouts/navbar-one/navbar-one.component';
import { MarketingHomeComponent } from './components/pages/marketing-home/marketing-home.component';
import { StartupHomeComponent } from './components/pages/startup-home/startup-home.component';
import { SeoAgencyHomeComponent } from './components/pages/seo-agency-home/seo-agency-home.component';
import { NavbarTwoComponent } from './components/layouts/navbar-two/navbar-two.component';
import { NavbarThreeComponent } from './components/layouts/navbar-three/navbar-three.component';
import { NavbarFourComponent } from './components/layouts/navbar-four/navbar-four.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    SaasHomeComponent,
    NavbarOneComponent,
    MarketingHomeComponent,
    StartupHomeComponent,
    SeoAgencyHomeComponent,
    NavbarTwoComponent,
    NavbarThreeComponent,
    NavbarFourComponent,
    AboutComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    ComingSoonComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
