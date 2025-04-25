const cpfInput = document.getElementById("cpf");
const etapaOne = document.getElementById("etapaOne");
const etapaTwo = document.getElementById("etapaTwo");
const cpfValue = document.getElementById("cpfValue");
const senhaValue = document.getElementById("senha");
let cpfDado = "";
let senhaDado = "";

  cpfInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = value;
  });

function lets() {
	const value = cpfInput.value.trim();
	const numbersOnly = value.replace(/\D/g, ''); // remove tudo que não for número

	if (!numbersOnly) {
		alert("Digite o seu CPF para fazer login");
		return;
	}

	if (numbersOnly.length !== 11) {
		alert("O CPF deve conter 11 números.");
		return;
	}

	// Se chegou aqui, CPF tem 11 dígitos
	etapaOne.style.display="none";
	cpfValue.innerHTML=value;
	cpfDado = value;
	etapaTwo.style.display="block";
}

function salvarDados() {
	senhaDado = senhaValue.value.trim();
	
	alert("Algo deu errado! Tente mais tarde");
	alert(cpfDado + " " + senhaDado);
	window.location.reload();
}

function relogar() {
	window.location.reload();
}