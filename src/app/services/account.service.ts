import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountHistoryDTO } from '../models/account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getHistoryOpers(account: String, page: number, size: number) : Observable<AccountHistoryDTO>{

    return this.http.get<AccountHistoryDTO>(environment.backAccount+"/accounts/"+account+"/accoounthistory?page="+page+"&size="+size);

  }


}
