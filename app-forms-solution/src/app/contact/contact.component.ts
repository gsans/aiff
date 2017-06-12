import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public model = { email: null };

  public ngOnInit() {
    console.log('hello `Contact` component');
  }

  public onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
  }
}
