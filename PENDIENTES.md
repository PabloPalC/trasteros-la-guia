# Pendientes para pasar el boceto a web final

Datos inventados o supuestos que hay que confirmar con la familia. En el HTML siguen marcados con la clase `pending` / `pending-inline` (sin estilo visual) para localizarlos rápido.

## Contacto
- [ ] Teléfono (ahora `600 000 000` / `+34600000000`): sale en header, hero, selector de tamaños, "para quién", contacto, botón flotante, barra móvil y JSON-LD.
- [ ] WhatsApp: ¿es el mismo número?
- [ ] Dirección exacta y código postal (ahora "Calle pendiente, La Guía, 30205").
- [ ] Coordenadas reales (JSON-LD `geo` y meta `geo.position`) y mapa embebido con la ubicación exacta.
- [ ] Horario (ahora L–V 9:00–20:00 · S 9:00–14:00): tarjeta "Horario amplio", contacto, FAQ y JSON-LD.

## Tamaños y precios
- [ ] Tamaños reales (ahora 5 / 14 / 28 m²) y cuántos tipos hay (ahora 3).
- [ ] Precios reales (ahora desde 45 / 85 / 140 €/mes, IVA incluido). También en `script.js` (array `sizes`), tarjeta flotante del hero, cifras, meta description, title, FAQ y JSON-LD (`makesOffer`, `priceRange`).
- [ ] Alquiler mínimo / permanencia.

## Afirmaciones por confirmar
- [ ] Cámaras grabando 24 h (tarjeta del hero y cifra "24 h").
- [ ] "A 5 minutos del centro" (hero, ventajas y cifras).
- [ ] Oferta "Primer mes al 50 %" y "Sin permanencia" (topbar y bloque promo): idea copiada de la competencia (Trastelia); decidir si se quiere.
- [ ] ¿Alquilan a empresas y autónomos? (bloque "Para quién" y FAQ).

## Contenido
- [ ] Fotos reales (5 huecos en galería): recinto, exterior, interior, cámaras/iluminación, acceso.
- [ ] Reseñas reales de Google (3 huecos).
- [ ] Datos legales: razón social, CIF y textos de aviso legal, privacidad y cookies.

## Al lanzar
- [ ] Dominio (supuesto `trasteroslaguia.es`): canonical, og:url, JSON-LD, robots.txt y sitemap.xml.
- [ ] Cambiar `<meta name="robots">` de `noindex, nofollow` a `index, follow, max-image-preview:large`.
- [ ] Optimizar logos (PNG de 400–800 KB → WebP).
- [ ] Crear ficha de Google Business Profile.
- [ ] Dar de alta en Google Search Console y enviar el sitemap.
