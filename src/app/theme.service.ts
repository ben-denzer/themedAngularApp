import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const THEME_LOCAL_STORAGE_KEY = 'editorTheme';

export type ThemeType = 'LIGHT' | 'DARK';

export class ThemeService {
  public theme = new BehaviorSubject<ThemeType>('LIGHT');

  constructor() {
    const savedTheme = window.localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    if (savedTheme && (savedTheme === 'DARK' || savedTheme === 'LIGHT')) {
      this.theme.next(savedTheme);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.theme.getValue();
    const nextTheme = currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT';
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, nextTheme);
    this.theme.next(nextTheme);
  }
}
