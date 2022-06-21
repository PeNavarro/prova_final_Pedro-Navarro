import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car'

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  cars: Car[] = []

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void{
    this.carsService.getCars().subscribe(cars => this.cars = cars);
  }

}
