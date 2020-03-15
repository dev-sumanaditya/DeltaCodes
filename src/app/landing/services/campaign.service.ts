import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CampaignData {
  name: string;
  email: string;
  contact: string;
  country: string;
  position: string;
  projectName: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private _http: HttpClient) {}

  public submitData(data: CampaignData) {
    this._http.post<any>('https://deltacodes-backend.herokuapp.com/users', data).subscribe({
      next: dat =>  console.log(dat),
      error: error => {
        console.error('Error occurred!', error);
      }
    });
  }
}
