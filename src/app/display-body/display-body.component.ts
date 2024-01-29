import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-display-body',
  templateUrl: './display-body.component.html',
  styleUrls: ['./display-body.component.sass']
})
export class DisplayBodyComponent implements OnChanges {
  temperatureRotate: number=0;
  minTemperatureRotate: number=0;
  maxTemperatureRotate: number=0;

  @Input() temperature: number=0;
  @Input() minTemperature: number=0;
  @Input() maxTemperature: number=0;

  ngOnChanges():void{
    this.temperatureRotate = this.calcularRotacao(this.temperature);
    this.minTemperatureRotate = this.calcularRotacao(this.minTemperature);
    this.maxTemperatureRotate = this.calcularRotacao(this.maxTemperature);
  }

  calcularRotacao(valor: number): number {
    const minOriginal = -10;
    const minRotacao = 180;
    const incremento = 4.5;

    const diferenca = valor - minOriginal;

    const rotacao = minRotacao - (diferenca * incremento);

    return rotacao;
  }

}
