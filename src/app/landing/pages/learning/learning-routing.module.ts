import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './components/reader/reader.component';


const routes: Routes = [
  {path: '',  component: HomeComponent, children: [
    {path: 'reader/:id', component: ReaderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
