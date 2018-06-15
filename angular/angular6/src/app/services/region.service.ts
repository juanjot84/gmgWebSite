import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  selectedRegion: Region;
  regiones: Region[];

  readonly URL_API = 'https://aqueous-woodland-46461.herokuapp.com/api/v1/admin/region';
  
  
  constructor(private http: HttpClient) { 
    this.selectedRegion = new Region();

  }

  getRegiones() {
    return this.http.get(this.URL_API);
  }

  postRegion(region: Region) {
    return this.http.post(this.URL_API, region);
  }

  putRegion(region: Region) {
    return this.http.put(this.URL_API + `?id=${region._id}` , region);
  }

  deleteRegion(_id: string) {
    return this.http.delete(this.URL_API + `?id=${_id}`);
  }

}
