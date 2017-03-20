export interface ILocation {

	longitude: string;
    latitude: string;
    description: string;
    phones: IPhone[];
}


export interface IPhone {
  phone: string;  
}