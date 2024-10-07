import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/core/apiservice.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-topdeals',
  templateUrl: './topdeals.component.html',
  styleUrls: ['./topdeals.component.scss']
})
export class TopdealsComponent {

topdeals: any;

constructor(private backend:ApiserviceService){

}

ngOnInit(){
  this.getTopdeals();
}

getTopdeals(){
this.backend.getdataFromserver("top-deals").subscribe({
  next:(resp:any)=>{
   if(resp && resp.length >0){
    this.topdeals=resp;
   }
  },
  error:(err:any)=>{

  }
})
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}


}
