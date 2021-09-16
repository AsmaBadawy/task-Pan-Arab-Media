import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofarticlesComponent } from './article/listofarticles/listofarticles.component';
import { DetailarticleComponent } from './article/detailarticle/detailarticle.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';

const routes: Routes = [
  {path:'',component:PublicLayoutComponent,
  children:
  [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: 'articles', component: ListofarticlesComponent },
    { path: 'detailarticle', component: DetailarticleComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
