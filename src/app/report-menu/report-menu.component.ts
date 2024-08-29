import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../utility/api.service';

@Component({
  selector: 'app-report-menu',
  templateUrl: './report-menu.component.html',
  styleUrls: ['./report-menu.component.css']
})
export class ReportMenuComponent implements OnInit {

  fileName = '';
  selectedFile: File;

  constructor(private api: APIService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
      console.log(this.selectedFile);
    }
  }

  uploadNamuna8() {
    this.api.uploadFile("/api/excel/upload/namuna/eight", this.selectedFile);
  }

  uploadNamuna9() {
    this.api.uploadFile("/api/excel/upload/namuna/nine", this.selectedFile);
  }

}
