
function paradit(id) {
    const dalas = document.querySelectorAll('.sadalas');
    dalas.forEach(function(dala) {
        dala.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function rekini() {
    const a = parseFloat(document.getElementById('sk1').value) || 0;
    const b = parseFloat(document.getElementById('sk2').value) || 0;
    const darbiba = document.getElementById('darbiba').value;
    let rezultats = 0;

    if (darbiba === '+') rezultats = a + b;
    if (darbiba === '-') rezultats = a - b;
    if (darbiba === '*') rezultats = a * b;
    if (darbiba === '/') {
        if (b === 0) {
            document.getElementById('rezultats').innerHTML = 'Ar 0 dalīt nevar.';
            return;
        }
        rezultats = a / b;
    }

    document.getElementById('rezultats').innerHTML = 'Rezultāts: ' + rezultats;
}

function atiestatitKalkulatoru() {
    document.getElementById('sk1').value = '';
    document.getElementById('sk2').value = '';
    document.getElementById('rezultats').innerHTML = 'Rezultāts: ';
}

function izveletiesDzerienu(nosaukums, cena) {
    document.getElementById('izvele').innerHTML = 'Tu izvēlējies: ' + nosaukums + ' (' + cena + ' €)';
}
