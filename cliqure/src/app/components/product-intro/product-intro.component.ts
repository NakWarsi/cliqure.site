import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ProductRowIcon = 'flow' | 'realtime' | 'alerts' | 'analytics';
export type WhyIcon = 'bolt' | 'heart' | 'rocket' | 'tablet' | 'growth' | 'check';

interface ProductRow {
  icon: ProductRowIcon;
  title: string;
  description: string;
}

interface WhyCard {
  icon: WhyIcon;
  variant: 'gold' | 'teal';
  title: string;
  description: string;
}

@Component({
  selector: 'app-product-intro',
  imports: [RouterLink],
  templateUrl: './product-intro.component.html',
  styleUrl: './product-intro.component.css',
})
export class ProductIntroComponent {
  protected readonly kicker = 'Our Product';
  protected readonly headline = 'Introducing Cliqure';
  protected readonly description =
    'A smart patient tracking and management platform designed for modern healthcare facilities.';

  protected readonly highlights: ProductRow[] = [
    {
      icon: 'flow',
      title: 'Patient Flow Management',
      description: 'Monitor patient movement from registration to discharge.',
    },
    {
      icon: 'realtime',
      title: 'Real-time Updates',
      description: 'Get real-time status and location updates across departments.',
    },
    {
      icon: 'alerts',
      title: 'Smart Alerts & Notifications',
      description: 'Stay informed with instant alerts and notifications.',
    },
    {
      icon: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Gain actionable insights with powerful reports and dashboards.',
    },
  ];

  protected readonly whyChoose: WhyCard[] = [
    {
      icon: 'bolt',
      variant: 'gold',
      title: 'Improves efficiency',
      description: 'Automate workflows and reduce manual tasks.',
    },
    {
      icon: 'heart',
      variant: 'teal',
      title: 'Enhances patient care',
      description: 'Timely updates for better clinical decisions.',
    },
    {
      icon: 'rocket',
      variant: 'gold',
      title: 'Boosts productivity',
      description: 'Streamline operations and save valuable time.',
    },
    {
      icon: 'tablet',
      variant: 'teal',
      title: 'Data-driven insights',
      description: 'Make informed decisions with real-time analytics.',
    },
    {
      icon: 'growth',
      variant: 'gold',
      title: 'Scalable solution',
      description: 'Designed to grow with your healthcare facility.',
    },
    {
      icon: 'check',
      variant: 'teal',
      title: 'Easy to use',
      description: 'Intuitive interface for healthcare professionals.',
    },
  ];
}
