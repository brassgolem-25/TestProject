import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingDataArr:any=[];
  constructor() { }

  setBookingData(data:any){
    this.bookingDataArr.push(data);
  }

  getBookingData(){
    return this.bookingDataArr;
  }

  getBookedTimeSlot():string[]{
    let bookedTimeSlotArr:string[]=[];
    this.bookingDataArr.forEach((element:any) => {
      bookedTimeSlotArr.push(element.timeSlot);
    });
    return bookedTimeSlotArr;
  }
}
