
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private service:PaymentDetailService) { }

  ngOnInit()  {
    
  
    this.service.refreshList();
  }
  onDelete(PMId) {
  if (confirm('Are you sure to delete this record ?')) {
    this.service.deletePaymentDetail(PMId)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => { console.log(err); })
  }
}
}
