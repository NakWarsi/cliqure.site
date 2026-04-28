import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { FeaturesComponent } from './pages/features/features.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetTheAppComponent } from './pages/get-the-app/get-the-app.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'get-the-app', component: GetTheAppComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
