import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private _http: HttpClient) { }

  private data = {
    segment: 'Null',
    type: 'Null',
    size: 'Null',
    scopeOfWork: 'NUll',
    individual: false,
    name: 'Null',
    email: 'Null',
    cName: 'Null',
    contact: 'Null',
    query: 'Null'
  }

  public setSegment(val: string) {
    this.data.segment = val;
  }
  public setType(val: string) {
    this.data.type = val;
  }
  public setSize(val: string) {
    this.data.size = val;
  }
  public setScope(val: string) {
    this.data.scopeOfWork = val
  }
  public setIndividual(val: boolean) {
    this.data.individual = val;
  }
  public setInfo(info: any) {
    this.data.name = info.name;
    this.data.email = info.email;
    this.data.cName = info.cName;
    this.data.contact = info.contact;
    this.data.query = info.query;
  }

  public async submitData() {
    this._http.post('https://deltacodes-backend.herokuapp.com/client', this.data).subscribe({
      next: data =>  console.log(data),
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}
