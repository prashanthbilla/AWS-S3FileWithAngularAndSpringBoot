import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FileAngular-1';

  constructor(private service: FileUploadService){}

  calling(){
    this.service.calling()
    .subscribe(res=>{
      console.log(res);
    });
  }

  selectedFile !: File ;
  response !: any;

  filenameForDelete!: any;
  filenameForDownload!: any;

  onFileSelected(event: any){
    this.selectedFile=<File> event.target.files[0];
       console.log(event);
  }

  upload(){
    const fd=new FormData();
    fd.append('file',this.selectedFile, this.selectedFile.name);
    this.service.upload(fd)
    .subscribe(res=>{
      this.response=res;
      console.log(this.response);
    });

  }

  download(){
    //this.http.get('http://localhost:9090/file/download/'+this.filename)
    //.subscribe(res=>{
      //this.response=res;
      //console.log(this.response);
   // });

   window.location.href='http://localhost:9090/file/download/'+this.filenameForDownload;
   this.response='File downloaded successfully';
   this.filenameForDownload=null;
   

  }

  delete(){

    this.service.delete(this.filenameForDelete)
    .subscribe(res=>{
      this.response=res;
      console.log(this.response);
      this.filenameForDelete=null;
    });

  }
}
