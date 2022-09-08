import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    ///// Put your logic here
result;
num1;
num2;

        handleChange(evt){
            console.log('event'+evt);
            if(evt.target.name=='Num1'){
                this.num1=parseInt(evt.target.value);
            }else{
                this.num2=parseInt(evt.target.value);
            }
        }

        handleClick(event){
            var name = event.target.name;
            console.log(' event.target.name'+ event.target.name);
           
            switch(name){
                case '+':
                    this.result = this.num1+this.num2;
                    break;
                case '-':
                    this.result = this.num1 - this.num2;
                     break;
                case '*':
                    this.result = this.num1 * this.num2;
                      break;
                case '/':
                    this.result = this.num1 / this.num2;
                      break;
            }
        }
}