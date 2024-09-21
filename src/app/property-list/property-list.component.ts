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
        console.log(i)
        
      }
    }
  }

  

  
  billNo = "1";
  name = "Test";
  village = "Test";
  malmattaKra = "            ";

  currentYear = "24-25";
  previousYear = "23-24";

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
    this.malmattaKra = property.propertyNo;
    this.village = property.village;



    this.cdr.detectChanges();
    this.ngZone.runOutsideAngular(() => {
    const DATA: any = document.getElementById('htmlData');
    return new Promise((resolve, reject) => {
      html2canvas(DATA).then(canvas => {

        const marginTop = 5; // Top margin
        const marginBottom = 5; // Bottom margin
        const imgWidth = 297; // A4 width in landscape mode
        const availableHeight = 210 - marginTop - marginBottom; // Available height with margins
        const imgHeight = canvas.height * imgWidth / canvas.width;

        // Scale the image height if it exceeds the available height
        let scaledHeight = imgHeight;
        let scaledWidth = imgWidth;

        if (imgHeight > availableHeight) {
          scaledHeight = availableHeight;
          scaledWidth = canvas.width * scaledHeight / canvas.height;
        }

        // Reduce space from left and right by adjusting the image width
        const marginLeft = 5; // Adjust as needed
        const marginRight = 5; // Adjust as needed

        // Adjusted image width and height
        const adjustedImgWidth = imgWidth - marginLeft - marginRight;
        const adjustedImgHeight = canvas.height * adjustedImgWidth / canvas.width;

        // Center the content horizontally if it's scaled down
        const offsetX = (imgWidth - adjustedImgWidth) / 2;

        let pdf = new jsPDF('landscape', 'mm', 'a4');

        // Add the image with reduced margins on the sides
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', marginLeft, marginTop, adjustedImgWidth, scaledHeight);

        pdf.save('MaagniBill.pdf'); // Generated PDF
        setTimeout(()=>{
          resolve(0);
        },500)
      }); 
    })
  });
  }
}
