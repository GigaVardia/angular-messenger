import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatInputComponent,
    ChatHeaderComponent,
    ChatMessagesComponent,
    SidebarLeftComponent,
    ChatDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
