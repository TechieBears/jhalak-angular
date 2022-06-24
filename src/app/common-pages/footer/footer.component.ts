import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  this: any;
  constructor() { }

  ngOnInit(): void {
  }


  // acc = document.querySelectorAll(".accordionftr");

  // for(let i = 0; i <acc.length; i++) {
  // acc[i].addEventListener("click", function () {

  //   for (let j = 0; j < acc.length; j++) {
  //     acc[j].classList.remove("accordionftractive");

  //     if (j !== i) {
  //       acc[j].nextElementSibling.style.maxHeight = null;
  //     }
  //   }

  //   var panel = this.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;

  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px"
  //     acc[i].classList.toggle("accordionftractive");
  //   }
  // });
}
    

    
 
