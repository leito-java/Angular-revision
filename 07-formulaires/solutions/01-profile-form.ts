import { FormControl, FormGroup, Validators } from '@angular/forms';

export const profileForm = new FormGroup({
  name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
  email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  newsletter: new FormControl(false, { nonNullable: true }),
});
