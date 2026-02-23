---
title: "Documentar sin volverte loco en el intento"
date: "2026-02-22"
excerpt: "Cómo convertir el trabajo que ya hacés en documentación que otros realmente usan."
---

# Documentar sin volverte loco en el intento

_Cómo convertir el trabajo que ya hacés en documentación que otros realmente usan._

---

Cada vez que entro a trabajar en una empresa nueva, me encuentro con la misma situación. La documentación existe, pero está desactualizada, repartida en tres herramientas distintas, y nadie sabe con certeza cuál versión es la correcta. O peor, directamente no existe, y el conocimiento vive en la cabeza de las personas que llevan más tiempo en el equipo.

Hace tiempo empecé a experimentar con una forma diferente de documentar. No es un sistema complejo ni requiere disciplina heroica. De hecho, su mayor virtud es que se construye casi sola, como subproducto del trabajo que ya estás haciendo.

---

## El problema con la documentación tradicional

La promesa de una wiki o un Confluence es atractiva. Un lugar centralizado donde vive todo el conocimiento del equipo, organizado, buscable, siempre disponible. En teoría, perfecto.

En la práctica, el problema es el mantenimiento. Escribir documentación por fuera del flujo de trabajo es una actividad que compite con todo lo demás. Requiere recordar que hay que hacerlo, decidir dónde va, escribirla en un formato aceptable, y luego mantenerla actualizada cada vez que algo cambia. Esa última parte es, por lejos, la más difícil.

Lo que termina pasando es predecible: la documentación se escribe con entusiasmo al inicio y se abandona progresivamente. Los artículos más valiosos son los más viejos. Y nadie sabe si lo que está leyendo refleja cómo funciona el sistema hoy o cómo funcionaba hace dieciocho meses.

El problema no es que los equipos sean descuidados. Es que el formato exige un esfuerzo separado del trabajo, y ese esfuerzo rara vez sobrevive la presión del día a día.

---

## La idea: usar el gestor de tareas como primer nivel de documentación

Lo que propongo es más simple. Documentar dentro de las mismas tareas, historias de usuario o issues que ya estás usando para trabajar.

Cuando empiezo a resolver una tarea que implica pasos no triviales (interactuar con diferentes sistemas, recolectar información de varias fuentes, seguir un procedimiento específico) voy dejando comentarios dentro de esa misma tarea. No en un doc aparte, no en una wiki nueva. Ahí, en Jira, en Linear, en GitHub Issues, donde viva el trabajo.

Esos comentarios forman una línea del tiempo natural. Qué hice primero, qué encontré, qué decisión tomé y por qué, qué pasó después. Sin formato especial, sin estructura obligatoria. Solo el registro de lo que fue pasando.

---

## Por qué funciona

La razón principal es que elimina la fricción de decidir _dónde_ va la documentación. Esa pregunta (¿esto va en Confluence, en Notion, en el README, en el canal de Slack?) parece menor pero consume energía real y genera inconsistencias en equipos medianos y grandes.

Cuando la respuesta siempre es "en la tarea", el problema desaparece.

Pero hay más:

**La documentación queda anclada al contexto.** No es un artículo genérico sobre "cómo hacer X". Es el registro de cómo se hizo X en esta tarea específica, con los detalles que importaban en ese momento. Eso la hace más útil y más honesta.

**Se actualiza naturalmente.** Si en el futuro aparece una tarea similar pero el proceso cambió en algún punto, se documenta sobre esa nueva tarea. Y si es una variación — una rama del árbol, no un reemplazo — se documenta ahí mismo y se enlaza con la tarea original. Las referencias se actualizan solas porque viven en el mismo sistema.

**Documenta lo que vale la pena.** Solo terminan documentadas las cosas que realmente requirieron trabajo. No hay presión de documentar por documentar.

---

## El árbol de referencias

Una de las partes más útiles de este enfoque es cómo maneja los cambios.

Supongamos que tenés una tarea donde documentaste el proceso para hacer un deploy. Seis meses después, el proceso cambió parcialmente — hay un paso nuevo, otro desapareció. En lugar de editar la documentación vieja y perder el historial, creás la nueva tarea, documentás el proceso actualizado, y enlazás desde ahí a la tarea anterior. La antigua queda como referencia histórica, la nueva como el procedimiento vigente.

Con el tiempo, esto forma un árbol de referencias: podés rastrear cómo evolucionó un proceso, qué cambió y cuándo, y por qué se tomaron ciertas decisiones. Es algo que ninguna wiki tradicional da de forma natural.

---

## Errores comunes al documentar

Algunos patrones que vale la pena evitar, independientemente del sistema que uses:

**Documentar demasiado tarde.** Cuando terminás la tarea y querés escribir todo de memoria, perdés los detalles que importan. El valor está en documentar mientras hacés, no después.

**Querer que quede perfecto de entrada.** Los comentarios en una tarea no necesitan ser prosa pulida. Un bullet, una URL, una decisión anotada en una línea. Con eso alcanza. El perfeccionismo es el principal enemigo de la documentación.

**Poner la información en el lugar equivocado.** El error clásico de los equipos grandes. La misma información en Confluence, en Notion, en un README y en un canal de Slack. Cuando algo cambia, se actualiza en un lugar y el resto queda desincronizado. Tener una fuente de verdad, aunque sea imperfecta, es mejor que tener cuatro fuentes perfectas que divergen.

**Asumir que otros van a encontrarla sola.** Documentar es la mitad del trabajo. La otra mitad es hacerla descubrible. Enlazar desde el código, mencionar la tarea en las discusiones, instalar el hábito de buscar antes de preguntar.

---

## Lo que esto resuelve en el equipo

Me ha pasado en varias ocasiones que un compañero, a veces alguien con más tiempo en la empresa que yo, llega con una pregunta sobre un proceso y la respuesta está en una tarea de hace meses. Poder señalar ese lugar, con el contexto completo, la línea del tiempo, las decisiones intermedias, tiene un valor que va más allá de resolver la duda puntual.

Genera confianza. Le dice al equipo que el conocimiento está capturado, que no depende de que determinada persona esté disponible, que es posible operar de forma más autónoma.

Para los líderes, el beneficio también pasa por la visibilidad. Las tareas bien documentadas hacen más fácil entender qué pasó en un sprint, por qué se tardó más de lo esperado en algo, o cómo se resolvió un problema técnico complejo.

---

## Para empezar

No hace falta cambiar nada en el equipo para probar esto. La próxima vez que estés trabajando en algo que implique más de dos pasos no obvios, dejá un comentario en la tarea. Solo eso.

Con el tiempo, el hábito se instala solo. Cuando volvés a necesitar esa información y la encontrás ahí, el valor es inmediato y concreto.

Es una de las prácticas de las que más me enorgullece porque no nació de un proceso impuesto, sino de observar un problema real y encontrar la solución más simple posible. Y la mejor señal de que algo funciona es cuando otros la adoptan sin que nadie se los pida.

---

> Documentar no debería ser una tarea aparte. Debería ser la huella natural de trabajar bien.

---

_— Juan Cruz Medina_
