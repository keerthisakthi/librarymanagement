import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  constructor() {}

  authenticateUser() {
    const userDetails = localStorage.getItem('authentication');
    //   if(JSON.parse(userDetails))
    //   console.log(userDetails)
    // }
  }
}
