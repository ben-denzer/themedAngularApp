import { Component, OnInit } from '@angular/core';
import { ThemeService, ThemeType } from '../theme.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  private theme: ThemeType = 'LIGHT';
  constructor(private themeService: ThemeService) {}

  changeTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnInit() {
    this.themeService.theme.subscribe((theme: ThemeType) => {
      this.theme = theme;
    });
  }
}
