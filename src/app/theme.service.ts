import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeType = 'LIGHT' | 'DARK';

export class ThemeService {
  public theme = new BehaviorSubject<ThemeType>('LIGHT');

  constructor() {
    const savedTheme = window.localStorage.getItem('editorTheme');
    if (savedTheme && (savedTheme === 'DARK' || savedTheme === 'LIGHT')) {
      this.theme.next(savedTheme);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.theme.getValue();
    this.theme.next(currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT');
  }
}
