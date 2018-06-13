import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Student } from 'app/shared/models/student.interface';
import { forEach } from '@angular/router/src/utils/collection';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { EditorModule } from 'primeng/editor';
import { List } from 'app/shared/models/list.interface';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Group } from 'app/shared/models/group.interface';
import { SelectItem, ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-workerStudents',
  templateUrl: './workerStudents.component.html',
  styleUrls: ['./workerStudents.component.css']
})
export class WorkerStudentsComponent{
  cols: any[];
  colsConfirmed: any[];
  data: any;
  groups: Group[];
  groupToDelete: number;
  groupsSelect: SelectItem[]=[];
  notConfirmedStudents: Student[];
  confirmedStudents: Student[];
  createGroup: Group = {} as any;
  displayGroups: boolean;
  loading: boolean;
  loadingConfirmed: boolean;
  msgs: Message[] = [];

  constructor(http: Http, private configService: ConfigService, private sanitizer: DomSanitizer, private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    userService.getGroups(userService.getId()).subscribe(result => {
      this.groups = result as Group[];
      console.log(this.groups);
      if (this.groups.length > 0) {       
        this.groups.map(x => {
          let tmp: SelectItem = {} as any;
          tmp.value = x.id;
          tmp.label = x.name;
          this.groupsSelect.push(tmp);
        });
        this.populateGraph();
        this.displayGroups = true;
      }
      else this.displayGroups = false;
    });
    userService.getNotConfirmedStudents().subscribe(result => {
      this.notConfirmedStudents = result as Student[];
      this.notConfirmedStudents.map(x => x.groupId = 0);
      this.loading = false;
    });
    userService.getConfirmedStudents().subscribe(result => {
      this.confirmedStudents = result as Student[];
      this.loadingConfirmed = false;
    });

    this.cols = [
      { field: 'firstName', header: 'Imię' },
      { field: 'lastName', header: 'Nazwisko' },
      { field: 'nrIndex', header: 'Nr Indeksu' },
      { field: 'groupId', header: 'Grupa' },
      { field: 'confirmed', header: 'Zatwierdź' }
    ];
    this.colsConfirmed = [
      { field: 'firstName', header: 'Imię' },
      { field: 'lastName', header: 'Nazwisko' },
      { field: 'nrIndex', header: 'Nr Indeksu' },
      { field: 'groupId', header: 'Grupa' },
      { field: 'confirmed', header: 'Wyrzuć' }
    ];
  }
  groupCreation() {
    let uniqueName: boolean = true;
    if (this.createGroup.name !== undefined && this.createGroup.name !== null) {
      this.createGroup.name = this.createGroup.name.trim();
      if (this.createGroup.name.length <= 0) uniqueName = false;
    }
    else uniqueName = false;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].name === this.createGroup.name) {
        uniqueName = false;
        break;
      }
    }
    if (uniqueName) {
      let groupName: string = JSON.parse(JSON.stringify(this.createGroup.name));
      this.createGroup.name = "";
      this.userService.createGroup(groupName).subscribe(result => {
        if (result) {
          this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie dodano grupę' });
          this.groups = result as Group[];
          if (this.groups.length > 0) {
            this.groupsSelect = [];
            this.groups.map(x => {
              let tmp: SelectItem = {} as any;
              tmp.value = x.id;
              tmp.label = x.name;
              this.groupsSelect.push(tmp);
            });
            this.populateGraph();
            this.displayGroups = true;
          }
          else this.displayGroups = false;
        }
        else this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się dodać grupy' });
      });
    }
    else this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Nazwy grup nie mogą być takie same' });
  }
  confirm(student: Student) {
    student.confirmed = !student.confirmed;
    if (student.groupId !== 0 && student.groupId !== null && student.groupId !== undefined) this.userService.studentConfirm("/Student", student).subscribe(result => {
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zatwierdzono studenta' });
          for (let i = 0; i < this.notConfirmedStudents.length; i++) {
            if (this.notConfirmedStudents[i].id == student.id) {
              this.notConfirmedStudents.splice(i, 1);
              this.confirmedStudents.push(student);
              break;
            }
          }
          for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i].id === student.groupId)
              this.groups[i].students.push(student);
        }
        this.populateGraph();
      }
      else this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się zatwierdzić studenta' });
    });
    else this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę dla studenta' });
  }
  remove(student: Student) {
    student.confirmed = !student.confirmed;
    student.groupId = null;
    if (student.groupId !== 0) this.userService.studentConfirm("/Student", student).subscribe(result => {
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie wyrzucono studenta' });
        for (let i = 0; i < this.confirmedStudents.length; i++) {
          if (this.confirmedStudents[i].id == student.id) {
            this.confirmedStudents.splice(i, 1);
            this.notConfirmedStudents.push(student);
            break;
          }
        }
        for (let i = 0; i < this.groups.length; i++) {
          for (let j = 0; j < this.groups[i].students.length; j++) {
            if (this.groups[i].students[j].id === student.id) {
              this.groups[i].students.splice(j, 1);
              break;
            }
          }
        }
        this.populateGraph();
        this.groupsSelect = [];
        this.groups.map(x => {
          let tmp: SelectItem = {} as any;
          tmp.value = x.id;
          tmp.label = x.name;
          this.groupsSelect.push(tmp);
        });
      }
      else this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się wyrzucić studenta' });
    });
    else this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę dla studenta' });
  }
  removeDialog(student: Student) {
    this.confirmationService.confirm({
      message: 'Czy napewno chcesz wyrzucić studenta: ' + student.firstName + ' ' + student.lastName + '?',
      header: 'Potwierdzenie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.remove(student);
      }
    });
  }
  changeGroup(student: Student) {
    this.userService.studentConfirm("/Student", student).subscribe(result => {
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zmieniono grupę' });
        for (let i = 0; i < this.groups.length; i++) {
          for (let j = 0; j < this.groups[i].students.length; j++) {
            if (this.groups[i].students[j].id === student.id) {
              this.groups[i].students.splice(j, 1);
              break;
            }
          }
        }
        for (let i = 0; i < this.groups.length; i++) {
          if (this.groups[i].id === student.groupId) {
            this.groups[i].students.push(student);
            break;
          }
        }
        this.populateGraph();
      }
      else this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się zmienić grupy' });
    });
  }
  changeGroupDialog(student: Student) {
    this.confirmationService.confirm({
      message: 'Czy napewno chcesz zmienić grupę studentowi: ' + student.firstName + ' ' + student.lastName+'?',
      header: 'Potwierdzenie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.changeGroup(student);
      }
    });
  }
  groupDeletion() {
    let group: Group = {} as any;
    group.id = this.groupToDelete;
    if (group.id !== null && group.id !== undefined) this.userService.removeWorkerGroup(group).subscribe(result => {
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto grupę' });
        this.userService.getNotConfirmedStudents().subscribe(result => {
          this.notConfirmedStudents = result as Student[];
          this.notConfirmedStudents.map(x => x.groupId = 0);
        });
        this.userService.getConfirmedStudents().subscribe(result => {
          this.confirmedStudents = result as Student[];
        });
        for (let i = 0; i < this.groups.length; i++) {
          if (this.groups[i].id === group.id) {
            this.groups.splice(i, 1);
            break;
          }
        }
        this.populateGraph();
        for (let i = 0; i < this.groupsSelect.length; i++) {
          if (this.groupsSelect[i].value === group.id) {
            this.groupsSelect.splice(i, 1);
            break;
          }
        }
      }
      else this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się usunąc grupy' });
    });
    else this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę do usunięcia' });
  }
  groupDeletionDialog() {
    let groupName: string;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].id === this.groupToDelete) {
        groupName = this.groups[i].name;
        break;
      }
    }
    this.confirmationService.confirm({
      message: 'Czy napewno chcesz usunąć grupę: '+groupName+'?',
      header: 'Potwierdzenie',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.groupDeletion();
      }
    });
  }
  getRandomColor():string {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }
  populateGraph():void {
    let data: number[] = [];
    let backgroundColor: string[] = [];
    let labels: string[] = [];
    this.groups.map(x => {
      data.push(x.students.length);
      labels.push(x.name);
      backgroundColor.push(this.getRandomColor());
    });
    this.data = {
      datasets: [{
        data,
        backgroundColor,
        label: 'Grupy',
      }],
      labels
    }
  }

}
