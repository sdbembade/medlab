
import { Component } from '@angular/core';
import { debounceTime,distinctUntilChanged,Subject, switchMap } from 'rxjs';
import { ApiserviceService } from 'src/app/core/apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent {


  pincode: string ="";
  city: string = "";
  
  searchSubject:Subject<string>= new Subject<string>();

  searchText:string="";
  medicines:any=[];


  constructor(private backend:ApiserviceService) {

  }
  ngOnInit(){
  this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((query:string) => 
       this.backend.getdataFromserver("top-deals?description_like="+this.searchText))
     ).subscribe({
       next: (response: any) => {
         console.log("response", response);
       this.medicines = response && response.length > 0 ? response : [];
    },
       error: (err:any) => {
         console.error("Error fetching data", err);
         // Handle the error appropriately
       },
     })
    
   
  }
  searchCitybypincode() {
    if (this.pincode.trim().length === 6) {
      const endPoint = "get-pincode-details?pincode=" + this.pincode;
      console.log(endPoint);
      this.backend.getdataFromserver(endPoint).subscribe({
        next: (response: any) => {
          console.log(response);
          if(response && response.length > 0){
           this.city = response[0].pincodeCity
          }
        },
        error: () => {

        }
      })
    }

  }
  searchProducts(){
    if(this.searchText.trim() == ''){
      this.medicines=[];
    }
    else{
      this.searchSubject.next(this.searchText);
    }
  }

}

