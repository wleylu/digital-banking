import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccounDetails } from '../models/account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getHistoryOpers(account: String, page: number, size: number) : Observable<AccounDetails>{

    return this.http.get<AccounDetails>(environment.backAccount+"/accounts/"+account+"/accoounthistory?page="+page+"&size="+size);

  }


}
