export class Building {

    buildingForm: string = "";                  // इमारतीचे स्वरुप	
    buildingFloor: string = "";                 // इमारतीचा मजला	
    buildingType: string = "";                  // इमारतीचा वापर	
    buildingAge: number = 20;                   // अंदाजे आयुष्य		
    buildingAreaLength: number;                 //क्षेत्र.रुंदी (चौ.फुट)	
    buildingAreaWidth: number;                  //बिल्ट एरिया (चौ.फुट)	
    buildingBuiltAreaSqFt: number;              //बिल्ट एरिया (चौ.मी)
    buildingBuiltAreaSqMt: number;              //बिल्ट एरिया (चौ.मी)

    homeTaxPrev: number;                        //घर कर (मागील)
    homeTaxCurnt: number;                       //घर कर (चालू)

    electTaxPrev: number;                       //वीज कर (मागील)
    electTaxCurnt: number;                      //वीज कर (चालू)

    healthTaxPrev: number;                      //आरोग्य कर (मागील)
    healthTaxCurnt: number;                     //आरोग्य कर (चालू)

    waterTaxPrev: number;                       //पाणी कर (मागील)
    waterTaxCurnt: number;                      //पाणी कर (चालू)

    spWaterTaxPrev: number;                     //विशेष पाणी कर (मागील)
    spWaterTaxCurnt: number;                    //विशेष पाणी कर (चालू)


}