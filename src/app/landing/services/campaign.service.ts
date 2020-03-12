import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CampaignData {
  name: string;
  email: string;
  contact: string;
  country: string;
  pos: string;
  projjectName: string;
  des: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private _http: HttpClient) {}

  public submitData(data: CampaignData) {
    this._http.post<any>('url', data).subscribe({
      next: dat =>  console.log(dat),
      error: error => {
        console.error('Error occurred!', error);
      }
    });
  }
}
