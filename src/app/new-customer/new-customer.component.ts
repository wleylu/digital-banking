import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCutomerFormGroup!: FormGroup;

  constructor(private formG:FormBuilder,private serviceCustomer: CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.newCutomerFormGroup = this.formG.group({
        name: this.formG.control(null,[Validators.required,Validators.minLength(4)]),
        email: this.formG.control(null,[Validators.required,Validators.email]),
    });

  }

  handleSaveCutomer(){
     let client:Customer=this.newCutomerFormGroup.value;
    this.serviceCustomer.saveCustomer(client).subscribe({
       next (data:any) {

        alert("client enregistré avec succès");
       // this.router.navigateUrl("/customer");
       //this.newCutomerFormGroup.reset();

      },
     error:error => {
        console.log("erreur de l'enregistrement");
     }

    });
  }

}
