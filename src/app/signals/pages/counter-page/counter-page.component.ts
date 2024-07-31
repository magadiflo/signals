import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: ``,
})
export default class CounterPageComponent {
  public counter = signal<number>(10);
  public squareCounter = computed<number>(
    () => this.counter() * this.counter()
  );

  public increaseOrDecreaseBy(value: number) {
    this.counter.update((currentValue) => currentValue + value);
  }

  public resetCounter() {
    this.counter.set(0);
  }
}
