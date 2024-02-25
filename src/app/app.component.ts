import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatGridList, MatGridTile, MatGridTileHeaderCssMatStyler} from "@angular/material/grid-list";
import {HomeComponent} from "./home/home.component";
import {MatIconRegistry} from "@angular/material/icon";
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';

@Component({
  imports: [
    NgxGoogleAnalyticsModule,
    NgxGoogleAnalyticsRouterModule,
    RouterOutlet,
    MatToolbar,
    MatCard,
    MatCardImage, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCardContent, MatDivider, MatCardActions, MatButton, MatGridList, MatGridTile, MatGridTileHeaderCssMatStyler, HomeComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'considera-dev';

  constructor(private _matIconRegistry: MatIconRegistry) {
    NgxGoogleAnalyticsModule.forRoot('G-HJS5QC16FG')
    //_matIconRegistry.addSvgIcon("download2", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");
  }
}
