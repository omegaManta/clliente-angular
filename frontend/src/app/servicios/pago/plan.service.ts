import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Plan } from 'src/app/interfaces/pago/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  API: String = 'http://localhost:1000'

  constructor(private http: HttpClient) { }
  

  verplan(idplan: number): Observable<Plan>{
    return this.http.get<Plan>(this.API + '/plan/' +idplan)
    }
  



}
