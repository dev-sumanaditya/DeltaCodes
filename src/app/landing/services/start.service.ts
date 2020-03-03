import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private _http: HttpClient) { }

  private data = {
    type: 'Null',
    product: 'Null',
    estSize: 'Null',
    jobType: 'NUll',
    individual: false,
    name: 'Null',
    email: 'Null',
    cName: 'Null',
    contact: 'Null',
    query: 'Null'
  }

  public setSegment(val: string) {
    this.data.type = val;
  }
  public setType(val: string) {
    this.data.product = val;
  }
  public setSize(val: string) {
    this.data.estSize = val;
  }
  public setScope(val: string) {
    this.data.jobType = val
  }
  public setIndividual(val: boolean) {
    this.data.individual = val;
  }
  public setInfo(info: any) {
    this.data.name = info.name;
    this.data.email = info.email;
    // if(this.data.cName) {
      this.data.cName = '';
    // }
    this.data.contact = info.contact;
    this.data.query = info.query;
  }

  public async submitData() {
    this._http.post<any>('https://deltacodes-backend.herokuapp.com/client', this.data).subscribe({
      next: data =>  console.log(data),
      error: error => {
        console.error('Error occurred!', error);
      }
    });
  }
}
