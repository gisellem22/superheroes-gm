import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Heroes } from '../models/heroes';

@Injectable()
export class SuperheroesService {

  url: string = "/api/"
  key: string = "3483480741725426";
  heroes: any;

  
  constructor(private http: HttpClient) { }

  getHeroesById(id): Observable<any> {
    return this.http.get<any>(this.url +this.key +"/"+id)
  }
  getHeroesImg(id): Observable<any> {
    return this.http.get<any>(this.url +this.key +"/"+id+"/image")    
  }

}