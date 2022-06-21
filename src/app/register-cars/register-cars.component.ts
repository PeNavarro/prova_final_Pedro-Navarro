import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car'

@Component({
  selector: 'app-register-cars',
  templateUrl: './register-cars.component.html',
  styleUrls: ['./register-cars.component.css']
})
export class RegisterCarsComponent implements OnInit {

  cars: Car[] = []

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }

  add(modelo: string, preco: string, ano: string): void {
    modelo = modelo.trim();
    preco = preco.trim();
    ano = ano.trim();

    if (!modelo) { return; }
    this.carsService.addCar({ modelo, preco, ano } as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(h => h !== car);
    this.carsService.deleteCar(car.id).subscribe();
  }
}
