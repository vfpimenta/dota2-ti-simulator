import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'draft', pathMatch: 'full' },
	{
		path: 'draft',
		loadComponent: () => import('../lib/components/draft/draft.component').then(m => m.DraftComponent)
	},
	{
		path: 'simulator',
		loadComponent: () => import('../lib/components/simulator/simulator.component').then(m => m.SimulatorComponent)
	}
];
