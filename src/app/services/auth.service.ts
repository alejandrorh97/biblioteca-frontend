import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly TOKEN_KEY = 'authToken';

    constructor() { }

    setToken(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    clearToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    isLogged(): boolean {
        return !!this.getToken();
    }
}