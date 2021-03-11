import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    device: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.http
      .post('http://localhost:3000/login', {
        id: parseInt(this.profileForm.value.id, 10),
        device: this.profileForm.value.device
      })
      .subscribe();
  }
}
