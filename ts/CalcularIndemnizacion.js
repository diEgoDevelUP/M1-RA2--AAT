var CalcularIndemnizacion = /** @class */ (function () {
    function CalcularIndemnizacion() {
        this.sueldoBase = 0;
        this.yearsTrabajados = 0;
        this.bonoCatorce = 0;
        this.aguinaldo = 0;
        this.salarioPendiente = 0;
        this.descuentosPendientes = 0;
        this.indemnizacion = 0;
    }
    CalcularIndemnizacion.prototype.valorSueldoBase = function (valor) {
        this.sueldoBase = valor;
    };
    CalcularIndemnizacion.prototype.valorYearsTrab = function (valor) {
        this.yearsTrabajados = valor;
    };
    CalcularIndemnizacion.prototype.valorBonoCatorce = function () {
        this.bonoCatorce = (this.sueldoBase / 12) * (this.yearsTrabajados * 12);
        return " " + this.bonoCatorce;
    };
    CalcularIndemnizacion.prototype.valorAguinaldo = function () {
        this.aguinaldo = (this.sueldoBase / 12) * (this.yearsTrabajados * 12);
        return " " + this.aguinaldo;
    };
    CalcularIndemnizacion.prototype.valorSalarioPendiente = function (valor) {
        this.salarioPendiente = valor;
    };
    CalcularIndemnizacion.prototype.valorDescuentos = function (valor) {
        this.descuentosPendientes = valor;
    };
    CalcularIndemnizacion.prototype.valorIndemnizacion = function () {
        this.indemnizacion = (this.sueldoBase * this.yearsTrabajados) + this.bonoCatorce + this.aguinaldo + this.salarioPendiente - this.descuentosPendientes;
        return " " + this.indemnizacion;
    };
    return CalcularIndemnizacion;
}());
var datosNuevos = new CalcularIndemnizacion();
function capturaDatosIngresados() {
    datosNuevos.valorSueldoBase(parseFloat(document.getElementById("txtSueldo").value));
    datosNuevos.valorYearsTrab(parseFloat(document.getElementById("txtTrabajados").value));
    datosNuevos.valorSalarioPendiente(parseFloat(document.getElementById("txtSalarioPen").value));
    datosNuevos.valorDescuentos(parseFloat(document.getElementById("txtDeudas").value));
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
