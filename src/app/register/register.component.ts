import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    sex: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.http.post('http://localhost:3000/userInfo', this.profileForm.value).subscribe();
  }
}
