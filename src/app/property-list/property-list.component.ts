import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from '../utility/api.service';
import { Building } from '../pojos/building';
import { Property } from '../pojos/property';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'अनु.क्र.', 'मालमत्ता क्रमांक', 'नाव', 'मोबाईल', 'मालमत्ता', 'Action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  isPDFVisible = false;

  constructor(private api: APIService, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit() {
    this.getAllPropertyList();
  }

  getAllPropertyList() {
    this.api.doHttpGet("/api/properties").subscribe(list => {
      console.log(list);
      this.dataSource = new MatTableDataSource(list);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  generatePDF(anuKr: any, id: any) {
    console.log(anuKr);
    console.log(id);
    this.api.doHttpGet("/api/excel/generate-pdf" + "?anuKramank=" + anuKr + "&id=" + id, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'filename.pdf'; // The name you want to give to the downloaded file
      link.click();
    }, error => {
      console.error('Download error:', error);
    });
  }

  async downloadAllPDF() {
    console.log(this.dataSource.filteredData);
    for (let i = 0; i < this.dataSource.filteredData.length; i++) {
      for(let j = 0; j < this.dataSource.filteredData[i].buildings.length; j++){
        // this.generatePDF(this.dataSource.filteredData[i].anuKra, this.dataSource.filteredData[i].buildings[j].id);
        await this.downloadPDF(this.dataSource.filteredData[i], this.dataSource.filteredData[i].buildings[j]);
        
      }
    }
  }

  

  
  billNo = "1";
  name = "Test";
  village = "Test";

  currentYear = "2024-2025";
  previousYear = "2023-2024";

  prevHomeTax = 0;
  currtHomeTax = 0;
  prevElectTax = 0;
  currtElectTax = 0;
  prevHealthTax = 0;
  currtHealthTax = 0;
  prevWaterTax = 0;
  currtWaterTax = 0;
  prevSpWaterTax = 0;
  currtSpWaterTax = 0;


  public downloadPDF(property:Property, building:Building) {
    this.name = property.ownerName;
    this.prevHomeTax = building.homeTaxPrev;
    this.currtHomeTax = building.homeTaxCurnt;
    this.prevElectTax = building.electTaxPrev;
    this.currtElectTax = building.electTaxCurnt;
    this.prevHealthTax = building.healthTaxPrev;
    this.currtHealthTax = building.healthTaxCurnt;
    this.prevWaterTax = building.waterTaxPrev;
    this.currtWaterTax = building.waterTaxCurnt;
    this.prevSpWaterTax = building.spWaterTaxPrev;
    this.currtSpWaterTax = building.spWaterTaxCurnt;



    this.cdr.detectChanges();
    this.ngZone.runOutsideAngular(() => {
    const DATA: any = document.getElementById('htmlData');
    return new Promise((resolve, reject) => {
      html2canvas(DATA).then(canvas => {

        

        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('MaagniBill.pdf'); // Generated PDF
        setTimeout(()=>{
          resolve(0);
        },500)
      }); 
    })
  });
  }
}
