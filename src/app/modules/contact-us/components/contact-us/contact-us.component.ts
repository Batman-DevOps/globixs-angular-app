import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpService } from 'src/app/core/services/http.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  contactUsDetails = [{
    title: 'Location',
    icon: 'assets/images/location_on.png',
    details: '1729 208TH ST SE, SUITE 103, BOTHELL, WA 98012'
  }, {
    title: 'Email',
    icon: 'assets/images/email.png',
    details: 'info@theteammc.com'
  }, {
    title: 'Phone Number',
    icon: 'assets/images/phone.png',
    details: '+1 425.666.8998'
  }];
  fromEmailAddress = new FormControl(null, Validators.required);

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {

    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', Validators.required),
      phone: new FormControl(''),
      subject: new FormControl(''),
      more: new FormControl('')
    });
  }

  handleContactUs() {
    const url = 'contact-us';
    this.httpService.post(url, this.contactForm.value).subscribe((res: any) => {
      this.snackbar.openSnackBar(res.message, 'Close', 'success-snackbar');
      this.contactForm.reset();
    });
  }

}
