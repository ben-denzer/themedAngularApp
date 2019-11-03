import { Component } from '@angular/core';
import { ThemeService, ThemeType } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private theme: ThemeType = 'LIGHT';
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme.subscribe((theme: ThemeType) => {
      this.theme = theme;
    });
  }
}
