import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  editorForm: FormGroup;

  editorContent: string;

  show: boolean = true;

  editorStyle ={
    height: '300px'
  }

  ngOnInit(){
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
    this.show = false;
  }

}
