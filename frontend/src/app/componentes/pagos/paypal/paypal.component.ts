import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from 'src/app/interfaces/pago/plan';
import { PlanService } from 'src/app/servicios/pago/plan.service';

declare var paypal;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
@ViewChild('paypal',{static:true}) paypalElement : ElementRef;
plan: Plan = {
  descripcion: '',
  valor: 0
};
constructor(private planservicio: PlanService, private active: ActivatedRoute){}


ngOnInit(): void {
    const params = this.active.snapshot.params
    if(params){
      this.planservicio.verplan(params['idplan']).subscribe(
        res=>{
          this.plan = res[0]
        }
      )
    }
    paypal.Buttons(
      {
        style: {
          size: 'small', 
          color: 'gold', 
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.plan.descripcion,
                amount: {
                  currency_code: 'USD',
                  value: this.plan.valor
                }
              }
            ]
          })
        },
        onApprove: async(data,actions)=>{
          const order = await actions.order.capture();
          console.log(order)
        },
        onError: err =>{
          console.log(err)
        }
      }).
    render(this.paypalElement.nativeElement);
}


}
