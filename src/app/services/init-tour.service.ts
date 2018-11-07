import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-md-menu';

@Injectable()
export class InitTourService {
  constructor(private tourService: TourService) {}

  initialise() {
    this.tourService.initialize([
      {
        anchorId: 'dashboard.field.selection',
        content: 'In order to view specific details select your field from the selection box',
        title: 'Field Selection'
      },
      {
        anchorId: 'dashboard.map.tools',
        content:
          'This menu contains various map tools, some are only available when a field has been selected in the previous step',
        title: 'Map Tools'
      },
      {
        anchorId: 'dashboard.map.search',
        content:
          'Locate positions on the map either by LAT/LONG coordinates or by drilling down into specific regions',
        title: 'Map Search'
      },
      {
        anchorId: 'dashboard.map.report',
        content:
          'Press this button to produce a report in PDF format on the currently selected field',
        title: 'Field Report'
      },
      {
        anchorId: 'dashboard.map.aggregategraph',
        content:
          'Press this button to view an Aggregate VHI graph based on the selected field. This button will only be enabled once the VHI layer has been selected from the Layers section of Map Tools.',
        title: 'Field Aggregate Graph'
      },
      {
        anchorId: 'dashboard.map.positiongraph',
        content:
          'Press this button to view a VHI graph based on a particular Location within the selected field. The first selection of this button will enable the position selection on the map, after choosing the location within your field the graph will be generated. This button will only be enabled once the VHI layer has been selected from the Layers section of Map Tools.',
        title: 'Field Position Graph'
      },
      {
        anchorId: 'dashboard.map.products',
        content:
          'Press this button to carry out activities on more than one Product.',
        title: 'Compare Products'
      }
    ]);
  }

  start() {
    this.tourService.start();
  }

  end() {
    this.tourService.end();
  }
}
