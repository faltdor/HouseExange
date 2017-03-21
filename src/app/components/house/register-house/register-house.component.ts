import { Component, OnInit } from '@angular/core';
import { FormArray , FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms'; 
import { AgmCoreModule , MapsAPILoader, NoOpMapsAPILoader ,MouseEvent , MarkerManager} from 'angular2-google-maps/core';

import { IHouse,ILocation,IPhone } from '../../../model/interface/index';
import { Currency,CurrencyType } from '../../../model/index';

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
  currencyForm : FormGroup;
  

  constructor(private _fb: FormBuilder) { 
        this.houseForm = _fb.group(this.initHouseForm());
        this.locationForm = _fb.group(this.initLocationForm()); 
        this.currencyForm = _fb.group(this.initCurrencyForm()); 


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
            phones: this._fb.array([])
        };

      return form;  
  }

  initCurrencyForm(){
    const form =  {
            currencies: this._fb.array([])
        };

      return form;
  }

  initCurrencyControl(){
    const form = {
        buyAt:['', Validators.required],
        sellAt:['', Validators.required],
        code:['', Validators.required],
        name:['', Validators.required],
        trm:['', Validators.required],
    }

    return form;
  }


  get phones(): FormArray {
    return this.locationForm.get('phones') as FormArray;
  };

  setPhones(phones: IPhone[]) {
    const phonesFGs = phones.map(phone => this._fb.group(phone));
    const phoneFormArray = this._fb.array(phonesFGs);
    this.locationForm.setControl('phones', phoneFormArray);
  }

  addPhone() {    
    const ctrPhone = {
      phone:['', Validators.required]
    }
    this.phones.push(this._fb.group(ctrPhone));
  }  

  deletePhone(index:number) {     
    this.phones.removeAt(index);
  }

  get currencies(): FormArray {
    return this.currencyForm.get('currencies') as FormArray;
  };

  addCurrency() { 
    console.log("new")   ;
    let currency = this.initCurrencyControl();
    console.log(currency)   ;
    this.currencies.push(this._fb.group(currency));
  }

  deleteCurrency(index:number){
    this.currencies.removeAt(index);
  }





  saveHouseForm(model: IHouse, isValid: boolean) {
        
        console.log(model, isValid);
   }

  mapClicked(event:MouseEvent):void{
    
  }

}
