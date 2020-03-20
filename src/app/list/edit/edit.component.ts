import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '../list.component';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produtos: Produtos[]
  public lista;
  public form: FormGroup;

  constructor(
    private formB: FormBuilder, 
    private service: ProdutosService, 
    private route: ActivatedRoute,
    private router: Router,
    private ID: ListComponent
    ) {
    
    this.form = this.formB.group({
      id: [],
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['']
    })
   }

  add(){
    console.log(this.form.value);
    this.service.putProdutos(this.form.value).subscribe()
    this.back();
  }
  back(){
    this.router.navigate([''])
  }
  updataForm(produto){
    this.form.patchValue({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      preco: produto.preco
    })
  }

  id(){
    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id']
    //     const produto$ = this.service.editProdutos(id);
    //     produto$.subscribe(produto => {
    //       this.updataForm(produto);
    //     })
    //   }
    // )
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.editProdutos(id))
    ).subscribe(produto => this.updataForm(produto));
  }
  ngOnInit(){
    this.id()
  }

}
