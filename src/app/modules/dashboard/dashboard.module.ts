import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from './dashboard.roter';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { AsideComponent } from './components/aside/aside.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouter,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, ContainerComponent, AsideComponent],
  providers: []
})
export class DashboardModule { }
