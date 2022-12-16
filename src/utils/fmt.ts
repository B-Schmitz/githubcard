import moment from "moment";

class Format {

    private formatData(v: string, formato: string): string {
        if (!v)
            return "n/d";
        return moment(v).format(formato);
    }

    dataHora(v: string) {
        return this.formatData(v, "HH:mm:ss DD/MM/YYYY");
    }

    data(v: string) {
        return this.formatData(v, "DD/MM/YYYY");
    }

    num(valor: number, prec: number) {
        return valor.toLocaleString("pt-BR", {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec,
        });
    }
}

export const fmt = new Format();
