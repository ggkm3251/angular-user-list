import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchControl = new FormControl('');
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.setupSearch();
  }

  fetchUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.filteredUsers = data;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load users. Please try again.';
          this.isLoading = false;
        }
      });
  }

  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      map(searchTerm => searchTerm?.toLowerCase() || '')
    ).subscribe(searchTerm => {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      );
    });
  }
}
