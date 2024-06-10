import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'http://173.230.136.150:8080/';
  private cliente: AxiosInstance;

  constructor(private authService: AuthService) {
    this.cliente = axios.create({
      baseURL: this.BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    this.cliente.interceptors.request.use(
      config => {
        const token = this.authService.getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this.cliente.interceptors.response.use(
      response => response,
      error => {
        console.error('Error en la respuesta', error);
        return Promise.reject(error);
      }
    );
  }

  getData(endpoint: string, params?: any) {
    return this.cliente.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  postData(endpoint: string, data: any) {
    return this.cliente.post(endpoint, data)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  putData(endpoint: string, data: any) {
    return this.cliente.put(endpoint, data)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  deleteData(endpoint: string) {
    return this.cliente.delete(endpoint)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}
