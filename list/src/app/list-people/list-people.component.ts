import { Component, OnInit } from '@angular/core';
import { ChangeePeopleComponent } from '../changee-people/changee-people.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface People {
  surname: string;
  name: string;
  patronymic: string;
  position: number;
}
const People: People[] = [
  {
    position: 1,
    surname: 'Усач',
    name: 'Евгений',
    patronymic: 'Петрович',
  },
  {
    position: 2,
    surname: 'Иванова',
    name: 'Виктория',
    patronymic: 'Викторовна',
  },
  {
    position: 3,
    surname: 'Сатырёв',
    name: 'Игорь',
    patronymic: 'Сергеевич',
    },
  {
    position: 4,
    surname: 'Гриб',
    name: 'Валерия',
    patronymic: 'Андреевна',
    },
  {
    position: 5,
    surname: 'Усач',
    name: 'Анатолий',
    patronymic: 'Викторович',
    },
];
@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  [x: string]: any;
  displayedColumns: string[] = [
    'position',
    'surname',
    'name',
    'patronymic',
    'options',
  ];
  dataSource = new MatTableDataSource<People>(People);

  constructor(public dialog: MatDialog) {}
 
  openDialogPeople() {
    const dialogRef = this.dialog.open(ChangeePeopleComponent);
    /*   this.dialog.open(WindowCreateUsersComponent);*/
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    /* let dialogRef1 = this.dialog.open(WindowCreateUsersComponent, {
      data: { username: 'austin' },
    });*/
  }
  changePeople(item) {
    const dialogRef = this.dialog.open(ChangeePeopleComponent, {
      data: { item },
    });
  }

  removePeople(element) {
    this.dataSource.data.splice(People.indexOf(element), 1);
    this.dataSource = new MatTableDataSource<People>(this.dataSource.data);
  }

  ngOnInit(): void {
  }

}
