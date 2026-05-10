# AGENTS.md

## Contexto del proyecto

Este proyecto es una landing frontend estática construida con React + Vite.

La web se desarrolla desde cero para un cliente real, normalmente un negocio local de Necochea, Buenos Aires, con foco en presencia digital, SEO local y conversión por WhatsApp.

El objetivo es crear una landing moderna, profesional, vendible y lista para presentar a un cliente real.

---

## Objetivo principal

Construir una landing one-page de alta calidad visual para un negocio local.

La web debe:

- Verse profesional, moderna y confiable.
- Funcionar correctamente en desktop, tablet y mobile.
- Convertir visitantes en contactos por WhatsApp.
- Comunicar claramente qué ofrece el negocio.
- Mejorar la presencia local en Google.
- Ser fácil de editar en el futuro.
- Mantener una implementación compacta y ordenada.

---

## Stack obligatorio

Usar:

- React
- Vite
- JavaScript
- CSS moderno

No usar backend.

No usar:

- Node server
- Express
- Firebase
- Base de datos
- Autenticación
- Panel admin
- APIs privadas
- Rutas múltiples
- E-commerce funcional
- Carrito real
- Pasarelas de pago
- Formularios con envío real

Si se necesita un formulario, debe ser visual o enviar a WhatsApp/mailto.

---

## Alcance funcional

La web debe ser una landing estática one-page.

Puede incluir:

- Navbar
- Hero
- Beneficios
- Productos o servicios destacados
- Diferenciales
- Galería visual simulada
- Horarios
- Ubicación
- CTA a WhatsApp
- Footer

No debe incluir funcionalidades complejas.

No crear una app multipágina salvo pedido explícito.

No agregar routing si no es necesario.

---

## Reglas para evitar diffs demasiado grandes

Este proyecto suele trabajarse con Codex, por lo tanto es importante evitar cambios enormes.

Reglas obligatorias:

- Crear solo los archivos necesarios.
- Evitar arquitectura sobredimensionada.
- No dividir cada sección en un componente separado si eso agranda innecesariamente el proyecto.
- Preferir una implementación compacta, clara y mantenible.
- No agregar dependencias nuevas salvo que sea estrictamente necesario.
- No agregar imágenes pesadas.
- No agregar videos.
- No agregar fuentes locales.
- No agregar binarios.
- No agregar archivos generados innecesarios.
- No generar código minificado.
- No modificar `package.json` salvo necesidad real.
- No modificar `package-lock.json` salvo necesidad real.
- No modificar `vite.config.js` salvo necesidad real.
- No crear carpetas o componentes innecesarios.
- No hacer refactors globales.
- No agregar librerías de animación si se puede resolver con CSS.
- No instalar Tailwind si no está previamente configurado.

Si el cambio requerido parece demasiado grande, implementar una primera versión completa pero compacta.

---

## Estructura recomendada

Preferir una estructura simple:

```text
src/
  App.jsx
  App.css
  main.jsx
```

Opcionalmente se puede agregar:

```text
src/
  data.js
```

Solo crear más archivos si realmente mejora la claridad del proyecto.

Evitar estructuras como esta salvo que el proyecto lo justifique:

```text
src/
  components/
    Hero.jsx
    Navbar.jsx
    Benefits.jsx
    Services.jsx
    Gallery.jsx
    Footer.jsx
```

Una landing simple no necesita demasiada fragmentación.

---

## Estilo visual esperado

La landing no debe verse básica, genérica ni como una plantilla sin diseño.

Evitar:

- Diseño tipo Bootstrap default.
- Secciones planas una debajo de otra.
- Fondos blancos repetidos sin composición.
- Grillas de cards repetidas.
- Botones genéricos.
- Cards simples sin jerarquía visual.
- Textos genéricos o vacíos.
- Lorem ipsum.
- Diseño monótono.

Buscar:

- Diseño moderno.
- Estética minimalista pero comercial.
- Hero fuerte.
- Buena jerarquía tipográfica.
- Espaciados amplios.
- Paleta consistente.
- Contraste visual.
- Cards con profundidad sutil.
- Bordes cuidados.
- Microinteracciones suaves.
- Botones con hover.
- Composición variada.
- Secciones con identidad propia.
- CTA visible hacia WhatsApp.
- Experiencia mobile-first.

---

## Regla de variedad visual

La landing no debe ser una sucesión monótona de secciones con título + grilla de cards.

Máximo 2 secciones pueden estar basadas principalmente en cards.

Cada sección debe tener una intención visual diferente.

Usar pattern breaks, por ejemplo:

- Hero editorial con fuerte contraste visual.
- Banda horizontal con beneficios o métricas.
- Sección tipo manifiesto con frase grande.
- Split-screen con texto y bloque visual.
- Timeline o proceso paso a paso.
- Comparativa antes/después.
- Bloque de horarios destacado.
- CTA intermedio con fondo diferenciado.
- Ubicación con mapa integrado de forma premium.
- Footer con estructura cuidada.

---

## Secciones sugeridas

La landing debería incluir, salvo que el contexto indique otra cosa:

1. Navbar limpio o sticky.
2. Hero con propuesta de valor clara.
3. CTA principal a WhatsApp.
4. Beneficios principales.
5. Productos o servicios destacados.
6. Diferenciales del negocio.
7. Bloque visual o galería simulada.
8. Horarios o información práctica.
9. Ubicación o zona de atención.
10. CTA final.
11. Footer profesional.

No todas las secciones deben tener el mismo formato visual.

---

## WhatsApp como conversión principal

La conversión principal debe ser WhatsApp.

Usar enlaces con formato:

```text
https://wa.me/549XXXXXXXXXX
```

Si no se conoce el número real, dejar un placeholder claro y fácil de reemplazar.

Ejemplo:

```text
https://wa.me/5490000000000
```

Los CTA deben tener textos comerciales, por ejemplo:

- Consultar por WhatsApp
- Pedir información
- Solicitar presupuesto
- Hacer una consulta
- Ver disponibilidad
- Escribir ahora

Evitar botones genéricos como:

- Click aquí
- Enviar
- Más información

---

## SEO local

La landing debe estar optimizada para SEO local.

Incluir:

- Un único H1 claro.
- Title optimizado.
- Meta description.
- Open Graph básico.
- HTML semántico.
- Textos reales y naturales.
- Keywords locales integradas sin forzar.
- Mención de ciudad y zona de atención.
- Rubro del negocio.
- Servicios/productos principales.

Ejemplos de keywords locales:

- `[rubro] en Necochea`
- `[producto o servicio] en Necochea`
- `[nombre del negocio]`
- `[rubro] cerca de mí`
- `[servicio] en Quequén` si aplica

No hacer keyword stuffing.

---

## JSON-LD / LocalBusiness

Agregar JSON-LD de tipo `LocalBusiness` solo si hay datos suficientes y confiables.

No inventar:

- Dirección
- Teléfono
- Horarios
- Redes sociales
- Sitio web
- Coordenadas
- Email

Si falta información, omitir esos campos o dejar placeholders claramente editables.

---

## Contenido

El contenido debe sonar real, comercial y específico para el negocio.

No usar lorem ipsum.

No inventar información sensible o verificable.

Si falta información real, usar textos editables pero honestos.

Ejemplo correcto:

```text
Atención personalizada y soluciones para clientes de Necochea y la zona.
```

Ejemplo incorrecto:

```text
Más de 40 años de trayectoria familiar.
```

No afirmar trayectoria, premios, certificaciones, stock, marcas o garantías si no fueron informadas.

---

## Imágenes y recursos visuales

No agregar imágenes externas pesadas.

No descargar imágenes.

No agregar fotos inventadas del negocio.

Si no hay imágenes reales, usar:

- Gradientes.
- Bloques visuales con CSS.
- Íconos simples.
- Patrones.
- Mockups visuales.
- Tarjetas abstractas.
- Elementos decorativos livianos.

Si se usan emojis, hacerlo con moderación.

---

## Íconos

No instalar librerías de íconos si no existen previamente.

Preferir:

- Íconos con CSS.
- Caracteres Unicode.
- SVG inline simples.
- Elementos visuales creados con CSS.

No agregar paquetes nuevos solo para íconos.

---

## Animaciones

Usar animaciones suaves y profesionales.

Permitido:

- Hover states.
- Transiciones de botones.
- Apariciones suaves.
- Transformaciones sutiles.
- Sombras dinámicas.
- Microinteracciones.

Evitar:

- Animaciones excesivas.
- Movimiento constante.
- Efectos que distraigan.
- Librerías externas de animación salvo necesidad real.

Preferir CSS.

---

## Responsive design

La web debe ser mobile-first.

Verificar:

- Navbar usable en mobile.
- Hero claro en pantallas pequeñas.
- CTA visible.
- Textos legibles.
- Cards o bloques bien apilados.
- Espaciados adecuados.
- Mapa o ubicación responsive.
- Footer ordenado.

No diseñar solo para desktop.

---

## Accesibilidad

Cuidar criterios básicos de accesibilidad:

- Buen contraste.
- Botones claros.
- Links reconocibles.
- Textos alternativos si hay imágenes.
- HTML semántico.
- Jerarquía correcta de headings.
- No depender solo del color para comunicar.
- Tamaños de fuente legibles.

---

## Performance

La landing debe ser liviana.

Evitar:

- Assets pesados.
- Librerías innecesarias.
- Imágenes sin optimizar.
- Videos.
- Fuentes locales grandes.
- Animaciones costosas.
- Código duplicado.

Priorizar carga rápida y simplicidad.

---

## Calidad de código

El código debe ser:

- Limpio.
- Fácil de editar.
- Bien indentado.
- Sin duplicación innecesaria.
- Con nombres claros.
- Sin comentarios excesivos.
- Sin código muerto.
- Sin imports no usados.
- Sin warnings evidentes.

No crear abstracciones innecesarias.

---

## Reglas para textos del cliente

Cuando se construya la landing, adaptar los textos al rubro real.

Ejemplos por rubro:

### Ferretería

Enfocar en:

- Herramientas.
- Insumos.
- Atención rápida.
- Soluciones para obra, hogar y mantenimiento.
- Stock local.
- Asesoramiento.

### Café

Enfocar en:

- Experiencia.
- Ambiente.
- Productos.
- Desayunos/meriendas.
- Cercanía.
- Identidad visual.
- Ubicación.

### Bulonera

Enfocar en:

- Bulonería.
- Fijaciones.
- Herramientas.
- Industria.
- Talleres.
- Construcción.
- Atención técnica.

### Estética

Enfocar en:

- Confianza.
- Cuidado personal.
- Turnos.
- Servicios.
- Resultados.
- Atención personalizada.

No usar textos genéricos que puedan aplicar a cualquier negocio.

---

## Integración de mapa

Si existe una URL válida de Google Maps, incluir una sección de ubicación.

Si no hay iframe embebible, usar un botón externo a Google Maps.

Si no hay dirección o mapa, crear una sección de zona de atención sin inventar datos.

---

## Criterio de terminado

Antes de finalizar cualquier cambio, revisar el resultado como si fueras:

- Diseñador senior.
- Especialista en UX.
- Desarrollador frontend.
- Consultor SEO local.
- Dueño del negocio.

Mejorar cualquier parte que se vea:

- Básica.
- Vacía.
- Repetitiva.
- Genérica.
- Poco comercial.
- Mal jerarquizada.
- Poco clara en mobile.

La landing debe sentirse como una web que podría venderse a un cliente real.

---

## Resultado esperado

Al terminar, la web debe:

- Compilar correctamente.
- Verse bien en mobile y desktop.
- Tener CTA claro a WhatsApp.
- Tener diseño profesional.
- Tener SEO local básico.
- Ser estática.
- No depender de backend.
- No tener assets pesados.
- Mantener un diff razonable.
- Ser fácil de personalizar para otros clientes.

---

## Comandos útiles

Usar los comandos existentes del proyecto.

Normalmente:

```bash
npm install
npm run dev
npm run build
```

No instalar paquetes nuevos salvo necesidad real.

Si se modifica código, intentar verificar que el proyecto compile con:

```bash
npm run build
```

---

## Instrucción final para Codex

No priorices solamente que la landing “funcione”.

Priorizá que se vea profesional, vendible y lista para mostrar a un cliente real, manteniendo el código simple y el alcance controlado.
