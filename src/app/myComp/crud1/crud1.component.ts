import { Component } from '@angular/core';
import { SerCService } from './ser-c.service';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component {

  constructor(private app:SerCService){}
  count:any = ["India","Amerika","UAE","Japan","China"];

  submitfun(data:any){
    console.log(data);
    this.app.post_fun(data).subscribe((res:any)=>{console.log(res)});
    this.getData();
  }
  
  getData(){
    this.app.get_fun().subscribe((res:any)=>{console.log(res); this.frm_data=res})
  }

  public showflag:boolean=false;
  public frm_data:any = '';
  public f_name:any = '';
  public Email:any = '';
  public countryM:any = '';
  public Gender:any = '';
  public idd:any = '';
  

  deleteFun(id:any){
    this.app.delete_fun(id).subscribe((res:any)=>{console.log(res)});
    this.getData();
  }
  updateFun(data:any){
    this.f_name =  data.name;
    this.Email =  data.email;
    this.countryM =  data.country;
    this.Gender =  data.gender;
    this.idd =  data.id;
    console.log(this.idd);
    this.showflag=true;
    
  }

  Updatebtn(data:any){
    this.app.update_fun(this.idd,data).subscribe((res:any)=>{console.log(res)});
    this.getData();
  }
}
