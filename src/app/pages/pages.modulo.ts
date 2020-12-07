
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
// Importancion Modulos
import { SharedModule } from '../shared/shared.module';

// Importacion Modulos propios de Angular
import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Importacion Componentes
import { PagesComponent } from './pages.component';
// Importacion Interna
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
// Importacion Externa
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoCircularComponent } from '../components/grafico-circular/grafico-circular.component';





@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent,
      IncrementadorComponent,
      GraficoCircularComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModulo { }
