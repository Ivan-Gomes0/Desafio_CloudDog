import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from './produtos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public title: String = 'TESTE LISTA';
  public produtos: Produtos[];
  public form: FormGroup;
  public lista;
  public editID;

  constructor(
    private formB: FormBuilder, 
    private service: ProdutosService,
    private router: Router
    ) { 
    // Form
    this.form = this.formB.group({
      id: [''],
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['']
    })
  }


  add(){
    //const id = this.produtos.length + 1;
    const id = this.form.controls['id'].value;
    const nome = this.form.controls['nome'].value;
    const categoria = this.form.controls['categoria'].value;
    const preco = this.form.controls['preco'].value;

    this.lista = {
      id,
      nome,
      categoria,
      preco
    }
    //this.produtos.push(new Produtos(id, nome, categoria, preco, ''));
    console.log(this.produtos);
    this.service.setProdutos(this.lista);
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(produto: Produtos){
    const index = this.produtos.indexOf(produto);
    if(index != -1){
      this.produtos.splice(index, 1);
    }
    console.log(this.produtos);
    this.service.removeProdutos(produto.id)
    .subscribe();
  }
  editar(id){
    this.editID = id;
    this.router.navigate(['editar', id])
  }

  ngOnInit() {
    this.service.getProdutos().subscribe( 
      retorno => { 
        this.produtos = retorno.map ( item => {
          return new Produtos(
            item.id,
            item.nome,
            item.categoria,
            item.preco,
            item.descricao
          )
        })
      } )
  }

}
