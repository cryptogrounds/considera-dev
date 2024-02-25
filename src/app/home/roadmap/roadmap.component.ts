import { Component } from '@angular/core';
import {ProjectCardComponent} from "../projects/project-card/project-card.component";
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {BadgeComponent} from "../../badge/badge.component";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [
    ProjectCardComponent,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanel,
    BadgeComponent,
    MatCheckbox
  ],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {

}
