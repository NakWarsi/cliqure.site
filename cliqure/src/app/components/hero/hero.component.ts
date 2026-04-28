import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  protected readonly badge = 'Digital Solutions for Smarter Healthcare';
  protected readonly subheadline =
    'Cliqure builds digital solutions that empower healthcare providers to deliver safer, faster, and more connected care.';

  protected readonly ctaPrimary = { label: 'Explore PatientTrack', link: '/product' as const };
  protected readonly ctaSecondary = { label: 'About Cliqure', link: '/about' as const };
}
