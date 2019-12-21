import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginModel = new Login("Enter User Name", "Enter password");
  infoForm = new FormGroup({
    name  : new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  infoForm1 : any;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    // this.name.setValue("Suman");
    this.infoForm1 = this.fb.group({
      firstName : [''],
      lastName :[],
      addr : this.fb.group({
        street : ['Beltali', Validators.required],
        pinCode : [888]
      }),
      aliases : this.fb.array([
          this.fb.control('')
      ])
    }
    );
  }
  info(){
    console.log(this.infoForm.value);
  }
  login(loginForm : NgForm){
    this.loginModel = loginForm.value;
    console.log(loginForm.value);
    
  }

  get diagnostic() { return JSON.stringify(this.loginModel); }
  
  get aliases() {
    return this.infoForm1.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  deleteAlias(id){
    this.aliases.removeAt(this.aliases.value.findIndex(i => i.id === id));
  }
}
