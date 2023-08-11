import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  ngOnInit(): void {
    console.log(
      'newAngularApp mounting'
      // (window as any).singleSpa.getAppStatus('newAngularApp')
    );
  }
  ngOnDestroy(): void {
    console.log(
      'newAngularApp unmounting'
      // (window as any).singleSpa.getAppStatus('newAngularApp')
    );
  }
}
