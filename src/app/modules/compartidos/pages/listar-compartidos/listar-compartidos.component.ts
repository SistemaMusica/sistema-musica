import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../shared/services/compartido.service';

@Component({
  selector: 'app-listar-compartidos',
  templateUrl: './listar-compartidos.component.html',
  styleUrls: ['./listar-compartidos.component.scss']
})
export class ListarCompartidosComponent implements OnInit {

  correoLocal:any=localStorage.getItem('correo');
  idLocal:any=localStorage.getItem('_id');

  compartidos:any[] =[];

  constructor(
    private compartidoService: CompartidoService,

  ) { }

  ngOnInit(): void {
    this.getRepertoriosList();
  }

  getRepertoriosList(){
    this.compartidoService.getRepertorioPorCompartido(this.correoLocal)
    .subscribe(
      compartidos=>{
        if(compartidos.usuario==this.idLocal){
          console.log("SON IGUALES");
        }
        else{
          console.log("COMPR",compartidos.usuario);
          console.log("LOCAL",this.idLocal);
          this.compartidos=compartidos;
          console.log("COMPARTIDO TS",this.compartidos);
        }
      },
      err=>console.log(err)
    );
  }

}
