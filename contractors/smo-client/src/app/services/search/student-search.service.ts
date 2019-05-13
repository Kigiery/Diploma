import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { SearchStudentResultInterface } from 'src/app/interfaces/models/search-student-result.interface';
import { SearchStudentInterface } from 'src/app/interfaces/models/search-student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {

  constructor(private http: HttpService) { }

  public search(searchParams: SearchStudentInterface): Observable<SearchStudentResultInterface[]> {
    return this.http.post('search', {
      ...searchParams,
      nationality: 'FOREIGN',
    });
  }
}
