import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  baseURL= environment.baseURL

  constructor(public http:HttpClient) { }

  upload(data)
  {
    return this.http.post( this.baseURL + '/file/upload',data)
  }

  matching(filename)
  {
    return this.http.get(this.baseURL + '/file/add/'+filename)
  }
  
}
