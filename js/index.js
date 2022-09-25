let condicion;
let monto;
let cuotas;

function iniciarApp() {
  condicion = parseInt(prompt("Bienvenid@, ¿desea calcular o seguir calculando la cantidad de cuotas para su monto? \nPresione 1 ---> CONTINUAR \nPresione cualquier otra tecla ----> SALIR"));
  while (condicion === 1) {
    solicitarMonto();
    iniciarApp();
  }
}

function solicitarMonto() {
  monto = parseFloat(prompt('Ingrese el monto a dividir'));
  if (!(isNaN(monto)) && monto > 0) {
    seleccionarCuotas();
    realizarOperacion(monto, cuotas, interes);
  }else {
    alert('Ingrese un monto válido, por favor');
    solicitarMonto();
  }
}

function seleccionarCuotas() {
  cuotas = parseInt(
    prompt(
      'Seleccione en cuántas cuotas desea dividir el monto a pagar: \n1 cuota: 0% interés \n3 cuotas: 2.5% interés \n6 cuotas: 5% interés \n9 cuotas: 7.5% interés \n12 cuotas: 10% interés \n15 cuotas: 12.5% interés'
    )
  );
  switch (cuotas) {
    case 1:
      interes = 0;
      break;
    case 3:
      interes = 0.025;
      break;
    case 6:
      interes = 0.05;
      break;
    case 9:
      interes = 0.075;
      break;
    case 12:
      interes = 0.1;
      break;
    case 15:
      interes = 0.125;
      break;
    default:
      alert('Seleccione una cuota disponible, por favor')
      seleccionarCuotas();
      break;
  }
}

function realizarOperacion(monto, cuotas, interes) {
  montoFinal = monto + (monto * interes);
  montoCuota = montoFinal / cuotas;
  alert(`Has seleccionado ${cuotas} cuotas
  El interés es de ${interes*100}%
  El monto a pagar por cada cuota es ${montoCuota}
  El monto total es ${montoFinal}`);
}

iniciarApp();