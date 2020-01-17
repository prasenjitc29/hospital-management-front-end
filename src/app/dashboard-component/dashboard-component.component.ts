import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({

  });
  f: NgForm;
  headersArry=["First","Second","Third","Fourth"];
  formArray = [
    {"rowHeader":"Row1","rowArry":[{"id":1,"name":"Abc"},{"id":2,"name":"def"},{"id":3,"name":"xyz"}]},
    {"rowHeader":"Row2","rowArry":[{"id":1,"name":"Abc"},{"id":2,"name":"def"},{"id":3,"name":"xyz"}]},
    {"rowHeader":"Row3","rowArry":[{"id":1,"name":"Abc"},{"id":2,"name":"def"},{"id":3,"name":"xyz"}]}
  ];
  constructor(private _fb: FormBuilder) { 
    // this.form = _fb.group({});
    // this.formArray.forEach(question => {
    //   this.form.addControl(question.rowHeader, _fb.control(null, Validators.required));
    // })
  }

  ngOnInit() {
  }

  submitForm(f){
console.log(f.form.value);
  }

}
