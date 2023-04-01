import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaasLandingComponent } from './components/pages/saas-landing/saas-landing.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FunfactComponent } from './components/common/funfact/funfact.component';
import { PartnerComponent } from './components/common/partner/partner.component';
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
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SaasLandingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FunfactComponent,
    PartnerComponent,
    AppLandingComponent,
    DigitalMarketingComponent,
    ProductLandingComponent,
    SoftwareLandingComponent,
    BookLandingComponent,
    StartupAgencyComponent,
    PaymentProcessingComponent,
    AboutUsComponent,
    FeaturesComponent,
    ServicesComponent,
    GalleryComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactUsComponent,
    NotFoundComponent,
    FaqComponent,
    ComingSoonComponent,
    LoginComponent,
    SignupComponent,
    TeamComponent,
    PricingComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
