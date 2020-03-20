import { Component, OnInit } from '@angular/core';
import { Produtos, Categoria } from 'src/app/models/produtos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria[];
  public form: FormGroup;
  public router: Router;
  constructor(private service: ProdutosService ,private formB: FormBuilder) { 
    this.form = this.formB.group({
      categoria: ['', Validators.required],
    })
  }

  add(){
    //this.produtos.push(new Produtos(id, nome, categoria, preco, ''));
    console.log(this.categoria);
    this.service.setCategoria(this.form.value);
    this.clear();
  }
  clear(){
    this.form.reset;
  }
  remove(categoria: Categoria){
    const index = this.categoria.indexOf(categoria);
    if(index != -1){
      this.categoria.splice(index, 1);
    }
    console.log(this.categoria);
    this.service.removecategoria(categoria.id)
    .subscribe();
  }
  editar(id){
    this.router.navigate(['editar', id])
  }
  ngOnInit(){
    this.service.getCategoria().subscribe( 
      retorno => { 
        this.categoria = retorno.map ( item => {
          return new Categoria(
            item.id,
            item.categoria,
          )
        })
      } )
  }

}
