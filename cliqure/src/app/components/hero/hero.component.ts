import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
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

  /** Slides plus a duplicate of the first at the end for seamless forward wrap. */
  protected readonly trackSlides = [...this.slides, this.slides[0]];

  protected currentSlide = 0;
  /** When false, transform changes apply instantly (used after the clone slide to snap back to index 0). */
  protected slideTransitionEnabled = true;

  private readonly autoSlideMs = 4500;
  private autoSlideTimerId: number | null = null;
  private snapTimerId: ReturnType<typeof setTimeout> | null = null;

  protected readonly ctaPrimary = { label: 'Explore PatientTrack', link: '/product' as const };
  protected readonly ctaSecondary = { label: 'About Cliqure', link: '/about' as const };

  protected isDotActive(i: number): boolean {
    const n = this.slides.length;
    return this.currentSlide === i || (this.currentSlide === n && i === 0);
  }

  protected previousSlide(): void {
    this.advanceSlideBackward();
    this.restartAutoSlide();
  }

  protected nextSlide(): void {
    this.advanceSlideForward();
    this.restartAutoSlide();
  }

  protected goToSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }
    this.clearSnapTimer();
    this.slideTransitionEnabled = true;
    this.currentSlide = index;
    this.restartAutoSlide();
  }

  protected pauseAutoSlide(): void {
    this.stopAutoSlide();
  }

  protected resumeAutoSlide(): void {
    this.startAutoSlide();
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    this.clearSnapTimer();
  }

  private startAutoSlide(): void {
    if (this.autoSlideTimerId !== null) {
      return;
    }

    this.autoSlideTimerId = window.setInterval(() => {
      this.advanceSlideForward();
    }, this.autoSlideMs);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideTimerId === null) {
      return;
    }
    window.clearInterval(this.autoSlideTimerId);
    this.autoSlideTimerId = null;
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  private advanceSlideForward(): void {
    this.clearSnapTimer();
    const n = this.slides.length;
    if (this.currentSlide === n) {
      this.slideTransitionEnabled = false;
      this.currentSlide = 0;
      requestAnimationFrame(() => {
        this.slideTransitionEnabled = true;
        this.currentSlide = 1;
      });
      return;
    }
    if (this.currentSlide < n - 1) {
      this.currentSlide++;
      return;
    }
    this.currentSlide = n;
    this.snapTimerId = window.setTimeout(() => this.snapHeroToStart(), 420);
  }

  private advanceSlideBackward(): void {
    this.clearSnapTimer();
    const n = this.slides.length;
    if (this.currentSlide > 0) {
      this.currentSlide--;
      return;
    }
    this.slideTransitionEnabled = false;
    this.currentSlide = n - 1;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.slideTransitionEnabled = true;
      });
    });
  }

  private snapHeroToStart(): void {
    this.snapTimerId = null;
    this.slideTransitionEnabled = false;
    this.currentSlide = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.slideTransitionEnabled = true;
      });
    });
  }

  private clearSnapTimer(): void {
    if (this.snapTimerId !== null) {
      window.clearTimeout(this.snapTimerId);
      this.snapTimerId = null;
    }
  }
}
