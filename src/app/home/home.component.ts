import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';  
import html2canvas from 'node_modules/html2canvas/dist/html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild('content', {static: false}) content: ElementRef;

  editorForm: FormGroup;

  editorContent: string;

  show: boolean = true;

  editorStyle ={
    height: '300px',
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

  makePdf() { 
    let doc = new jsPDF();
    let content = this.content.nativeElement;
    doc.addHTML(content, function() {
       doc.save("obrz.pdf");
    });
  }
}
