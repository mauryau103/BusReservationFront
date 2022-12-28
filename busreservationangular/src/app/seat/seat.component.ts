import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  seat = seatArray1;
  constructor() { }

  ngOnInit(): void {
  }
   
  
  
   
 greet(num: number): void
  {
    
    var btn=<HTMLInputElement>document.getElementById("num");
    count[num-1]=count[num-1]+1;
    console.log(count[num-1]);
    
    console.log("the number clicked is " + num);

    if (count[num-1] % 2 == 1) {
      let input = <HTMLInputElement>document.getElementById(String(num));
      input.style.backgroundColor = "blue";
    }else{
      let input = <HTMLInputElement>document.getElementById(String(num));
      input.style.backgroundColor = "darkcyan";
    }
  }
}




// var multi = [[1, 2, 3], [23, 24, 25]];
// console.log(multi[0][0]);
// console.log(multi[0][1]);
// console.log(multi[0][2]);
// console.log(multi[1][0]);
// console.log(multi[1][1]);
// console.log(multi[1][2]);

let seatArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
