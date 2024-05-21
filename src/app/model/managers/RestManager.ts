import { HttpClient, HttpErrorResponse } from '@angular/common/http';


export class RestManager{
    http: HttpClient;


    constructor(http: HttpClient){
        this.http = http;
    }

    private makeRequest(serverAddress: string, servicePath: string, method: string, body: any, callback: any){
        this.http.request(
            method, 
            serverAddress + servicePath,
            body
        )
        .subscribe({
            next: (response: any) => {
                console.log(response);
                callback(true, response);
            },
            error: (error: HttpErrorResponse) => {
                callback(false, error);
            },
        });
    }

    public makePostRequest(serverAddress: string, servicePath: string, body: any, callback: any){
        return this.makeRequest(serverAddress, servicePath, "post", body, callback)
    }

    public makeGetRequest(serverAddress: string, servicePath: string, body: any, callback: any){
        var requestPath = servicePath + "?";
        for (let key in body) {
            let value = body[key];
            requestPath += key + "=" + value + "&"
        }
        return this.makeRequest(serverAddress, requestPath, "get", body, callback)
    }

    public makePutRequest(serverAddress: string, servicePath: string, body: any, callback: any){
        return this.makeRequest(serverAddress, servicePath, "put", body, callback)
    }

    public makeDeleteRequest(serverAddress: string, servicePath: string, body: any, callback: any){
        return this.makeRequest(serverAddress, servicePath, "delete", body, callback)
    }


}
