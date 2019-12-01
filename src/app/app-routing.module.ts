import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { CanActivateIceCreamLinkService } from './services/guards/can-activate-ice-cream-link.service';
import { JsonUserComponent } from './comps/json-user/json-user.component';
import { LoginComponent } from './comps/login/login.component';
import { AmericansComponent } from './comps/americans/americans.component';
import { NativeComponent } from './comps/Americans/native/native.component';
import { BlacksComponent } from './comps/Americans/blacks/blacks.component';
import { ImmigrantsComponent } from './comps/Americans/immigrants/immigrants.component';
import { ReactiveformsComponent } from './comps/reactiveforms/reactiveforms.component';
import { ReactiveFormGroupsComponent } from './comps/reactive-form-groups/reactive-form-groups.component';

const routes: Routes = [
  { path: 'americans',children:[
    { path:'', component:AmericansComponent},
    { path: 'natives', component:NativeComponent},
    { path: 'blacks', component:BlacksComponent},
    { path: 'immigrants', component:ImmigrantsComponent},
  ] },
  { path: 'chocolate', component:ChocolateComponent},
  { path: 'formgroup', component:ReactiveFormGroupsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'ice-cream', component:IceCreamComponent, canActivate:[CanActivateIceCreamLinkService]},
  { path: 'json-user/:id', component:JsonUserComponent},
  { path: 'data-title', component:DataTitleComponent, data:{title:'what is going here!!!!'}},
  { path: 'forms', component:ReactiveformsComponent, },
  { path: '', redirectTo:'/chocolate', pathMatch:'full'},
  { path: '**', redirectTo:'/chocolate', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
