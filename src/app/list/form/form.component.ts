import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  produtos: Produtos[]
  public lista;
  public form: FormGroup;
  constructor(private formB: FormBuilder, private service: ProdutosService) {
    this.form = this.formB.group({
      id: [''],
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['']
    })
   }

  add(){
    //this.produtos.push(new Produtos(id, nome, categoria, preco, ''));
    console.log(this.produtos);
    this.service.setProdutos(this.form.value);
    this.clear();
  }
  clear(){
    this.form.reset();
  }
  ngOnInit(): void {
  }

}
