import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [AppComponent, LeftPanelComponent, RightPanelComponent, CenterPanelComponent, TopBarComponent],
  imports: [BrowserModule],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
