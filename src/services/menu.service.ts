import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {
    
    constructor(private http: Http) {

    }
    
    public getMenu = (resto) => {
        return this.http.get(`../assets/₹{resto}.json`)
        .toPromise()
        .then(res => res.json())
        .catch(error => console.log(error));
    }

}