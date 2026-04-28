import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

export type FeatureBarIcon = 'secure' | 'realtime' | 'collab' | 'insight';

@Component({
  selector: 'app-features-bar',
  templateUrl: './features-bar.component.html',
  styleUrl: './features-bar.component.css',
})
export class FeaturesBarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselViewport') private readonly carouselViewport?: ElementRef<HTMLDivElement>;

  protected readonly items: { icon: FeatureBarIcon; title: string; description: string }[] = [
    {
      icon: 'secure',
      title: 'Secure & Compliant',
      description: 'HIPAA-ready & data privacy focused.',
    },
    {
      icon: 'realtime',
      title: 'Real-time Tracking',
      description: 'Track patients in real-time across the core journey.',
    },
    {
      icon: 'collab',
      title: 'Better Collaboration',
      description: 'Improve communication across healthcare teams.',
    },
    {
      icon: 'insight',
      title: 'Actionable Insights',
      description: 'Powerful analytics for better decisions.',
    },
    {
      icon: 'secure',
      title: 'Role-Based Access',
      description: 'Ensure each team member sees only the data they need.',
    },
    {
      icon: 'realtime',
      title: 'Live Bed Status',
      description: 'Monitor occupancy and patient movement in real time.',
    },
    {
      icon: 'collab',
      title: 'Care Team Coordination',
      description: 'Keep nurses, doctors, and admins aligned on next steps.',
    },
    {
      icon: 'insight',
      title: 'Operational Dashboards',
      description: 'Track throughput, bottlenecks, and performance trends.',
    },
    {
      icon: 'secure',
      title: 'Audit Ready Records',
      description: 'Maintain traceable activity logs for compliance checks.',
    },
    {
      icon: 'realtime',
      title: 'Instant Alerting',
      description: 'Receive immediate updates for delays, escalations, and risk.',
    },
  ];

  protected readonly loopedItems = [...this.items, ...this.items];

  private readonly cardStepPx = 304; // card width + gap
  private readonly autoScrollMs = 2600;
  private autoScrollTimerId: number | null = null;

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  protected pauseAutoScroll(): void {
    this.stopAutoScroll();
  }

  protected resumeAutoScroll(): void {
    this.startAutoScroll();
  }

  protected scrollByStep(direction: 1 | -1): void {
    const viewport = this.carouselViewport?.nativeElement;
    if (!viewport) {
      return;
    }

    viewport.scrollBy({
      left: direction * this.cardStepPx,
      behavior: 'smooth',
    });
    this.restartAutoScroll();
  }

  private startAutoScroll(): void {
    if (this.autoScrollTimerId !== null) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.autoScrollTimerId = window.setInterval(() => {
        const viewport = this.carouselViewport?.nativeElement;
        if (!viewport) {
          return;
        }

        viewport.scrollBy({ left: this.cardStepPx, behavior: 'smooth' });

        // Keep loop seamless by snapping back once we pass the first sequence.
        const halfWidth = viewport.scrollWidth / 2;
        if (viewport.scrollLeft >= halfWidth) {
          window.setTimeout(() => {
            viewport.scrollLeft -= halfWidth;
          }, 420);
        }
      }, this.autoScrollMs);
    });
  }

  private stopAutoScroll(): void {
    if (this.autoScrollTimerId === null) {
      return;
    }

    window.clearInterval(this.autoScrollTimerId);
    this.autoScrollTimerId = null;
  }

  private restartAutoScroll(): void {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
