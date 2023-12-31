import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { DisplayComponent } from './components/display/display.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { MovieComponent } from './components/movie/movie.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { IndianCurrencyPipe } from './custom-pipes/indian-currency.pipe';
import { CustomerNamePipe } from './custom-pipes/customer-name.pipe';
import { EmployeeNamePipe } from './custom-pipes/employee-name.pipe';
import { EmployeeComponent } from './components/employee/employee.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DisplayComponent,
    HelloWorldComponent,
    WelcomeComponent,
    DataBindingComponent,
    MovieComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PipeComponent,
    IndianCurrencyPipe,
    CustomerNamePipe,
    EmployeeNamePipe,
    EmployeeComponent,
    ParentComponent,
    ChildComponent
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
