import { Injectable } from '@angular/core';
import { RestManager } from './managers/RestManager';
import { HttpClient } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import {Observable, Subscriber} from "rxjs/dist/types";
import {
  ADDRESS_AUTHENTICATION_SERVER,
  ADDRESS_STORE_SERVER, CLIENT_ID, CLIENT_SECRET,
  REQUEST_LOGIN,
  REQUEST_SEARCH_PRODUCTS
} from './support/Constants';



@Injectable({
  providedIn: 'root'
})
export class ModelService {
  restManager: RestManager;
  //jwtDecoder = new JwtHelperService();


  constructor(http: HttpClient) {
    this.restManager = new RestManager(http);
  }

  searchProduct(name: string, callback: any) {
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER, REQUEST_SEARCH_PRODUCTS, {name: name}, callback);
  }
/*
  logIn = new Observable((observer: Subscriber, email: string, password: string) => {
    this.restManager.makePostRequest(ADDRESS_AUTHENTICATION_SERVER,
                                     REQUEST_LOGIN,
                                    {grant_type: "password", client_id: CLIENT_ID, client_secret: CLIENT_SECRET, username: email, password: password},
                                    (error: boolean, response: string) : void => {
                                      if ( error ) {
                                        observer.error(response);
                                      }
                                      else {
                                        var parsedResponse = JSON.parse(response);
                                        localStorage.setItem("token", parsedResponse.access_token);
                                        let decodedToken = this.jwtDecoder.decodeToken(parsedResponse.access_token);
                                        observer.next(decodedToken);
                                        setInterval(() => {
                                          this.restManager.makePostRequest(
                                            ADDRESS_AUTHENTICATION_SERVER,
                                            REQUEST_LOGIN,
                                            {grant_type: "refresh_token", client_id: CLIENT_ID, client_secret: CLIENT_SECRET, refresh_token: parsedResponse.refresh_token},
                                            (error: boolean, response: string) : void => {
                                              if ( error ) {
                                                console.log("error");
                                              }
                                              else {
                                                var parsedResponse = JSON.parse(response);
                                                localStorage.setItem("token", parsedResponse.access_token);
                                                let decodedToken = this.jwtDecoder.decodeToken(response);
                                              }
                                            });
                                        }, 500*1000); // mettere intelligentemente quando effettivamente scade il token, o meglio ancora lo aggiorniamo in automatico quando è necessario nell'AuthInterceptor
                                      }
                                    });
  });
*/
}
