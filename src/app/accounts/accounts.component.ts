import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountHistoryDTO, OperationDTO } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountFormGroup! : FormGroup;
  accountObservable! : Observable<AccountHistoryDTO>;
  curentPage: number=0;
  pageSize : number=5;

  constructor(private fb: FormBuilder,private servieAccount: AccountService) { }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control(null),
    });
  }

  handleSeachAccount(){
    let account = this.accountFormGroup.value.accountId;

    this.accountObservable=this.servieAccount.getHistoryOpers(account,this.curentPage,this.pageSize);

  }

}
