import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-get-hired-form',
  templateUrl: './get-hired-form.component.html',
  styleUrls: ['./get-hired-form.component.scss']
})
export class GetHiredFormComponent implements OnInit {

  hiringForm!: FormGroup;

  constructor(
    private httpService: HttpService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.hiringForm = new FormGroup({
      subject: new FormControl(''),
      email: new FormControl('', Validators.required),
      resume: new FormControl('')
    });
  }

  handleSubmitClick(): void {
    const url = 'hiring';
    this.httpService.post(url, this.hiringForm.value).subscribe((res: any) => {
      this.snackbar.openSnackBar(res.message, 'Close', 'success-snackbar');
    });
  }

}
