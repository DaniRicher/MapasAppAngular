import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Popup, Marker} from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!:ElementRef

  constructor(private placeServices:PlacesService,
              private mapService:MapService) { }

  ngAfterViewInit(): void {

    if(!this.placeServices.useLocation)throw Error('No hay placeServices.userLocation')
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: this.placeServices.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });

      const popup=new Popup()
        .setHTML(`
          <h6>Aqui Estoy</h6>
          <span>Estoy en este lugar del mundo</span>
        `);

      new Marker({color:'red'})
      .setLngLat(this.placeServices.useLocation)
      .setPopup(popup)
      .addTo(map);

      this.mapService.setMap(map)
  }

}
