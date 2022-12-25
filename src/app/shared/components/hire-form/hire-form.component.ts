import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-hire-form',
  templateUrl: './hire-form.component.html',
  styleUrls: ['./hire-form.component.scss']
})
export class HireFormComponent implements OnInit {

  hireForm!: FormGroup;

  constructor(
    private httpService: HttpService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.hireForm = new FormGroup({
      subject: new FormControl(''),
      email: new FormControl('', Validators.required),
      location: new FormControl('')
    });
  }

  handleSubmitClick(): void {
    const url = 'hire';
    this.httpService.post(url, this.hireForm.value).subscribe((res: any) => {
      this.snackbar.openSnackBar(res.message, 'Close', 'success-snackbar');
    });
  }

}
