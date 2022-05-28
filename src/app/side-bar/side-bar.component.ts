import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';
const feat = document.getElementById("feat");

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']

})
export class SideBarComponent implements OnInit {


  constructor() { }



  ngOnInit(): void {
  }

  ShowAll(){

    $(".style").css("display","initial");
    $(".feat").css("display","initial");


  }

  ShowFeat(){
    $(".style").css("display","none");
  }

  ShowFix(){

  }



}

