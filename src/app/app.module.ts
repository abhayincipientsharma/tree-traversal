import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { WorkbookAddComponent } from './workbook-add/workbook-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeListComponent,
    SubjectAddComponent,
    ModuleAddComponent,
    LessonAddComponent,
    WorkbookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
