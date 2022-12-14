import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ContactUsService } from '../../contact-us.service';

// import 'src/assets/smtp/smtp.js';
// import 'src/assets/smtp/smtp';

declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  contactUsDetails = [{
    title: 'Location',
    icon: '',
    details: 'Seattle, WA | USA'
  }, {
    title: 'Phone Number',
    icon: '',
    details: '+1 425-666-7999'
  }, {
    title: 'Email',
    icon: '',
    details: 'care@givetheneed.org'
  }];
  fromEmailAddress = new FormControl(null, Validators.required);

  constructor(
    private contactUsService: ContactUsService
  ) { }

  ngOnInit(): void {
    // this.initializeForm();
    // this.getUserDetails();
  }

  initializeForm() {

    this.contactForm = new FormGroup({
      // name: this.formBuilder.group({
      //   firstName: ['', Validators.required],
      //   lastName: ['', Validators.required]
      // }),
      email: new FormControl(''),
      message: new FormControl('', Validators.required)
    });
    // this.contactForm.controls['name'].disable();
    // this.contactForm.controls['email'].disable();
  }

  getUserDetails() {
    // this.userService.authMe().subscribe((res: Response) => {
    //   this.userInfo = res?.data;
    //   this.contactForm.patchValue({
    //     name: this.userInfo.name,
    //     email: this.userInfo.email
    //   })
    // });
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
