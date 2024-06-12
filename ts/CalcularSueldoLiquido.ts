class CacularSueldoLiquido {
    private salario: number = 0;
    private bonificacion: number = 0;
    private comisiones: number = 0;
    private totalGanado: number = 0;
    private totalIgss: number = 0;
    private ahorro: number = 0;
    private otrosDescuentos: number = 0;
    private totalDescuentos: number = 0;
    private sueldoLiquido: number = 0;

    guardaValorSal(valor: number) {
        this.salario = valor;
    }

    guardaValorbon(valor: number) {
        this.bonificacion = valor;
    }

    guardaValorComi(valor: number) {
        this.comisiones = valor;
    }

    sumaDeValoresIngresos(): String {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return "El total de ingresos es: " + this.totalGanado;
    }

    guardaValorAhorro(valor: number) {
        this.ahorro = valor;
    }

    guardaValorOtrosDesc(valor: number) {
        this.otrosDescuentos = valor;
    }

    valorDeIgss(): number {
        this.totalIgss = (this.salario * 4.83) / 100;
        return this.totalIgss;
    }

    sumaDeValoresEgresos(): String {
        this.totalDescuentos = this.ahorro + this.otrosDescuentos + this.valorDeIgss(); // Suma de IGSS a egresos
        return "El total de egresos es: " + this.totalDescuentos;
    }

    totalSueldo(): number {
        this.sueldoLiquido = this.totalGanado - this.totalDescuentos;
        return this.sueldoLiquido;
    }
}

const valoresNuevos = new CacularSueldoLiquido();

function capturaDatosIngresos() {
    //asignando a los atributos del objeto los valores del form
    valoresNuevos.guardaValorSal(
        parseFloat((document.getElementById("txtSalario") as HTMLInputElement).value)
    );
    valoresNuevos.guardaValorbon(
        parseFloat((document.getElementById("txtBonificacion") as HTMLInputElement).value)
    );
    valoresNuevos.guardaValorComi(
        parseFloat((document.getElementById("txtComisiones") as HTMLInputElement).value)
    );
}

function sumarValores() {
    capturaDatosIngresos();
    txtTotal1.textContent = valoresNuevos.sumaDeValoresIngresos();
}

function capturaDatosEgresos() {
    //asignando a los atributos del objeto los valores del form
    valoresNuevos.guardaValorAhorro(
        parseFloat((document.getElementById("txtAhorro") as HTMLInputElement).value)
    );
    valoresNuevos.guardaValorOtrosDesc(
        parseFloat((document.getElementById("txtDescuentos") as HTMLInputElement).value)
    );
}

function sumarValoresEgresos() {
    capturaDatosEgresos();
    txtTotalEgre.textContent = valoresNuevos.sumaDeValoresEgresos();
    txtIgss.textContent = valoresNuevos.valorDeIgss().toFixed(2); // Formato con 2 decimales por el calculo del igss
}

function mostrarTotalSueldo() {
    sumarValores();
    sumarValoresEgresos();
    txtNewTotal.textContent = valoresNuevos.totalSueldo().toFixed(2); // Formato con 2 decimales
}
