import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, pipe } from 'rxjs';
import { filter, map, mergeMap, delay, switchMap } from 'rxjs/operators';

import { User } from '../model/user';

const API_URL = 'https://96f0s5uple.execute-api.ap-southeast-2.amazonaws.com/Dev/user';

@Injectable()
export class UserDomainService {
  addEvent = false;
  deleteEvent = false;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL).pipe(
      map((users: Array<string>) => {
        const userMap: User[] = [];
        users && users.forEach((user) => {
          userMap.push({
            firstName: user['au_first_name'],
            lastName: user['au_last_name'],
            email: user['au_email'],
            gender: user['au_gender'],
            id: user['id']
          });
        });
        return userMap;
      }));
  }

  deleteUser(userEmail: string) {
    return this.http.delete(API_URL,
      {
        params: {
          'email': userEmail
        }
      });
  }

  saveUser(user: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }

}
