import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  getMembers() {
    return this.http.get<any>('http://192.168.0.126:3000/members');
  }

  getMemberById(member_id: any) {
    return this.http.get<any>(`http://192.168.0.126:3000/members/${member_id}`);
  }

  updateMember(member_id:any, member: any) {
    return this.http.put<any>(`http://192.168.0.126:3000/members/${member_id}`, member);
  }

  insertMember(member: any) {
    return this.http.post<any>('http://192.168.0.126:3000/members', member);
  }

  deleteMember(member_id: any) {
    return this.http.delete<any>(`http://192.168.0.126:3000/members/${member_id}`);
  }
}
