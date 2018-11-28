import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPanelComponent } from './chart-panel/chart-panel.component';

const routes = [
	{path: 'bar-chart', component: ChartPanelComponent},
	{path: '**', component: ChartPanelComponent}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}