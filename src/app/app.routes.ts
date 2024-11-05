import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TstudentComponent } from './tstudent/tstudent.component';

export const routes: Routes = [
    { path: 'media', component: MediaComponent },
    { path: 'stddev', component: StddevComponent },
    { path: 'correlation', component: CorrelationComponent },
    { path: 'linear-regression', component: LinearRegressionComponent },
    { path: 'simpson', component: SimpsonComponent },
    { path: 'tstudent', component: TstudentComponent },
];