import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [],
  templateUrl: './properties-page.component.html',
  styles: ``
})
export default class PropertiesPageComponent {

  public onFieldUpdated(field: string, value: string) {
    console.log({field, value});
  }

}
