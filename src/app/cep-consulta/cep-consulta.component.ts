import { Component } from '@angular/core';
import { CepService } from '../services/cep.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.component.html',
  styleUrls: ['./cep-consulta.component.css']
})
export class CepConsultaComponent {
  cep: string = ''; // Inicializa a propriedade cep com um valor padrão
  endereco: any;
  historico: any[] = []; // Array para armazenar o histórico de CEPs

  constructor(private cepService: CepService) {}

  consultarCep() {
    this.cepService.getEndereco(this.cep).subscribe(data => {
      this.endereco = data;
      this.historico.push({ cep: this.cep, localidade: data.localidade, uf: data.uf }); // Adiciona ao histórico
    }, error => {
      this.endereco = null; // Lida com o erro
    });
  }
}
