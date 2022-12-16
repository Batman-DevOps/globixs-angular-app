import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ContactUsService } from '../../contact-us.service';

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
    private contactUsService: ContactUsService,
    private formBuilder: FormBuilder
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
    console.log('this.contactForm.value', this.contactForm.getRawValue());
    // this.communicationService.sendContactUsEmail(this.contactForm.getRawValue()).subscribe((res: Response) => {
    //   this.snackbar.openSnackBar(res?.message!, 'Close', 'success-snackbar');
    //   this.contactForm.patchValue({
    //     message: ''
    //   });
    // });
  }

  handleSubscribe() {
    let payload = { to: this.fromEmailAddress.value };
    console.log('payload', payload)
    this.contactUsService.post('v1/communications/sendSubscriptionEmail', payload)
      .subscribe((res: {}) => {
      console.log('res', res);
    });
  }

}
