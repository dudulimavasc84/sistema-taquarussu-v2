function calcularSaldo() {
    const inicial = parseInt(document.getElementById('inicial').value) || 0;
    const entrada = parseInt(document.getElementById('entrada').value) || 0;
    const nascimentos = parseInt(document.getElementById('nascimentos').value) || 0;
    const transferencia = parseInt(document.getElementById('transferencia').value) || 0;
    const saida = parseInt(document.getElementById('saida').value) || 0;
    const abate = parseInt(document.getElementById('abate').value) || 0;
    const mortes = parseInt(document.getElementById('mortes').value) || 0;

    const saldo = inicial + entrada + nascimentos - transferencia - saida - abate - mortes;
    document.getElementById('saldo').value = saldo;
}
