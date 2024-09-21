import { Component, OnInit } from '@angular/core';
import { RateCard } from '../pojos/rateCard';
import { APIService } from '../utility/api.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Village } from '../pojos/village';


@Component({
  selector: 'app-property-ratecard',
  templateUrl: './property-ratecard.component.html',
  styleUrls: ['./property-ratecard.component.css'],
})
export class PropertyRatecardComponent implements OnInit {

  rateCard: RateCard;

  constructor(private api: APIService) {
    this.rateCard = new RateCard();
  }

  ngOnInit(): void {
    this.getRateCard();
  }

  getRateCard(){
    this.api.doHttpGet("/api/ratecard").pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        // Handle the error here, for example, show a message to the user
        alert('An error occurred while saving the rate card.');
        // Return an observable with a user-facing error message
        return throwError(error);
      })
    ).subscribe(
      res => {
        console.log("Get Response of Rate Card");
        console.log(res);
        this.rateCard = res;
      }
    );
  }

  save() {
    this.setVillegeInList();

    console.log(JSON.stringify(this.rateCard));
    console.log(this.rateCard);
    this.api.doHttpPost("/api/ratecard", this.rateCard).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        this.setVillegeInList();
        // Handle the error here, for example, show a message to the user
        alert('An error occurred while saving the rate card.');
        // Return an observable with a user-facing error message
        return throwError(error);
      })
    ).subscribe(
      res => {
        console.log("Save Response of Rate Card");
        console.log(res);
      }
    );
  }

  setVillegeInList(){
    this.rateCard.villageDTOs = [];
    this.rateCard.kinhiVillege.villageName = "किन्ही";
    this.rateCard.kirmitiVillege.villageName = "किरमटी";
    this.rateCard.turkmariVillege.villageName = "तुरकमारी";
    this.rateCard.tembriVillege.villageName = "टेंभरी";
    this.rateCard.vateghatVillege.villageName = "वटेघाट";
    this.rateCard.midcVillege.villageName = "MIDC";

    this.rateCard.villageDTOs.push(this.rateCard.kinhiVillege);
    this.rateCard.villageDTOs.push(this.rateCard.kirmitiVillege);
    this.rateCard.villageDTOs.push(this.rateCard.turkmariVillege);
    this.rateCard.villageDTOs.push(this.rateCard.tembriVillege);
    this.rateCard.villageDTOs.push(this.rateCard.vateghatVillege);
    this.rateCard.villageDTOs.push(this.rateCard.midcVillege);
  }

  putDummyDataForRateCard(){
   let data =  {
      "ga": 0.3,
      "gb": 0.6,
      "gc": 0.75,
      "gd": 1.2,
      "electricRate": 50,
      "healthRate": 50,
      "normalWaterRate": 200,
      "specialWaterRate": 600,
      "ra": 7826,
      "rb": 12197,
      "rc": 17279,
      "rd": 21296,
      "previousYear": 2024,
      "currentYear": 2025,
      "khadki": 1840,
      "mandwa": 1260,
      "lakhmapur": 3080,
      "bhansoli": 1450,
      "kinhi": 1450
    }
    return data;
  }

  cancel() {

  }

}
