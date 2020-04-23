import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Directive } from '@angular/core';

@Directive({
    selector:'[appConfirmValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:confirmValidator,
        multi:true
    }]
})
export class confirmValidator implements Validator
{
    @Input() appConfirmValidator:string;
    validate(control:AbstractControl): {[key:string]:any} |null {
        const ControlToCompare=control.parent.get(this.appConfirmValidator);
        if(ControlToCompare && ControlToCompare.value!==control.value){
            return {'NOtEqual': true};
        }
        return null;
    }
}