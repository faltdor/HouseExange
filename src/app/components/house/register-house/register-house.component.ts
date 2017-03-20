import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AgmCoreModule , MapsAPILoader, NoOpMapsAPILoader ,MouseEvent , MarkerManager} from 'angular2-google-maps/core';

import { IHouse,ILocation,IPhone } from '../../../model/interface/index';

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {
  zoom : number = 10;
  lat: number = 51.678418;
  lng: number = 7.809007;

  houseForm: FormGroup;
  locationForm: FormGroup;

   

  constructor(private _fb: FormBuilder) { 
        this.houseForm = _fb.group(this.initHouseForm());
        this.locationForm = _fb.group(this.initLocationForm());

        //this.houseForm.setValue({ "name": "sds", "description": "sdsdsd", "email": "sds@sds.co" });

  }

  ngOnInit() {
  }

  initHouseForm(){
     let regular = /\S+@\S+\.\S+/;
     const form =  {
            name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
            description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
            email: ['', [Validators.required , Validators.pattern(regular)]],
        };

      return form;  
  }

  initLocationForm(){
     const form =  {
            longitude: ['', Validators.required],
            latitude: ['', Validators.required ],
            description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],            
            phones:['', Validators.required]
        };

      return form;  
  }




  saveHouseForm(model: IHouse, isValid: boolean) {
        
        console.log(model, isValid);
   }

  mapClicked(event:MouseEvent):void{
    
  }

}
