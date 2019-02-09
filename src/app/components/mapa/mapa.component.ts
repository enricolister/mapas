import { Marcador } from './../../classes/marcador.class';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  snackBar: any;

  constructor(public snackbar: MatSnackBar,
              public dialog: MatDialog) { 

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
      this.snackBar = snackbar;
    }
  }

  agregarMarcador(event) {
    const coords: { lat: number, lng: number } = event.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado.', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador(position: number) {
    this.marcadores.splice(position, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado.', 'Cerrar', { duration: 3000 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
        if (!result.titulo && !result.desc) {
          return;
        }
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
        this.guardarStorage();
        this.snackBar.open('Marcador actualizado.', 'Cerrar', { duration: 3000 });
    });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
