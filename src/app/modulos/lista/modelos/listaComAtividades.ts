import { Lista } from "./lista";
import { Atividade } from "../../atividade/modelos/atividade";

export interface ListaComAtividades {
    lista: Lista;
    atividades: Atividade[];
}