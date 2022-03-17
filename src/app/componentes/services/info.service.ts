import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPag} from  'src/app/interfaces/infoPag';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  infoPag: InfoPag = {};

  constructor(private http: HttpClient) { 
    this.getinfoPag();
    this.getinginfoEquipo();
  

    
}


public getinfoPag(){
 return this.http.get('assets/data/infoPag.json');

  
}

public getinginfoEquipo(){
 return this.http.get('https://porfolioapp-80e54-default-rtdb.firebaseio.com/equipo.json');
}




}