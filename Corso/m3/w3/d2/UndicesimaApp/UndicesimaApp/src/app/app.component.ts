import { Component } from '@angular/core';
// import obbligatori
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

/// i reacitve form sono gestiti dal componenet!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'UndicesimaApp';

  generi = ['uomo', 'donna'];

  form!: FormGroup;
  userNameProibiti = ['mario', 'anna'];

  constructor(private fb: FormBuilder) {}

  validUsername = (formC: FormControl) => {
    if (this.userNameProibiti.includes(formC.value)) {
      return {
        usernameProibito: true,
      };
    } else {
      return null;
    }
  };

  ngOnInit(): void {
    // il form group ha genere e sport e a sua volta contiene il group username e mail
    this.form = this.fb.group({
      userInfo: this.fb.group({
        username: this.fb.control(null, [
          Validators.required,
          this.validUsername,
        ]),
        email: this.fb.control(null, [Validators.required, Validators.email]),
      }),
      genere: this.fb.control('donna'),
      sports: this.fb.array([]),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getErrorC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  getSportsF() {
    return (this.form.get('sports') as FormArray).controls;
  }

  adSports() {
    const control = this.fb.control(null);
    (this.form.get('sports') as FormArray).push(control);
    console.log(this.getSportsF());
  }

  submit() {
    console.log(this.form);
    console.log('form correttamente inviato');
    this.getSportsF().length = 0;
    this.form.reset();
  }
}
