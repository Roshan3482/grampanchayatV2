import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EnquiryComponent} from '../enquiry/enquiry.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    showEnquiry: boolean = false;

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
    }

    
}
