import { Village } from "./village";

export class RateCard {
    ga: number;
    gb: number;
    gc: number;
    gd: number;
    electricRate: number;
    healthRate: number;
    normalWaterRate: number;
    specialWaterRate: number;

    ra: number;
    rb: number;
    rc: number;
    rd: number;

    previousYear: number;
    currentYear: number;

    kirmitiVillege: Village = new Village();
    kinhiVillege: Village = new Village();
    turkmariVillege: Village = new Village();
    tembriVillege: Village = new Village();
    vateghatVillege: Village = new Village();
    midcVillege: Village = new Village();

    villageDTOs:Village[]=[];

}

