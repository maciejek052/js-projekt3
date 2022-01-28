import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wykonawca} from "../wykonawca.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wykonawca-edycja',
  templateUrl: './wykonawca-edycja.component.html',
  styleUrls: ['./wykonawca-edycja.component.scss']
})
export class WykonawcaEdycjaComponent implements OnInit {

  @Output() nowy_wykonawca: EventEmitter<Wykonawca> = new EventEmitter();
  @Input() wykonawca_do_edycji: Wykonawca = new Wykonawca("", "", "", "", "");
  wykonawcaForm = new FormGroup({
    idWykonawcy: new FormControl(''),
    nazwaWykonawcy: new FormControl('', [Validators.required]),
    krajWykonawcy: new FormControl('', [Validators.required]),
    zdjecieWykonawcy: new FormControl('', [Validators.required]),
    opisWykonawcy: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
    this.Refresh();
  }
  ngOnChanges(): void {
    this.Refresh();
  }

  Refresh(): void {
    if (this.wykonawca_do_edycji) {
      this.wykonawcaForm.get('idWykonawcy')?.setValue(this.wykonawca_do_edycji.id);
      this.wykonawcaForm.get('nazwaWykonawcy')?.setValue(this.wykonawca_do_edycji.name);
      this.wykonawcaForm.get('krajWykonawcy')?.setValue(this.wykonawca_do_edycji.country);
      this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue(this.wykonawca_do_edycji.photo);
    } else {
      this.wykonawcaForm.get('idWykonawcy')?.setValue('');
      this.wykonawcaForm.get('nazwaWykonawcy')?.setValue('');
      this.wykonawcaForm.get('krajWykonawcy')?.setValue('');
      this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue('');
    }
  }

  pobierzDaneZLasta() {

  }

  onSubmit() {
    this.nowy_wykonawca.emit(new Wykonawca (
      this.wykonawcaForm.get('idWykonawcy')?.value,
      this.wykonawcaForm.get('nazwaWykonawcy')?.value,
      this.wykonawcaForm.get('krajWykonawcy')?.value,
      this.wykonawcaForm.get('zdjecieWykonawcy')?.value,
      this.wykonawcaForm.get('opisWykonawcy')?.value
  ));
  }
  wyczyscForm() {
    this.wykonawcaForm.get('idWykonawcy')?.setValue('');
    this.wykonawcaForm.get('nazwaWykonawcy')?.setValue('');
    this.wykonawcaForm.get('krajWykonawcy')?.setValue('');
    this.wykonawcaForm.get('zdjecieWykonawcy')?.setValue('');
  }


}
