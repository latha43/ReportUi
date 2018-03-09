import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
    private _url: string = "http://localhost:6065/";
    constructor(private _http: Http) { }

    getData(name: string) {
        return this._http.get(this._url+'/name/'+name)
            .map((res)=>res.json());
    }
}