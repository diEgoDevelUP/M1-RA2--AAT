var CacularSueldoLiquido = /** @class */ (function () {
    function CacularSueldoLiquido() {
        this.salario = 0;
        this.bonificacion = 0;
        this.comisiones = 0;
        this.totalGanado = 0;
        this.totalIgss = 0;
        this.ahorro = 0;
        this.otrosDescuentos = 0;
        this.totalDescuentos = 0;
        this.sueldoLiquido = 0;
    }
    CacularSueldoLiquido.prototype.guardaValorSal = function (valor) {
        this.salario = valor;
    };
    CacularSueldoLiquido.prototype.guardaValorbon = function (valor) {
        this.bonificacion = valor;
    };
    CacularSueldoLiquido.prototype.guardaValorComi = function (valor) {
        this.comisiones = valor;
    };
    CacularSueldoLiquido.prototype.sumaDeValoresIngresos = function () {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return "El total de ingresos es: " + this.totalGanado;
    };
    CacularSueldoLiquido.prototype.guardaValorAhorro = function (valor) {
        this.ahorro = valor;
    };
    CacularSueldoLiquido.prototype.guardaValorOtrosDesc = function (valor) {
        this.otrosDescuentos = valor;
    };
    CacularSueldoLiquido.prototype.valorDeIgss = function () {
        this.totalIgss = (this.salario * 4.83) / 100;
        return this.totalIgss;
    };
    CacularSueldoLiquido.prototype.sumaDeValoresEgresos = function () {
        this.totalDescuentos = this.ahorro + this.otrosDescuentos + this.valorDeIgss(); // Suma de IGSS a egresos
        return "El total de egresos es: " + this.totalDescuentos;
    };
    CacularSueldoLiquido.prototype.totalSueldo = function () {
        this.sueldoLiquido = this.totalGanado - this.totalDescuentos;
        return this.sueldoLiquido;
    };
    return CacularSueldoLiquido;
}());
var valoresNuevos = new CacularSueldoLiquido();
function capturaDatosIngresos() {
    //asignando a los atributos del objeto los valores
    valoresNuevos.guardaValorSal(parseFloat(document.getElementById("txtSalario").value));
    valoresNuevos.guardaValorbon(parseFloat(document.getElementById("txtBonificacion").value));
    valoresNuevos.guardaValorComi(parseFloat(document.getElementById("txtComisiones").value));
}
function sumarValores() {
    capturaDatosIngresos();
    txtTotal1.textContent = valoresNuevos.sumaDeValoresIngresos();
}
function capturaDatosEgresos() {
    //asignando a los atributos del objeto los valores
    valoresNuevos.guardaValorAhorro(parseFloat(document.getElementById("txtAhorro").value));
    valoresNuevos.guardaValorOtrosDesc(parseFloat(document.getElementById("txtDescuentos").value));
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
