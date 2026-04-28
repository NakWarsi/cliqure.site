import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export type AppPlatformId = 'android' | 'ios' | 'windows' | 'web';

export interface AppPlatformLink {
  id: AppPlatformId;
  name: string;
  description: string;
  cta: string;
  /** Your public store or download URL. */
  href: string;
}

@Component({
  selector: 'app-get-the-app',
  imports: [RouterLink],
  templateUrl: './get-the-app.component.html',
  styleUrl: './get-the-app.component.css',
})
export class GetTheAppComponent {
  /**
   * Edit `href` for each platform when your listings are live.
   * Use full URLs (https). Links open in a new tab.
   */
  protected readonly platforms: AppPlatformLink[] = [
    {
      id: 'android',
      name: 'Android',
      description: 'Phones and tablets on Google Play — install in one tap.',
      cta: 'Get on Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.yourcompany.patienttrack',
    },
    {
      id: 'ios',
      name: 'iOS',
      description: 'iPhone and iPad from the App Store with the same secure experience.',
      cta: 'Download on the App Store',
      href: 'https://apps.apple.com/app/id0000000000',
    },
    {
      id: 'windows',
      name: 'Windows',
      description: 'Desktop app for Windows 10/11 — full workspace integration.',
      cta: 'Get from Microsoft Store',
      href: 'https://apps.microsoft.com/store/detail/your-app-id',
    },
    {
      id: 'web',
      name: 'Web app',
      description: 'Run in the browser — no install required, works where you already work.',
      cta: 'Open web app',
      href: 'https://app.yourdomain.com',
    },
  ];

  protected supportsQr(platformId: AppPlatformId): boolean {
    return platformId === 'android' || platformId === 'ios';
  }

  protected getQrCodeUrl(url: string): string {
    const encodedUrl = encodeURIComponent(url);
    return `https://api.qrserver.com/v1/create-qr-code/?size=144x144&margin=0&data=${encodedUrl}`;
  }
}
