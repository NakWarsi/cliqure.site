import { Component } from '@angular/core';

export type FeatureBarIcon = 'secure' | 'realtime' | 'collab' | 'insight';

@Component({
  selector: 'app-features-bar',
  templateUrl: './features-bar.component.html',
  styleUrl: './features-bar.component.css',
})
export class FeaturesBarComponent {
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
  ];
}
