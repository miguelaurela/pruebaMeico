import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient){}
  title = 'pruebaMeico';
  datos:any=[]

  ngOnInit(): void {
    this.llamarArchivo();
  }
  public llamarArchivo():void{
    this.httpClient.get("assets/datos.json").subscribe(data =>{
      this.datos=data;
            
    })
  }
}
