import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Mis recordatorios', url: '/misrecordatorios', icon: 'calendar' },
    { title: 'Modificar', url: '/modificar', icon: 'create' },
    { title: 'Categorias', url: '/categorias', icon: 'apps' },
    { title: 'Eliminar', url: '/folder/favorites', icon: 'trash' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-circle' },
    
  ];
  
  constructor() {}
}
