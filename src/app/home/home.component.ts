import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatGridList, MatGridTile, MatGridTileHeaderCssMatStyler} from "@angular/material/grid-list";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {ProjectsComponent} from "./projects/projects.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    MatDivider,
    MatGridList,
    MatGridTile,
    MatGridTileHeaderCssMatStyler,
    MatToolbar,
    RouterOutlet,
    HeaderComponent,
    ProjectsComponent,
    RoadmapComponent,
    MatIcon,
    MatIconButton,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
