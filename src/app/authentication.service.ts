import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Mock database
  private users = [
    { userId: '123', password: 'password123' },
    // Add other users as needed
  ];

  constructor() { }

  checkCredentials(userId: string, password: string): boolean {
    const user = this.users.find(u => u.userId === userId && u.password === password);
    return !!user;
  }
}
