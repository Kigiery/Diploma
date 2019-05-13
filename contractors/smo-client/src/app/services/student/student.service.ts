import { Injectable } from '@angular/core';
import { SearchStudentResultInterface } from '../../interfaces/models/search-student-result.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public currentStudent: SearchStudentResultInterface
  constructor() { }

}
