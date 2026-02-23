---
title: "Documentar sin volverte loco en el intento"
date: "2026-02-22"
excerpt: "Cómo convertir el trabajo que ya hacés en documentación que otros realmente usan."
---

# Documentar sin volverte loco en el intento

Hace poco me incorporé en Mercado Libre. Vengo de experiencias donde el orden, la documentación y la evidencia del trabajo eran parte del proceso desde el principio, así que cuando resuelvo algo tiendo a ser bastante detallado en cómo lo registro. Al principio puede parecer excesivo, incluso una pérdida de tiempo.

Pero no pasó mucho tiempo antes de que un compañero con más seniority me comentara algo que me confirmó que valía la pena. Otro de los nuevos le había escrito para preguntarle sobre un procedimiento, y él, en lugar de explicarlo de cero, le había pasado directamente una tarea mía donde estaba todo documentado. Eso es exactamente lo que este hábito produce cuando funciona: el conocimiento deja de depender de que la persona indicada esté disponible.

No es la primera vez que lo veo pasar. En Voxel Group, donde estuve casi tres años, documentar dentro de las tareas se volvió una práctica natural del equipo. Cuando alguien necesitaba entender cómo se había resuelto algo similar, la respuesta casi siempre era un enlace a una tarea anterior.

## Por qué la wiki no funciona

La promesa de Confluence o Notion es atractiva: un lugar centralizado donde vive todo el conocimiento del equipo, organizado, buscable, siempre disponible. En teoría, perfecto.

En la práctica, el problema es el mantenimiento. Escribir documentación por fuera del flujo de trabajo es una actividad que compite con todo lo demás. Requiere recordar que hay que hacerlo, decidir dónde va, escribirla en un formato aceptable, y luego mantenerla actualizada cada vez que algo cambia. Esa última parte es, por lejos, la más difícil.

Lo que termina pasando es predecible: la documentación se escribe con entusiasmo al inicio y se abandona progresivamente. Los artículos más valiosos son los más viejos. Y nadie sabe si lo que está leyendo refleja cómo funciona el sistema hoy o cómo funcionaba hace dieciocho meses.

El problema no es que los equipos sean descuidados. Es que el formato exige un esfuerzo separado del trabajo, y ese esfuerzo rara vez sobrevive la presión del día a día.

## Documentar adentro de la tarea

Lo que propongo es más simple: documentar dentro de las mismas tareas, historias de usuario o issues que ya usás para trabajar.

Cuando empiezo a resolver algo que implica pasos no triviales, como interactuar con distintos sistemas, recolectar información de varias fuentes o seguir un procedimiento específico, voy dejando comentarios dentro de esa misma tarea. No en un doc aparte, no en una wiki nueva. Ahí, en Jira, en Linear, en GitHub Issues, donde viva el trabajo.

Para que no quede abstracto, así se ve en la práctica. Supongamos una tarea de "configurar el pipeline de staging":

- **Comentario 1** (mientras trabajás): _"El paso 3 requiere permisos de IAM que no están en la doc oficial. Hay que pedirlos a DevOps antes de empezar."_
- **Comentario 2** (cuando lo resolvés): _"El comando que funcionó fue `aws iam attach-role-policy --role-name staging-deployer --policy-arn arn:aws:iam::ACCOUNT_ID:policy/StagingDeploy`. El ARN de la policy está en el doc de onboarding."_
- **Comentario 3** (al cerrar): _"Enlazada con [TASK-142] donde se hizo algo similar para producción, misma estructura, distintas variables de entorno."_

Esos tres comentarios no tomaron más de diez minutos en total. Y forman algo que ninguna wiki genera naturalmente: una línea del tiempo de lo que fue pasando, con las decisiones intermedias y el contexto que las explica. No es un artículo genérico sobre "cómo hacer X", es el registro de cómo se hizo X en esta tarea específica. Y a diferencia de una wiki, no hay que decidir dónde va, no hay formato obligatorio, y solo termina documentado lo que realmente requirió trabajo.

## El árbol de referencias

Una de las partes más útiles de este enfoque es cómo maneja los cambios a lo largo del tiempo.

Supongamos que documentaste el proceso para hacer un deploy. Seis meses después, el proceso cambió parcialmente. En lugar de editar la documentación vieja y perder el historial, creás la nueva tarea, documentás el proceso actualizado, y enlazás desde ahí a la tarea anterior. La antigua queda como referencia histórica, la nueva como el procedimiento vigente.

En Voxel esto fue una práctica sostenida durante los casi tres años que estuve, con equipos que fueron cambiando y creciendo. En la práctica, el árbol nunca superó los tres niveles de profundidad: cuando un proceso variaba tanto como para no reconocer la base original, tenía más sentido reemplazarla que seguir encadenando. Pero dentro de esos tres niveles, podías rastrear cómo había evolucionado algo, qué había cambiado y por qué, sin preguntarle a nadie. Eso es difícil de conseguir con una wiki tradicional, donde editar borra el historial y la versión anterior simplemente desaparece.

## Errores comunes al documentar

**Documentar demasiado tarde.** Cuando terminás la tarea y querés escribir todo de memoria, perdés los detalles que importan. El valor está en documentar mientras hacés, no después.

**Querer que quede perfecto de entrada.** Los comentarios en una tarea no necesitan ser prosa pulida. Un bullet, una URL, una decisión anotada en una línea. Con eso alcanza. El perfeccionismo es el principal enemigo de la documentación.

**Poner la información en demasiados lugares.** El error clásico de los equipos grandes: la misma información en Confluence, en Notion, en un README y en un canal de Slack. Cuando algo cambia, se actualiza en un lugar y el resto queda desincronizado. Tener una fuente de verdad, aunque sea imperfecta, es mejor que tener cuatro fuentes perfectas que divergen.

**Asumir que otros van a encontrarla sola.** Documentar es la mitad del trabajo. La otra mitad es hacerla descubrible. Enlazá desde el código, mencioná la tarea en las discusiones, instalá el hábito de buscar antes de preguntar.

## Para empezar

No hace falta cambiar nada en el equipo para probar esto. La próxima vez que estés trabajando en algo que implique más de dos pasos no obvios, dejá un comentario en la tarea. Solo eso.

El valor se hace evidente la primera vez que volvés a necesitar esa información y la encontrás ahí, con el contexto completo, sin tener que reconstruirla de cero. O mejor todavía, cuando alguien más la encuentra antes de preguntarte.

_— Juan Cruz Medina_
