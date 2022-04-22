import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }


  calling(){
    return this.http.get('http://localhost:9090/file/list');
  }

  upload( file: any){
    return this.http.post('http://localhost:9090/file/upload',file,{ responseType: 'text' });

  }
  delete(file: any){
    return this.http.delete('http://localhost:9090/file/delete/'+file,{ responseType: 'text' })
  
  }
  download(file: any){

  }
}
