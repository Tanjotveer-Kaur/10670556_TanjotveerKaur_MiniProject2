import { Component, OnInit } from '@angular/core';

import {Contact} from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact;
  contacts:Contact[];
  d:string;
  isShow:boolean;
  isShow1:boolean;
  isShow2:boolean;

  

  constructor() {
    this.isShow=false;
    this.isShow1=false;
    this.isShow2=false;
    this.contacts=[];
    this.contact=new Contact();

    var c1,c2,c3,c4;
    c1=new Contact();
    c2=new Contact();
    c3=new Contact();
    c4=new Contact();


    
    c1.fname="Eric"
    c1.lname="Elliot";
    c1.phone="222-333-5674";

    c2.fname="Steve"
    c2.lname="Jobs";
    c2.phone="220-454-6754";

    c3.fname="Fred"
    c3.lname="Allen";
    c3.phone="343-878-8766";

    c4.fname="Steve"
    c4.lname="Wozniak";
    c4.phone="567-786-3456";

    this.contacts.push(c1);
    this.contacts.push(c2);
    this.contacts.push(c3);
    this.contacts.push(c4);
   
   }

  ngOnInit(): void {
    
  }
display()
  {
    this.isShow=!this.isShow;
    
  }
  createContact(n1:string, n2:string,p:string)
  {
    console.log(n1);
    
    for(let i=0;i<this.contacts.length;i++)
    {
        this.contact= new Contact();
        this.contact.fname=n1;
        this.contact.lname=n2;
        this.contact.phone=p;
        this.contacts.push(this.contact);
      

    }
  }

  deleteContact(p:string)
  {
    this.contacts=this.contacts.filter(c=>c.phone!=p);


  }
  updateContact(n1:string,n2:string,p:string)
  {
    this.isShow2=!this.isShow2;
    
    for(let i=0;i<this.contacts.length;i++)
    {
      if(this.contacts[i].fname==n1 && this.contacts[i].lname==n2)
      {
        this.contacts[i].phone=p;

      }
    }


  }
 searchByLastName(l:string)
 {
  this.isShow1=!this.isShow1;
   this.contact=new Contact();

   this.contact=this.contacts.find(c=>c.lname==l);
 }
 sortDesc()
 {
  
   this.contacts.sort((a, b) => (a.lname < b.lname) ? 1 : -1);

 }
  
}

