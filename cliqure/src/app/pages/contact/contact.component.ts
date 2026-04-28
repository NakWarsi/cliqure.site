import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected email = '';
  protected message = '';
  protected organization = '';

  protected onSubmit(): void {
    // Placeholder: wire to backend or mail service when available.
  }
}
