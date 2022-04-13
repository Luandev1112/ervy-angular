import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaasHomeComponent } from './components/pages/saas-home/saas-home.component';
import { MarketingHomeComponent } from './components/pages/marketing-home/marketing-home.component';
import { StartupHomeComponent } from './components/pages/startup-home/startup-home.component';
import { SeoAgencyHomeComponent } from './components/pages/seo-agency-home/seo-agency-home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
    {path: '', component: SaasHomeComponent},
    {path: 'marketing', component: MarketingHomeComponent},
    {path: 'startup', component: StartupHomeComponent},
    {path: 'seo-agency', component: SeoAgencyHomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'products-list', component: ProductsListComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}