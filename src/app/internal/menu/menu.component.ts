import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TypeService } from '../../services/type.service';
import { Type } from '../../classes/type';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements  OnInit{

  type: Type[] = [];

  constructor(
    private router: Router,
    private typeService: TypeService
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {

    this.typeService.getAll().subscribe(
      data => {
        this.type = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  routeTo(str: String|undefined) {
    this.router.navigate(['tipo/', str])
  }
}
