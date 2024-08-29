import { Component, OnInit } from '@angular/core';

import { Building } from '../pojos/building';
import { Property } from '../pojos/property';
import { APIService } from '../utility/api.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-property-new',
  templateUrl: './property-new.component.html',
  styleUrls: ['./property-new.component.css']
})
export class PropertyNewComponent implements OnInit {

  buildingAgeLimit: number[] = [];
  limit: Building[] = [];
  property: Property;

  constructor(private api: APIService) {
    this.property = new Property();
  }

  ngOnInit(): void {
    this.buildingAgeLimit = Array.from({ length: 126 }, (_, i) => i);
    this.property.buildings = Array.from({ length: 1 }, (_, i) => new Building());
    console.log(this.limit);
  }

  calculateFloor(property: Property) {
    if(typeof property.areaLengthSqFt != "undefined" && typeof property.areaWidthSqFt != "undefined"){
      property.floorSpaceSqFt = property.areaLengthSqFt * property.areaWidthSqFt;
      property.floorSpaceSqMt = 0.092903 * property.floorSpaceSqFt;
    }
  }

  calculateBuildingBuiltAreaSqFt(building:Building){
    if(typeof building.buildingAreaLength != "undefined" && typeof building.buildingAreaWidth != "undefined"){
      building.buildingBuiltAreaSqFt = building.buildingAreaLength * building.buildingAreaWidth;
      building.buildingBuiltAreaSqMt = 0.092903 * building.buildingBuiltAreaSqFt;
    }
    
  }

  addBuilding(){
    this.property.buildings.push(new Building());
  }

  save() {
    // this.property.buildings = [];
    console.log(JSON.stringify(this.property));
    console.log(this.property);
    this.api.doHttpPost("/api/properties", this.property).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        // Handle the error here, for example, show a message to the user
        alert('An error occurred while saving the rate card.');
        // Return an observable with a user-facing error message
        return throwError(error);
      })
    ).subscribe(
      res => {
        console.log("Save Response of Rate Card");
        console.log(res);
        alert(res.statusMsg);
      }
    );
  }

  cancel() {
    this.property = new Property();
    this.property.buildings = Array.from({ length: 5 }, (_, i) => new Building());
  }

}
