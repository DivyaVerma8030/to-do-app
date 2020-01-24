import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  task:string;
  description:string;
  tasks=[];
  index:number=0;
  temp:boolean=true;
  count:number=-1;
  top1=[];
  addTask(){
    /*if(this.task==="" || this.description===""){
      this.temp=false;
    }*/
    //else{
      //this.count++;
      //this.top1.push(90+100*this.count);
      //this.temp=true;
    this.tasks.push({
      name:this.task,
      desc:this.description
    });}
  //}
  getTop(){
    this.count++;
    return 90+100*this.count;
  }
}