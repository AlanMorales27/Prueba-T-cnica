import { Component, signal } from '@angular/core';
import {GoogleMap, MapAdvancedMarker, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {

  //Definición de las opciones del mapa
  protected options = signal<google.maps.MapOptions>({
    center: {lat: 4.7876917, lng: -73.9946441},
    zoom: 10,
  })

  //Arreglo con las posiciones requeridas
  protected locations: google.maps.LatLngLiteral[] = [
    { lat: 4.710989, lng: -74.072090 },
    { lat: 4.699419, lng: -74.136236 },
    { lat: 5.023496, lng: -74.003786 }
  ];
}
