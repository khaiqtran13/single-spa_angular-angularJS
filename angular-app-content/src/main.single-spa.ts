import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      AppModule
    );
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

let ngModule: any;

let isAppBootstrapped = false;

export const mount = async (props: any) => {
  const containerEl = document.getElementById('angular-content');
  if (!isAppBootstrapped) {
    const appRootElem = document.createElement('app-root');
    if (containerEl) containerEl.appendChild(appRootElem);

    ngModule = await platformBrowserDynamic(
      getSingleSpaExtraProviders()
    ).bootstrapModule(AppModule);
    isAppBootstrapped = true;
  }
  if (containerEl) containerEl.style.display = 'block'; // reveal the app
};

export const unmount = (props: any) => {
  return new Promise((resolve, reject) => {
    const containerEl = document.getElementById('angular-content');
    if (containerEl) {
      containerEl.style.display = 'none'; // hide the app
      resolve(containerEl);
    } else {
      reject(new Error('Cannot find Angular app container'));
    }
  });
};

export const bootstrap = lifecycles.bootstrap;

// default lifecycle

// export const mount = lifecycles.mount;
// export const unmount = lifecycles.unmount;
