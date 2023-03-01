import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaasLandingComponent } from './components/pages/saas-landing/saas-landing.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { ProductLandingComponent } from './components/pages/product-landing/product-landing.component';
import { SoftwareLandingComponent } from './components/pages/software-landing/software-landing.component';
import { BookLandingComponent } from './components/pages/book-landing/book-landing.component';
import { StartupAgencyComponent } from './components/pages/startup-agency/startup-agency.component';
import { PaymentProcessingComponent } from './components/pages/payment-processing/payment-processing.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';


const routes: Routes = [
    { path: '', component: ProductLandingComponent },
    { path: 'app-landing', component: AppLandingComponent },
    { path: 'digital-marketing', component: DigitalMarketingComponent },
    { path: 'product-landing', component: ProductLandingComponent },
    { path: 'software-landing', component: SoftwareLandingComponent },
    { path: 'book-landing', component: BookLandingComponent },
    { path: 'startup-agency', component: StartupAgencyComponent },
    { path: 'payment-processing', component: PaymentProcessingComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'team', component: TeamComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
