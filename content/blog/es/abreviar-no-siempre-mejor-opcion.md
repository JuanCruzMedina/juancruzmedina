---
title: "Por qué la abreviación no es necesariamente la mejor opción"
date: "2026-02-22"
excerpt: "Abreviar nombres de variables, funciones o tipos ahorra tecleo pero puede costar legibilidad y mantenibilidad. Cuándo conviene y cuándo no."
---

# Abreviar en código: ¿cuándo ayuda y cuándo arruina todo?

Hay una abreviación que me hace cerrar el PR sin revisarlo: `fl` para un booleano.

No porque sea la peor del mundo, sino porque es el síntoma más claro de un hábito que parece inocente y termina siendo caro: abreviar sin criterio, en el momento de escribir, sin pensar en quien lo va a leer después.

## El costo que no se ve

El código se escribe una vez pero se lee muchas veces. Cuando abreviamos, tomamos un atajo que nos beneficia en el momento de escribir pero que puede perjudicar a cualquiera que lo lea después, incluyendo nuestro yo del futuro.

```python
def calc(a: int, b: int, fl: bool) -> int:
    return a * b if fl else a + b
```

¿Qué hace esta función? Hay que adivinar. Ahora comparalo con esto:

```python
def calculate_total(base_price: int, quantity: int, apply_discount: bool) -> int:
    return base_price * quantity if apply_discount else base_price + quantity
```

La segunda versión no necesita comentario. Se explica sola. La legibilidad no es un lujo, es parte del trabajo.

## Cuándo sí tiene sentido abreviar

No toda abreviación es mala. Hay contextos donde es completamente válido, y forzar el nombre completo puede hacer el código artificialmente verboso.

**Convenciones ampliamente conocidas.** Algunas abreviaciones son tan estándar en el ecosistema que escribirlas completas sería lo raro: `i`, `j`, `k` para iteradores de bucles cortos; `e` o `exc` para excepciones en bloques `except`; `cls` para el primer parámetro de métodos de clase; `args` y `kwargs` para argumentos variables; `id` para identifier. Si tu equipo usa Go, Rust o cualquier otro lenguaje con convenciones propias, respetarlas pesa más que cualquier regla general.

**Scope muy acotado.** Cuando una variable vive solo unas pocas líneas y su propósito es obvio por el contexto, abreviar es razonable:

```python
nums: list[int] = [1, 2, 3, 4, 5]
doubled: list[int] = [n * 2 for n in nums]
```

Acá, `n` es perfectamente legible. El contexto lo explica todo.

**Nombres de dominio consolidados.** Si tu aplicación tiene terminología propia y el equipo la usa consistentemente en toda la codebase, romperla puede generar más confusión que mantenerla.

## Cuándo no abreviar

**Funciones y métodos.** El nombre de una función es su contrato. Si tenés que adivinar qué hace, el nombre está mal.

```python
# ❌
def proc_usr(data: dict) -> None: ...

# ✅
def process_user_registration(data: dict) -> None: ...
```

Un nombre de función largo y claro es casi siempre mejor que uno corto y ambiguo. El autocompletado existe, el costo de escribirlo es mínimo.

**Variables con vida larga.** Cuanto más tiempo vive una variable en el código y más lejos de donde se define, más descriptivo tiene que ser su nombre. Si se define en la línea 10 y se usa en la 80, necesita cargarse sola.

**Parámetros de funciones públicas.** Los parámetros son la interfaz de tu función. Si alguien va a llamar a tu código desde otro módulo, los nombres tienen que hablar por sí solos.

```python
# ❌
def send(to: str, subj: str, bod: str) -> None: ...

# ✅
def send_email(recipient: str, subject: str, body: str) -> None: ...
```

**Booleanos.** Los booleanos abreviados son una fuente clásica de bugs silenciosos. El nombre tiene que dejar en claro qué significa `True` y qué significa `False`.

```python
# ❌ ¿Qué es True acá?
fl: bool = True
actv: bool = False

# ✅
is_discount_applied: bool = True
is_account_active: bool = False
```

**Clases y tipos.** Los tipos se usan en muchos lugares. Abreviarlos genera confusión a medida que el proyecto crece.

```python
# ❌
class UsrMgr: ...

# ✅
class UserManager: ...
```

## La prueba que siempre funciona

_"Si alguien que no conoce el dominio lee esta línea dentro de seis meses, ¿va a entender qué hace sin buscar nada más?"_

Si la respuesta es sí, el nombre está bien. Si tenés que dudar, cambialo.

También podés usar la prueba del pull request: si en una revisión necesitás explicar qué significa una variable o función, es señal de que el nombre no es suficientemente claro.

## De un vistazo

| ✅ Abreviar está bien                                 | ❌ Mejor no abreviar             |
| ----------------------------------------------------- | -------------------------------- |
| Convenciones del lenguaje (`i`, `cls`, `exc`, `args`) | Nombres de funciones y métodos   |
| Variables en scope muy acotado                        | Parámetros de funciones públicas |
| Términos de dominio consolidados en el equipo         | Variables con vida larga         |
| Iteradores de bucles y comprensiones                  | Booleanos                        |
| Abreviaciones universales (`id`, `url`, `dto`)        | Clases y tipos personalizados    |

La regla de oro no es "nunca abrevies" ni "abreviar ahorra tiempo". Es algo más simple: el código que escribís hoy lo vas a leer vos, tu equipo, o alguien que todavía no conocés. Escribilo para ellos.

_— Juan Cruz Medina_
