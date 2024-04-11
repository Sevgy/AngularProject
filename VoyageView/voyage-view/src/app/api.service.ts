import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/travels';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const payload = { themeName, postText };
    return this.http.post<Theme>(`/api/themes`, payload);
  }
}
