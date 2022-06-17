import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //customers: any;
  customers!: Observable<Array<Customer>>;
  errorMessage!: object;
  customerSearchGroup!:FormGroup;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerSearchGroup=this.fb.group({
         keyword: this.fb.control(""),
      });

   this.handleSearch();
  }

  getClients(){
    this.customerService.getCustomers().subscribe ({
      next: (data:any) => {
        this.customers=data;
      },
      error:erreur => {
        this.errorMessage=erreur.message;

      }
    }

    );
  }

  handleGetclient(){
    this.customers=this.customerService.getCustomers().pipe(
      catchError( err=> {
        this.errorMessage=err.message;
        return throwError (()=> (err));
      })
    );
  }

  handleSearch(){
    let keword = this.customerSearchGroup.value.keyword;
    this.customers= this.customerService.searchCustomers(keword).pipe(
      catchError( err=> {
        this.errorMessage=err.message;
        return throwError (()=> (err));
      })
    );
  }

  handleDeleteCustomer(customer: Customer){
    this.customerService.deleteCustomer(customer.id).subscribe({
      next: (data:any)=>{
        this.handleSearch();
      },
      error:erreur=>{
        console.log("Suppression impossible");
      }
     });
  }

  handleDeleteCus(customer: Customer){
    this.customerService.deleteCustomer(customer.id).subscribe({
      next: (resp:any)=>{
        this.customers = this.customers.pipe(
          map (data => {
            let index= data.indexOf(customer);
            data.slice(index,1);
            return data;
          })
          );
       this.handleSearch();
      },
      error:erreur=>{
        console.log("Suppression impossible");
      }
     });
  }

}
