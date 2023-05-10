import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerCService {

  constructor(private htt:HttpClient) { }
  public url:any="http://localhost:3000/data";

  get_fun(){
    return this.htt.get(this.url);
  }

  post_fun(data:any){
    return this.htt.post(this.url,data);
  }
  delete_fun(idd:any){
    return this.htt.delete("http://localhost:3000/data/"+ idd);
  }
  
  update_fun(idd:any,data:any){
    return this.htt.put("http://localhost:3000/data/"+ idd,data);
  }

}
