import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-log',
  templateUrl: './register-log.component.html',
  styleUrls: ['./register-log.component.css'],
})
export class RegisterLogComponent implements OnInit {
  data;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/userReg').subscribe((res) => {
      this.data = res;
    });
  }
}
