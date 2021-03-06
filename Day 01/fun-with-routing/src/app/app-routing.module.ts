import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  { path: 'artists', loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // change 3

 }
