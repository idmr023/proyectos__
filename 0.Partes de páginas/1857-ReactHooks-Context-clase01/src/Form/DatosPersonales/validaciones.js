export const validarNombre = (nombre) =>{
    const length = nombre.length
    return (length > 2 && length < 30) ? true : false
};

export const validarApellido = (apellidos) => {
    const length = apellidos.length
    return (length > 4 && length < 50) ? true : false
}

export const validarTelefono = (telefono) => {
    const length = telefono.length
    return (length >= 8 && length <= 14) ? true : false
}
