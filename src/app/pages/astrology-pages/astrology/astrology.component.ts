import { Component, OnInit } from '@angular/core';
import { AstrologyService } from 'src/app/_services/astrology-services/astrology.service';

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.css']
})
export class AstrologyComponent implements OnInit {

  constructor(private astrologyService:AstrologyService) { }

  ngOnInit(): void {
    this.getallastrology();
  }

  getallastrology(){
    this.astrologyService
  }
}
