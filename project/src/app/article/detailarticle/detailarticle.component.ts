import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-detailarticle',
  templateUrl: './detailarticle.component.html',
  styleUrls: ['./detailarticle.component.css']
})
export class DetailarticleComponent implements OnInit {
  conversationform: FormGroup;
  commentsarr:any;
  post:any
  constructor(private _formBuilder: FormBuilder,
    private snackBar: MatSnackBarComponent) {
    this.conversationform = this._formBuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Message: ['', [Validators.required]],


    });
  }

  ngOnInit(): void {
    
   this.commentsarr=JSON.parse(localStorage.getItem('comments')as any);
   if(!this.commentsarr)
   {
    this.commentsarr=[];
   }
     this.post = JSON.parse(localStorage.getItem('post')as any);;

  }
  conversation() {
    this.commentsarr.push(this.conversationform.value);
    localStorage.setItem('comments',JSON.stringify(this.commentsarr));
    this.snackBar.openSnackBar("successfully send", 'Close', 'green-snackbar');
    this.conversationform.reset();
  }
}

