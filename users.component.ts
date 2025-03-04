import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-users',
  imports: [FormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {

  //Variable publica para definir la visibilidad del form
  isVisible = false;

  constructor(public userService:UsersService){

  }

  //Metodo para mostrar el formulario 
  setVisible(){
    this.isVisible = true;
  }

  //Metodo para que al iniciar el componente se ejecute getUsers()
  ngOnInit(): void {
    this.getUsers();
  }

  //Abstrae los datos de la petición que se hizo en el servicio users.service
  getUsers(){
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.userService.users = data;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  //Eliminar elemento de la lista
  delateItem(id: number){
    // Buscar id y devolver la posición
    const index = this.userService.users.findIndex((user)=> user.id == id )

    // Devuelve -1 si no encuentra el id. Si es diferente a -1 elimina la posición en el arreglo
    if(index !== -1){
      this.userService.users.splice(index,1)
    }

  }


}
