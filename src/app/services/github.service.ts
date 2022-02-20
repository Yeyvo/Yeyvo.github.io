import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  profileUrl = "https://api.github.com/users/Yeyvo/repos";

  constructor(private http: HttpClient) {
  }

  getAllProjects(): Observable<any> {
    return this.http.get(this.profileUrl);
  }

  // getNonForkedProjects(forkWhitelist: string[]): Observable<any> {
  //   return from(this.getAllProjects()).pipe(
  //     tap(x => console.log(x)),
  //     // map(data => data),
  //     filter(x =>  (forkWhitelist.indexOf(x.full_name) != -1 || x.fork == false)),
  //     tap(x => console.log(x))
  //   );
  // }

  getColors():Observable<any>{
    return this.http.get("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json");
  }
}
