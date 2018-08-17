import { Lista } from "./lista";

export class Quadro {

    constructor(
        public id: number,
        public nome: string,
        public listas: Lista[]
    ) { }
}

