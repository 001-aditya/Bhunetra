export type Status='healthy'|'review'|'gap';
export type PhotoStatus='verified'|'mismatch'|'review';
export interface Photo {id:string;lat:number;lng:number;timestamp:string;classified_as:string;confidence:number;satellite_match:boolean;thumbnail:string;status:PhotoStatus;satellite_reading:string;}
export interface Watershed {id:string;name:string;state:string;district:string;area_ha:number;status:Status;centroid:[number,number];}
export interface Timeline {period:string;stats:{water_ha:number;ndvi:number;agri:number;plantation:number}};
export interface Fixture {watershed:Watershed;layers:{land_use:{class:string,pct:number}[];ndvi_trend:{period:string,value:number}[];water_extent:{period:string,ha:number}[]};photos:Photo[];timeline:{period:string;stats:{water_ha:number;ndvi:number;agri:number;plantation:number}}[];alerts:{watershed_id:string;type:'no_photos'|'mismatch';severity:'high'|'medium'|'low'}[];}
