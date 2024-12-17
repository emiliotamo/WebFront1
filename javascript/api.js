const apiBaseUrl = 'https://tu-api-url.com';

// Función común para hacer GET por ID
async function getCervezaById(id) {
    const response = await fetch(`${apiBaseUrl}/cervezas/${id}`);
    if (!response.ok) throw new Error('Cerveza no encontrada');
    return await response.json();
}

// Obtener todas las cervezas
async function getCervezas() {
    const response = await fetch(`${apiBaseUrl}/cervezas`);
    if (!response.ok) throw new Error('Error al obtener cervezas');
    return await response.json();
}

// Añadir una cerveza
async function addCerveza(cerveza) {
    const response = await fetch(`${apiBaseUrl}/cervezas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cerveza)
    });
    if (!response.ok) throw new Error('Error al añadir la cerveza');
    return response.json();
}

// Editar una cerveza
async function updateCerveza(id, cerveza) {
    const response = await fetch(`${apiBaseUrl}/cervezas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cerveza)
    });
    if (!response.ok) throw new Error('Error al editar la cerveza');
}

// Eliminar una cerveza
async function deleteCerveza(id) {
    const response = await fetch(`${apiBaseUrl}/cervezas/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar la cerveza');
}
