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
  protected readonly slides = [
    {
      id: 'core',
      headingLine1: 'Smarter Tracking.',
      headingLine2: 'Better Outcomes.',
      subheadline:
        'Cliqure builds digital solutions that empower healthcare providers to deliver safer, faster, and more connected care.',
    },
    {
      id: 'visibility',
      headingLine1: 'Real-Time Visibility.',
      headingLine2: 'Confident Decisions.',
      subheadline:
        'Track patient flow, status updates, and care milestones in one connected dashboard for every department.',
    },
    {
      id: 'operations',
      headingLine1: 'Streamlined Operations.',
      headingLine2: 'Connected Teams.',
      subheadline:
        'Reduce handoff delays and keep clinicians, coordinators, and administrators aligned with live data.',
    },
    {
      id: 'insights',
      headingLine1: 'Actionable Insights.',
      headingLine2: 'Measurable Impact.',
      subheadline:
        'Turn day-to-day activity into clear trends, alerts, and reporting that support safer patient outcomes.',
    },
  ] as const;

  protected currentSlide = 0;

  protected readonly ctaPrimary = { label: 'Explore PatientTrack', link: '/product' as const };
  protected readonly ctaSecondary = { label: 'About Cliqure', link: '/about' as const };

  protected previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  protected nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  protected goToSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }
    this.currentSlide = index;
  }
}
