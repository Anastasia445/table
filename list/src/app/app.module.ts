import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPeopleComponent } from './list-people/list-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { ChangeePeopleComponent } from './changee-people/changee-people.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    DeletePeopleComponent,
    ChangeePeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
