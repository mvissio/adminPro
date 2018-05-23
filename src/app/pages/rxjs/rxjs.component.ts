import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    let obs = new Observable(observaer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        observaer.next(contador);
        contador += 1;
        if (contador === 3) {
          clearInterval(intervalo);
          observaer.complete();
        }
        if (contador === 2) {
          clearInterval(intervalo);
          observaer.error('ERROR');
        }
      }, 1000);
    });

    obs.subscribe(
      number => console.log('Subs', number),
      error => console.log('ERROR en obserbable', error),
      () => console.error('El obserbable termino!')
    );
  }

  ngOnInit() {
  }

}
