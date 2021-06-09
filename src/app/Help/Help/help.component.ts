import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-Help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  warn:boolean=true;
  alert:boolean=false;

  constructor(private customerService: CustomerService)
  {}

  ngOnInit(){}

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.alert=true;
    this.warn=false;

  }
  closeAlert(){
    this.alert=true;
  }




}

 // let pdfName = 'tax_report';
  //var doc = new jsPDF();
  //doc.text("Hello World", 10, 10);
  //doc.save(pdfName + '.pdf');



