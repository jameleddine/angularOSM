import { Component,ViewChild } from '@angular/core';
import {SourceRasterComponent} from 'ngx-openlayers';
interface RasterData {
  brightness: number;
  contrast: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public zoom = 15;
  public opacity = 1.0;
  public width = 2;

  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity  = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity  = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }



}
