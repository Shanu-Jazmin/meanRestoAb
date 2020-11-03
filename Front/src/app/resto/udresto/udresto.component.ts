import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';
import { Resto } from '../model/resto';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-udresto',
  templateUrl: './udresto.component.html',
  styleUrls: ['./udresto.component.css']
})
export class UDRestoComponent implements OnInit {

  resto$:Observable<Resto[]>
  public hidenew:boolean=true
  public showForm:boolean
  restaurant$:Observable<Resto>
  id:any

  restoForm=new FormGroup({
    user:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  restoform=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    add:new FormControl("",[Validators.required])
  })

  formupdate=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    add:new FormControl("",[Validators.required])
  })



  constructor(private restoService:RestoService, private router:Router,public userService:UserService) { }

  ngOnInit(): void {
    this.resto$=this.restoService.getResto()
    console.warn("Server Working")
  }

  newResto(){
    if(this.restoform.valid){
      this.restoService.addResto(this.restoform.value).subscribe(res=>{
        this.restoform.reset()
        this.router.navigate(["/resto"])
      })
    }
  }
    newform()
   {
     this.hidenew=false
   }
   saveIdshowEdit(id){
     this.showForm=!this.showForm
     this.id=id
     this.restaurant$=this.restoService.getSingleResto(this.id)
   }
   updateResto(){
    if(this.formupdate.valid){
      this.restoService.editResto(this.formupdate.value,this.id).subscribe(res=>{
        this.formupdate.reset()
        this.router.navigate(["/restos"])
        window.location.reload()
      })
    }
   }
   deleteResto(id){
    this.restoService.deleteResto(id).subscribe(res=>{
      console.log(res)
      window.location.reload()
   })
  }

}
