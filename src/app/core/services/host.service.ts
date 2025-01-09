import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HostService {
  constructor(private http: HttpClient) {}
}
