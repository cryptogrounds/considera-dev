import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
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
import {ProjectCardComponent} from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
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
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
