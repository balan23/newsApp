import { Component, OnInit,Inject ,Output,EventEmitter } from '@angular/core';
import {News} from '../../news';
import {NewsappService} from '../../newsapp.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AuthenticationService} from '../../../authentication/authentication.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'newsapp-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {
news:News;
description:string;


@Output()
updatesNewsDescription =new EventEmitter();

  constructor(public sbar: MatSnackBar,private dialogRef: MatDialogRef<DetailviewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private newsServ: NewsappService,public authService:AuthenticationService, public dialog: MatDialog
  ) {
    this.news=data.obj;
    this.description= data.obj.description;
   }

  ngOnInit() {
  }


  updateNewsDescription(){
    this.updatesNewsDescription.emit(this.news);
  }


  updateComments(){
    console.log(this.description);
    this.news.description= this.description;
    this.dialogRef.close();
    this.newsServ.updateNewsDescription(this.news).subscribe(news=>{
      this.sbar.open("description updated","", {
        duration: 2000,
      });
    })
  }
  // updateWatchListNews(actionType){
  //   // this.updateMovie.emit
  //   console.log('Comment getting updated!!');
  //   let dialogRef= this.dialog.open(MovieDialogComponent, {
  //     width: '400px',
  //     data :{obj: this.news, actionType: actionType}
  //   });
  //   console.log("dialog 1");
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('dialog 2 closed');
  //   });
  //  }

}
