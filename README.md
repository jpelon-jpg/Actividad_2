# Utilería JavaScript para Formularios Web

## Alumno

**Jhonatan Ivan Poblete Hernandez**

## Descripción del proyecto

Este proyecto consiste en una biblioteca de utilidades desarrollada en JavaScript para facilitar la validación y procesamiento de datos en formularios web.

La biblioteca contiene funciones reutilizables para validar correos electrónicos, nombres, teléfonos y contraseñas, además de calcular la edad y determinar si una persona es mayor de edad.

La biblioteca se integra en un formulario de registro y en una página de inicio de sesión para demostrar su funcionamiento.

## Problema que resuelve

En los formularios web es necesario validar la información introducida por el usuario para evitar datos incorrectos o incompletos.

Esta biblioteca permite realizar validaciones de forma sencilla y reutilizable, evitando tener que escribir nuevamente el mismo código en cada formulario.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

## Estructura del proyecto

```text
Actividad_2/
│
├── css/
│   └── estilo.css
│
├── js/
│   └── utileria.js
│
├── index.html
├── login.html
└── README.md
```

## Instalación

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador web.

La biblioteca se carga mediante:

```html
<script src="js/utileria.js"></script>
```

## Funciones de la biblioteca

### 1. validarCorreo(correo)

Valida que un texto tenga un formato básico de correo electrónico.

```javascript
validarCorreo(correo)
```

**Parámetro:**

* `correo`: cadena de texto que contiene el correo electrónico.

**Retorna:**

* `true` si el formato es válido.
* `false` si el formato no es válido.

**Ejemplo:**

```javascript
validarCorreo("ejemplo@gmail.com");
```

Resultado:

```text
true
```

---

### 2. soloLetras(texto)

Valida que un texto contenga únicamente letras, espacios, acentos y la letra ñ.

```javascript
soloLetras(texto)
```

**Parámetro:**

* `texto`: texto que se desea validar.

**Retorna:**

* `true` si solamente contiene letras.
* `false` si contiene números u otros caracteres no permitidos.

**Ejemplo:**

```javascript
soloLetras("Jhonatan Poblete");
```

Resultado:

```text
true
```

---

### 3. validarLongitud(numero, maxLongitud)

Valida que un número no supere una cantidad máxima de dígitos.

```javascript
validarLongitud(numero, maxLongitud)
```

**Parámetros:**

* `numero`: número que se desea validar.
* `maxLongitud`: cantidad máxima de dígitos permitidos.

**Retorna:**

* `true` si el número cumple con la longitud.
* `false` si supera la longitud establecida.

**Ejemplo:**

```javascript
validarLongitud(25, 2);
```

Resultado:

```text
true
```

En el formulario esta función se utiliza para validar la edad calculada y comprobar que no tenga más de dos dígitos.

---

### 4. calcularEdad(fechaNacimiento)

Calcula la edad de una persona utilizando su fecha de nacimiento y la fecha actual.

```javascript
calcularEdad(fechaNacimiento)
```

**Parámetro:**

* `fechaNacimiento`: fecha de nacimiento en formato `YYYY-MM-DD`.

**Retorna:**

* La edad de la persona expresada en años.

**Ejemplo:**

```javascript
calcularEdad("2000-05-10");
```

Resultado aproximado:

```text
26
```

---

### 5. esMayorDeEdad(fechaNacimiento)

Determina si una persona tiene 18 años o más.

```javascript
esMayorDeEdad(fechaNacimiento)
```

**Parámetro:**

* `fechaNacimiento`: fecha de nacimiento.

**Retorna:**

* `true` si la persona tiene 18 años o más.
* `false` si es menor de edad.

**Ejemplo:**

```javascript
esMayorDeEdad("2000-05-10");
```

Resultado:

```text
true
```

---

### 6. validarPassword(password)

Valida que una contraseña cumpla con los requisitos de seguridad establecidos.

La contraseña debe contener:

* Mínimo 8 caracteres.
* Una letra mayúscula.
* Una letra minúscula.
* Un número.
* Un carácter especial.

```javascript
validarPassword(password)
```

**Parámetro:**

* `password`: contraseña que se desea validar.

**Retorna:**

* `true` si cumple todos los requisitos.
* `false` si no cumple alguno.

**Ejemplo:**

```javascript
validarPassword("Hola123!");
```

Resultado:

```text
true
```

## Funciones propias

Además de las funciones solicitadas, se agregaron dos funciones adicionales.

### 7. formatearNombre(nombre)

Convierte un nombre para que la primera letra de cada palabra aparezca en mayúscula.

```javascript
formatearNombre(nombre)
```

**Parámetro:**

* `nombre`: nombre que se desea formatear.

**Retorna:**

* El nombre con un formato más adecuado.

**Ejemplo:**

```javascript
formatearNombre("JHONATAN POBLETE");
```

Resultado:

```text
Jhonatan Poblete
```

---

### 8. validarTelefono(telefono)

Valida que un número telefónico contenga exactamente 10 dígitos.

```javascript
validarTelefono(telefono)
```

**Parámetro:**

* `telefono`: número telefónico que se desea validar.

**Retorna:**

* `true` si contiene exactamente 10 dígitos.
* `false` si contiene una cantidad diferente de dígitos o caracteres no numéricos.

**Ejemplo:**

```javascript
validarTelefono("9511234567");
```

Resultado:

```text
true
```

## Integración con el formulario

La biblioteca se utiliza en `index.html`, donde se creó un formulario de registro con los siguientes campos:

* Nombre.
* Correo electrónico.
* Teléfono.
* Fecha de nacimiento.
* Contraseña.

Al enviar el formulario se realizan diferentes validaciones utilizando las funciones de la biblioteca.

El proceso realiza las siguientes acciones:

1. Valida que el nombre solamente contenga letras.
2. Valida el formato del correo.
3. Valida que el teléfono tenga exactamente 10 dígitos.
4. Comprueba que se haya seleccionado una fecha de nacimiento.
5. Calcula la edad.
6. Comprueba que la fecha no sea futura.
7. Valida la longitud de la edad.
8. Valida la contraseña.
9. Determina si la persona es mayor de edad.
10. Formatea el nombre.
11. Muestra los resultados mediante un modal.
12. Muestra información adicional en la consola del navegador.

## Modal

Después de completar correctamente el formulario, se muestra un modal con información del usuario.

El modal muestra:

```text
Hola Jhonatan Poblete.

Tu edad es: XX años.
Mayor de edad: Sí/No
```

También cuenta con un botón para cerrar el mensaje.

## Login

El archivo `login.html` utiliza las funciones:

```javascript
validarCorreo(correo)
validarPassword(password)
```

El usuario debe introducir un correo y una contraseña válidos.

Si los datos cumplen las condiciones, se muestra:

```text
Inicio de sesión correcto.
```

Si algún dato no es válido, se muestra un mensaje indicando el problema.

## Resultados en consola

Durante el registro también se muestran los resultados de las validaciones en la consola del navegador.

Ejemplo:

```text
Formulario validado correctamente.
Nombre: Jhonatan Poblete
Correo: ejemplo@gmail.com
Teléfono: 9511234567
Edad: XX
Mayor de edad: true
```

## Capturas de pantalla

### Formulario de registro

(img/Formulario.png)

### Modal con resultado

(img/Modal.png)

### Página de Login

(img/Login.png)

### Consola del navegador

(img/Consola.png)

## Video de demostración

Se realizó un video corto de demostración del funcionamiento del proyecto.

El video muestra:

1. El problema que resuelve la biblioteca.
2. El formulario de registro.
3. Las validaciones.
4. El cálculo de edad.
5. El modal con el resultado.
6. El funcionamiento del login.

**Video de demostración:**

https://www.youtube.com/

## GitHub

Repositorio del proyecto:

https://github.com/jpelon-jpg/Actividad_2

## GitHub Pages

Página web del proyecto:

https://jpelon-jpg.github.io/Actividad_2/

## Conclusión

El proyecto permitió desarrollar una biblioteca de funciones reutilizables en JavaScript y aplicarlas en diferentes formularios web.

Las funciones creadas permiten validar información de los usuarios, calcular la edad, comprobar la mayoría de edad y validar contraseñas. Además, las funciones propias permiten complementar el proyecto mediante el formato de nombres y la validación de números telefónicos.
