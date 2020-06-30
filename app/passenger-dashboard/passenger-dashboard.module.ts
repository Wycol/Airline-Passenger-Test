import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
//container
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
//Componentes
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
//Services
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboardComponent},
            { path: ':id', component: PassengerViewerComponent}
        ]
    }
]
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,

        PassengerFormComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule, 
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)

    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {
}