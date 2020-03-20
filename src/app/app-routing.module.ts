import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './list/form/form.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './list/edit/edit.component';
import { CategoriaComponent } from './list/categoria/categoria.component';
import { FormCatComponent } from './list/categoria/form/form.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'adicionar', component: FormComponent},
  {path: 'editar/:id', component: EditComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'addcategoria', component: FormCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [FormComponent, ListComponent, CategoriaComponent]
