import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  getMembers() {
    return this.http.get<any>(`${environment.apiUrl}/members`);
  }

  getMemberById(member_id: any) {
    return this.http.get<any>(`${environment.apiUrl}/members/${member_id}`);
  }

  updateMember(member_id:any, member: any) {
    return this.http.put<any>(`${environment.apiUrl}/members/${member_id}`, member);
  }

  insertMember(member: any) {
    return this.http.post<any>(`${environment.apiUrl}/members`, member);
  }

  deleteMember(member_id: any) {
    return this.http.delete<any>(`${environment.apiUrl}/members/${member_id}`);
  }
}
