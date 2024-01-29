import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface TemperatureDisplay {
  temperature: FormControl<number>;
  minTemperature: FormControl<number>;
  maxTemperature: FormControl<number>
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent {
  display: FormGroup<TemperatureDisplay> = new FormGroup<TemperatureDisplay>({
    temperature: new FormControl(),
    minTemperature: new FormControl(),
    maxTemperature: new FormControl(),
  });

  constructor(){
    this.display.controls.temperature.setValue(10);
    this.display.controls.minTemperature.setValue(4);
    this.display.controls.maxTemperature.setValue(16);
    this.display.valueChanges.subscribe(() => {})
  }
}
