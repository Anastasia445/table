import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ChangeePeopleComponent } from './changee-people/changee-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-people', pathMatch: 'full' },
  { path: 'list-people', component: ListPeopleComponent },
  { path: 'change-people', component: ChangeePeopleComponent },
  { path: 'delete-people', component: DeletePeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
