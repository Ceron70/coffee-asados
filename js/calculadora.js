// ========== CALCULADORA DE PRESUPUESTO - COFFEE & ASADOS ==========

// Precios de cada producto
const precios = {
    cafe: 1500,
    cafeLeche: 1800,
    capuchino: 2000,
    te: 1200,
    medialunas: 1500,
    choripan: 2500,
    morcilla: 2000,
    vacio: 18000,
    pechito: 15000,
    ensalada: 1500,
    pan: 1000,
    bebida: 1500,
    postre: 2000
};

// Función para actualizar el total en tiempo real
function actualizarTotal() {
    let total = 0;
    total += (document.getElementById('cafe').value || 0) * precios.cafe;
    total += (document.getElementById('cafeLeche').value || 0) * precios.cafeLeche;
    total += (document.getElementById('capuchino').value || 0) * precios.capuchino;
    total += (document.getElementById('te').value || 0) * precios.te;
    total += (document.getElementById('medialunas').value || 0) * precios.medialunas;
    total += (document.getElementById('choripan').value || 0) * precios.choripan;
    total += (document.getElementById('morcilla').value || 0) * precios.morcilla;
    total += (document.getElementById('vacio').value || 0) * precios.vacio;
    total += (document.getElementById('pechito').value || 0) * precios.pechito;
    total += (document.getElementById('ensalada').value || 0) * precios.ensalada;
    total += (document.getElementById('pan').value || 0) * precios.pan;
    total += (document.getElementById('bebida').value || 0) * precios.bebida;
    total += (document.getElementById('postre').value || 0) * precios.postre;

    document.getElementById('total').innerText = '$' + total.toLocaleString('es-CL');
    return total;
}

// Función para generar el mensaje de WhatsApp
function generarMensaje(total) {
    let mensaje = "🍖☕ *PEDIDO COFFEE & ASADOS* ☕🍖%0A%0A";
    
    if (document.getElementById('cafe').value > 0) mensaje += "✅ Café americano: " + document.getElementById('cafe').value + " unidad(es)%0A";
    if (document.getElementById('cafeLeche').value > 0) mensaje += "✅ Café con leche: " + document.getElementById('cafeLeche').value + " unidad(es)%0A";
    if (document.getElementById('capuchino').value > 0) mensaje += "✅ Capuchino: " + document.getElementById('capuchino').value + " unidad(es)%0A";
    if (document.getElementById('te').value > 0) mensaje += "✅ Té variado: " + document.getElementById('te').value + " unidad(es)%0A";
    if (document.getElementById('medialunas').value > 0) mensaje += "✅ Medialunas/Facturas: " + document.getElementById('medialunas').value + " porción(es)%0A";
    if (document.getElementById('choripan').value > 0) mensaje += "✅ Choripán: " + document.getElementById('choripan').value + " unidad(es)%0A";
    if (document.getElementById('morcilla').value > 0) mensaje += "✅ Morcilla: " + document.getElementById('morcilla').value + " unidad(es)%0A";
    if (document.getElementById('vacio').value > 0) mensaje += "✅ Vacío: " + document.getElementById('vacio').value + " kg%0A";
    if (document.getElementById('pechito').value > 0) mensaje += "✅ Pechito de cerdo: " + document.getElementById('pechito').value + " kg%0A";
    if (document.getElementById('ensalada').value > 0) mensaje += "✅ Ensalada mixta: " + document.getElementById('ensalada').value + " persona(s)%0A";
    if (document.getElementById('pan').value > 0) mensaje += "✅ Pan para asado: " + document.getElementById('pan').value + " persona(s)%0A";
    if (document.getElementById('bebida').value > 0) mensaje += "✅ Gaseosas/Agua: " + document.getElementById('bebida').value + " persona(s)%0A";
    if (document.getElementById('postre').value > 0) mensaje += "✅ Postre casero: " + document.getElementById('postre').value + " persona(s)%0A";
    
    mensaje += "%0A💰 *TOTAL: $" + total.toLocaleString('es-CL') + "*%0A%0A";
    mensaje += "📅 Fecha del evento: [escribe la fecha]%0A";
    mensaje += "📍 Dirección: [escribe la dirección]%0A%0A";
    mensaje += "Gracias, quedo atento a su cotización.";
    
    return mensaje;
}

// Función para actualizar el enlace de WhatsApp
function actualizarLinkWhatsApp() {
    const total = actualizarTotal();
    const mensaje = generarMensaje(total);
    const numeroTelefono = "56988160607";
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    document.getElementById('whatsappLink').href = urlWhatsApp;
}

// Asignar eventos a todos los inputs cuando la página cargue
window.onload = function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', actualizarLinkWhatsApp);
    });
    actualizarLinkWhatsApp();
};