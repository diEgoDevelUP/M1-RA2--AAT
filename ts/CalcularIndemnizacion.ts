class CalcularIndemnizacion {
    private sueldoBase: number = 0;
    private yearsTrabajados: number = 0;
    private bonoCatorce: number = 0;
    private aguinaldo: number = 0;
    private salarioPendiente: number = 0;
    private descuentosPendientes: number = 0;
    private indemnizacion: number = 0;

    valorSueldoBase(valor: number) {
        this.sueldoBase = valor;
    }

    valorYearsTrab(valor: number) {
        this.yearsTrabajados = valor;
    }

    valorBonoCatorce(): String {
        this.bonoCatorce = (this.sueldoBase / 12) * (this.yearsTrabajados * 12);
        return " " + this.bonoCatorce;
    }

    valorAguinaldo(): String {
        this.aguinaldo = (this.sueldoBase / 12) * (this.yearsTrabajados * 12);
        return " " + this.aguinaldo;
    }

    valorSalarioPendiente(valor: number) {
        this.salarioPendiente = valor;
    }

    valorDescuentos(valor: number) {
        this.descuentosPendientes = valor;
    }

    valorIndemnizacion(): String {
        this.indemnizacion = (this.sueldoBase * this.yearsTrabajados) + this.bonoCatorce + this.aguinaldo + this.salarioPendiente - this.descuentosPendientes;
        return " " + this.indemnizacion;
    }
}

const datosNuevos = new CalcularIndemnizacion();

function capturaDatosIngresados() {
    datosNuevos.valorSueldoBase(parseFloat((document.getElementById("txtSueldo") as HTMLInputElement).value));
    datosNuevos.valorYearsTrab(parseFloat((document.getElementById("txtTrabajados") as HTMLInputElement).value));
    datosNuevos.valorSalarioPendiente(parseFloat((document.getElementById("txtSalarioPen") as HTMLInputElement).value));
    datosNuevos.valorDescuentos(parseFloat((document.getElementById("txtDeudas") as HTMLInputElement).value));
}

function calculoMesesTrabajados() {
    capturaDatosIngresados();
}

function calculoBonoCatorce() {
    capturaDatosIngresados();
    txtBonocat.textContent = datosNuevos.valorBonoCatorce();
}

function calculoAguinaldo() {
    capturaDatosIngresados();
    txtAguinaldo.textContent = datosNuevos.valorAguinaldo();
}

function calculoIndemnizacion() {
    capturaDatosIngresados();
    txtIndemnizacion.textContent = datosNuevos.valorIndemnizacion();
}

function mostrarValoresTotales() {
    calculoBonoCatorce();
    calculoAguinaldo();
    calculoIndemnizacion();
}