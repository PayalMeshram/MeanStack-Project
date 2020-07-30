
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:MainScreenComponent},
    {path:'product-details/:id',component:ProductDetailsComponent},
    {path:'register',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent}
    

];
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}
