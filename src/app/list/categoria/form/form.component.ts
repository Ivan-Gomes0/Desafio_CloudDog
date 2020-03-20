import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/produtos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormCatComponent implements OnInit {

  categoria: Categoria;
  public form: FormGroup;
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
  ngOnInit(){
  }

}
