import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportData, UsersList } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://office-of-the-extension-services.000webhostapp.com/apiConnection";
  reportData!: ReportData[];
  userData!: UsersList[];

  constructor(
    private httpClient:HttpClient
  ) { }

  validateCredentials(credentials:any){
    return this.httpClient.get(this.baseUrl + '/checkCredentials.php?info='+ credentials);
  }
  toLogin(credentials:any){
    return this.httpClient.post(this.baseUrl + '/login.php', credentials);
  }
  viewUsersList(){
    return this.httpClient.get<UsersList[]>(this.baseUrl + '/getUsers.php');
  }
  
  viewReport() {
    return this.httpClient.get<ReportData[]>(this.baseUrl + '/viewReport.php');
  }

  getParticularLength(){
    return this.httpClient.get(this.baseUrl + '/viewActualReport.php');
  }

  getDataByParticularId(particular_id:number){
    return this.httpClient.get(this.baseUrl + '/viewActualReport.php?id=' + particular_id);
    // .subscribe((response:any) => {
    //   console.log(response);
    // });
  }

  addReport(data:any): Observable <ReportData[]>{
    return this.httpClient.post<ReportData[]>(this.baseUrl + '/insertReport.php', data);
  }

  deleteReport(id:any) {
    return this.httpClient.delete(this.baseUrl + '/delete.php?id='+ id);  
  }

  getIndicators(){
    return this.httpClient.get(this.baseUrl + '/getIndicators.php');
  }
}
