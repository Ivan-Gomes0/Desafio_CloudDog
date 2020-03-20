import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos, Categoria } from '../models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/produtos";

  getProdutos() : Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.url);
  }
  setProdutos(data: Produtos){
    this.http.post(this.url, data).toPromise().then(data => console.log(data));
  }
  editProdutos(id){
    return this.http.get<Produtos>(`${this.url}/${id}`)
  }
  putProdutos(produto){
    return this.http.put(`${this.url}/${produto.id}`, produto)
  }
  removeProdutos(id){
    return this.http.delete(`${this.url}/${id}`);
  }


  private urlcat = "http://localhost:3000/categorias";

  getCategoria() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlcat);
  }
  setCategoria(data: Categoria){
    this.http.post(this.urlcat, data).toPromise().then(data => console.log(data));
  }
  editCategoria(id){
    return this.http.get<Produtos>(`${this.urlcat}/${id}`)
  }
  putcategoria(categoria){
    return this.http.put(`${this.urlcat}/${categoria.id}`, categoria)
  }
  removecategoria(id){  
    return this.http.delete(`${this.urlcat}/${id}`);
  }

}
