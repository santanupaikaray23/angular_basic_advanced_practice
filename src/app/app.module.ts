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
