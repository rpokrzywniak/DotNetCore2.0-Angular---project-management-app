import { Injectable, OnDestroy} from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';
import { decode } from "jsonwebtoken"; 
import {BaseService} from "./base.service";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

//import * as _ from 'lodash';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { List } from 'app/shared/models/list.interface';
import { Student } from 'app/shared/models/student.interface';
import { Group } from 'app/shared/models/group.interface';

@Injectable()

export class UserService extends BaseService implements OnDestroy {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  private _admin = new BehaviorSubject<boolean>(false);
  private _worker = new BehaviorSubject<boolean>(false);
  private _student = new BehaviorSubject<boolean>(false);
  private _id = new BehaviorSubject<string>("");
  // Observable navItem stream
  private authNavStatus$ = this._authNavStatusSource.asObservable();
  private adminA = this._admin.asObservable();
  private  workerA = this._worker.asObservable();
  private studentA = this._student.asObservable();
  private idA = this._id.asObservable();
  private  subscription: Subscription;
  private subscriptionA: Subscription;
  private subscriptionW: Subscription;
  private subscriptionS: Subscription;
  private subscriptionI: Subscription;
  private status: boolean;
  private admin: boolean;
  private worker: boolean;
  private student: boolean;
  private id: string;
  private loggedIn;

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = localStorage.getItem('logged_in');
    console.log(this.loggedIn);
    this.subscription = this.authNavStatus$.subscribe(status => this.status = status); // zrobic w user services subskrybcje
    this.subscriptionA = this.adminA.subscribe(admin => this.admin = admin);
    this.subscriptionW = this.workerA.subscribe(worker => this.worker = worker);
    this.subscriptionS = this.studentA.subscribe(student => this.student = student);
    this.subscriptionI = this.idA.subscribe(id => this.id = id);
    if (this.loggedIn !== "true") {
      console.log("niezalogowany");
      this._authNavStatusSource.next(false);
      this._admin.next(false);
      this._worker.next(false);
      this._student.next(false);
      this._id.next("");
      // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
      // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    }
    else {
      this.decodeToken();
      this._authNavStatusSource.next(true);
    }
    this.baseUrl = configService.getApiURI();
  }
  decodeToken() {
    let decoded = decode(localStorage.getItem('auth_token'));
    let obj = JSON.parse(JSON.stringify(decoded));
    this._id.next(obj.id);
    if (obj.rol === "api_admin_access") {
      this._admin.next(true);
    }
    else if (obj.rol === "api_worker_access") {
      this._worker.next(true);
    }
    else if (obj.rol === "api_student_access") {
      this._student.next(true);
    }
  }
  isAdmin(): boolean {
    return this.admin;
  }
  isWorker(): boolean {
    return this.worker;
  }
  isStudent(): boolean {
    return this.student;
  }
  isLoggedIn(): boolean {
    return this.status;
  }
  getId(): string {
    return this.id;
  }
  isConfirmed(id: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(this.baseUrl + '/Student/confirmed', requestOptions).map(res => res.json());
  }
  register(userName: string, firstName: string, lastName: string, email: string, nrIndex: number, password: string): Observable<UserRegistration> {
    let body = JSON.stringify({ email, password, firstName, lastName, userName, nrIndex });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/accounts", body, options)
      .map(res => true)
      .catch(this.handleError);
  }

  login(userName, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.baseUrl + '/auth/login');
    return this.http
      .post(
      this.baseUrl + '/auth/login',
      JSON.stringify({ userName, password }), { headers }
      )
      .map(res => res.json())
      .map(res => {
        console.log("logowanie");
        localStorage.setItem('auth_token', res.auth_token);
        localStorage.setItem('logged_in', "true");
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.decodeToken();
        return true;
      })
      .catch(this.handleError);
  }
  postMyProjectRequest(url:string, id:string) { // url, id
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify( id ),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  postMyProjectUpdate(url, id, name, repoGit, description, mentoring, pblic) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ id, name, repoGit, description, mentoring, pblic }),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  postMyProjectCreate(url, name, repoGit, description, mentoring, pblic) {
    let headers = new Headers();
    let id = this.getId();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ id, name, repoGit, description, mentoring, pblic }),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  postMyProjectJoin(url, id) {
    let headers = new Headers();
    let idStudent = this.getId();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ id, idStudent }),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  studentUpdate(url, id, identityId, nrIndex, projectId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ id, identityId, nrIndex, projectId }),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  workerUpdate(url, id, identityId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ id, identityId }),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  studentCreate(url, identityId, nrIndex, projectId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ identityId, nrIndex, projectId}),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  workerCreate(url, identityId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify({ identityId}),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  studentDelete(url, id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    console.log(url);

    return this.http
      .post(
      url,
      JSON.stringify(id),
      { headers }
      )
      .map(res => res.json())
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
  projectStar(url, id:number, starred:boolean) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    starred = !starred;
    return this.http
      .put(
      url,
      JSON.stringify({ id, starred }),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  projectToChange(url, project: List) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    return this.http
      .put(
      url,
      JSON.stringify(project),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  projectConfirm(url, project: List) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    return this.http
      .put(
      url,
      JSON.stringify(project),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  studentConfirm(url, student: Student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    url = this.baseUrl + url;
    return this.http
      .put(
      url,
      JSON.stringify(student),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  getGroups(id: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(this.baseUrl + '/Worker/groups', requestOptions).map(res => res.json());
  }
  createGroup(name: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = this.getId();
    console.log(name);
    return this.http.post(this.baseUrl + '/Worker/creategroup', JSON.stringify({id, name}),
      { headers }).map(res => res.json());
  }
  removeGroup() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(
      this.baseUrl + '/Student/removegroup',
      JSON.stringify(this.getId()),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  leaveGroup() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http
        .put(
        this.baseUrl + '/Student/leavegroup',
        JSON.stringify(this.getId()),
        { headers }
        )
        .map(res => true)
        .catch(this.handleError);
  }
  removeWorkerGroup(group: Group) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(
      this.baseUrl + '/Worker/deletegroup', JSON.stringify(group),
      { headers }
      )
      .map(res => true)
      .catch(this.handleError);
  }
  getNotConfirmedStudents() {
    return this.http.get(this.baseUrl + '/Student/notconfirmedstudents').map(res => res.json());
  }
  getConfirmedStudents() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', this.getId());
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(this.baseUrl + '/Student/confirmedstudents', requestOptions).map(res => res.json());
  }
  freeUsers() {
    return this.http.get(this.baseUrl + '/UsersList/free').map(res => res.json()).map(res => {
      return res;
    })
      .catch(this.handleError);
  }
  logout() {
    console.log("logout");
    this._admin.next(false);
    this._worker.next(false);
    this._student.next(false);
    this._authNavStatusSource.next(false);
    localStorage.setItem('logged_in', "false");
    localStorage.removeItem('auth_token');
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
    this.subscriptionA.unsubscribe();
    this.subscriptionW.unsubscribe();
    this.subscriptionS.unsubscribe();
    this.subscriptionI.unsubscribe();
  }

}

