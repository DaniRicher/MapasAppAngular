import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaXJpY2hlciIsImEiOiJjbDJqb2dpbDAwMmg3M2lxbHFra2wzdnJqIn0.MhFXDmWCVFFCAoc9qH5N2w';


if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalización');
  throw new Error('Navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
