import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username="";
 btnDisableFlag=false;

 btnKeyUpMethod(){

  if(this.username.length!=null){
    this.btnDisableFlag=true;
  }
  if(this.username.length==null){
    this.btnDisableFlag=false;
  }
 }

 btnDiasbleMethod(){
  this.username=null;
 }
}
