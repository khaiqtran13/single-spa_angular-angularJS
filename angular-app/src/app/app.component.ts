import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  ngOnInit(): void {
    console.log(
      'angularSidebar mounting'
      // (window as any).singleSpa.getAppStatus('angularSidebar')
    );
  }
  ngOnDestroy(): void {
    console.log(
      'angularSidebar unmounting'
      // (window as any).singleSpa.getAppStatus('angularSidebar')
    );
  }
}
