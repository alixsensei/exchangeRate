import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../../../../../Desktop/DemoWeb/DemoWeb/src/environments/environment";
import {Observable} from "rxjs";
import {Convert} from "../model/convert.model";

@Injectable({providedIn:"root"})
export class ConvertService {
  constructor(private http:HttpClient) {
  }

  getMoney():Observable<Convert[]> {
    let host = environment.host;
    return this.http.get<Convert[]>(host+"/money")
  }

}
