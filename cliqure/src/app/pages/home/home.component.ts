import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesBarComponent } from '../../components/features-bar/features-bar.component';
import { ProductIntroComponent } from '../../components/product-intro/product-intro.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturesBarComponent, ProductIntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
