import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Type utilisé pour limiter shouldShowError aux champs qui possèdent des erreurs.
type ProfileField = 'name' | 'email';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './01-profile-form.html',
})
export class ProfileFormComponent {
  // Permet d'afficher les erreurs après une première tentative de soumission.
  readonly submitted = signal(false);

  // Contient le dernier profil valide afin de montrer le résultat de l'exercice.
  readonly savedProfile = signal<{ name: string; email: string; newsletter: boolean } | null>(null);

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    newsletter: new FormControl(false, { nonNullable: true }),
  });

  /** Retourne true lorsqu'une erreur doit être montrée à l'utilisateur. */
  shouldShowError(field: ProfileField): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  /** Refuse les données invalides et mémorise un profil valide. */
  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.savedProfile.set(this.form.getRawValue());
    this.submitted.set(false);
  }
}
