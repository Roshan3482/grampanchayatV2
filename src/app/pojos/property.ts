import { Building } from "./building";

export class Property {
    anuKra: string;                                //अनु. क़्र.
    wardNo: string;                                //वार्ड नं.
    propertyNo: string;                            //मालमत्ता क्रं.
    measlesNo: string;                             //खसरा नं.
    plotNo: string;                                //प्लॉट नं.
    mobileNo: string;                              //मोबाइल नं.

    ownerName: string;                             //खातेधारकाचे नाव
    ownerWifeName: string;                         //पत्नीचे नाव
    ownerAddress: string;                          //खातेधारकाचा पत्ता
    renteeName: string;                            //भाडेकरु / भोगवटदार पुर्ण नाव
   
    buildings: Building[] = [];

    openPlotType: string;
    areaLengthSqFt: number;                         //क्षेत्र.लांबी (चौ.फुट)
    areaWidthSqFt: number;                          //क्षेत्र.रुंदी (चौ.फुट)
    floorSpaceSqFt: number;                         //खाली जागा (चौ.फुट)
    floorSpaceSqMt: number;                         //खाली जागा (चौ.मी)

    isPersonalTaps: boolean = false;                    //नळ
    isPublicTaps: boolean = false;                      //सार्वजनिक नळ
    isWaterOtherSource: boolean = false;                //इतर

    isToiletAvailable: boolean = true;

}