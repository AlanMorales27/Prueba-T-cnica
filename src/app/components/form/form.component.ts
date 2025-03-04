import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  @Input() isVisible: boolean = true;
  //Evento que emite cambios a la visibilidad del formulario
  @Output() isVisibleChange = new EventEmitter<boolean>();

  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UsersService);
  message = "";

  //Definición formulario reactivo y definición de validaciones
  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    user: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    city: ['Bogotá', Validators.required],
    company: ['']
  })

  //Método para cambio de visibilidad de formulario
  toggleVisibility(){
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

  //Metodo para validar el envio del formulario
  addUser(){
    if(this.userForm.invalid){
      this.message = "Revisa el formulario y vuelve a intentar"
    }else{
      const newUser: User = {
        id: this.userService.users.length + 1,
        ...this.userForm.value
      } as User
      this.userService.users.push(newUser);
      this.message = "Usuario agregado exitosamente";
      this.userForm.reset();
      this.toggleVisibility();
    }
  }
}
