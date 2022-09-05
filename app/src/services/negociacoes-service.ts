import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from './../interfaces/negociacao-do-dia.js';
export class NegociacoesServices{

    public ObterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(res=> res.json())
        .then((dados: NegociacoesDoDia[]) =>{
            return dados.map(dado => {
                return new Negociacao(new Date(), 
                dado.vezes, 
                dado.montante)
            })
        });
    }
}