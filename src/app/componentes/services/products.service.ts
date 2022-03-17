import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http: HttpClient) { 
this.getProductosIdx();   
}

public getProductosIdx(){
  return this.http.get('https://porfolioapp-80e54-default-rtdb.firebaseio.com/productos_idx.json');

}
public getProductos(){
  return this.http.get('https://porfolioapp-80e54-default-rtdb.firebaseio.com/productos.json');
}
public getProduct(id:string){
  return this.http.get(`https://porfolioapp-80e54-default-rtdb.firebaseio.com/productos/${ id }.json`);
}
}