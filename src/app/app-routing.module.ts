import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchingComponent } from './matching/matching.component';
import { ModelFileComponent } from './model-file/model-file.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', 
    component: RegisterComponent 
  },
  { path: 'home', 
  component: HomeComponent 
},
{ path: 'import', 
component: ModelFileComponent
},
{ path: 'matching/:filename', 
component: MatchingComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
