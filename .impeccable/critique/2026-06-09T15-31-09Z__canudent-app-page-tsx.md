---
target: landing page
total_score: 24
p0_count: 1
p1_count: 2
timestamp: 2026-06-09T15-31-09Z
slug: canudent-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No scroll progress, no loading states; nav active state missing |
| 2 | Match System / Real World | 4 | Copy en español claro, iconos reconocibles, lenguaje de paciente |
| 3 | User Control and Freedom | 3 | Navegación fluida; mobile menu sin Esc/overlay dismiss |
| 4 | Consistency and Standards | 3 | Sistema de tokens coherente; hover states discrepantes entre botones |
| 5 | Error Prevention | 2 | Sin formulario real, sin validación; CTAs llevan a ancla vacía |
| 6 | Recognition Rather Than Recall | 3 | Servicios visibles, CTA prominente; ítems de footer sin href real |
| 7 | Flexibility and Efficiency | 2 | Un solo camino de conversión; sin click-to-call en móvil desde hero |
| 8 | Aesthetic and Minimalist Design | 3 | Limpio en general; image placeholder activo en producción es ruido |
| 9 | Error Recovery | 1 | Sin formulario de contacto ni estados de error implementados |
| 10 | Help and Documentation | 1 | Sin FAQ, sin información de precios visible, sin pasos del proceso |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment**: La página tiene los marcadores clásicos de una landing generada por IA: kicker uppercase sobre el encabezado de servicios ("NUESTROS SERVICIOS"), tres cards idénticas icono+título+texto con hover uniforme, y un CTA band azul con gradiente lineal. Estos tres elementos juntos constituyen el "template de SaaS de 2023" traducido al español. La imagen del hero es un placeholder de color liso con texto "Foto de paciente", lo que convierte toda la sección en una maqueta.

**Deterministic scan**: 1 finding — `layout-transition` en Navbar.tsx:161: `transition: width`. Ningún otro antipatrón detectado (sin gradient-text, sin glassmorphism masivo, sin side-stripe borders).

## Overall Impression

La estructura es sólida y la jerarquía de información es correcta. El sistema de tokens es limpio. Pero la página no puede salir a producción: la imagen del hero es un rectángulo vacío con texto de placeholder, las CTAs llevan a un ancla sin destino real, y el patrón triple-card con kicker uppercase es el sello más reconocible del scaffolding de IA.

## What's Working

**1. Sistema de tokens consistente.** `--accent`, `--muted`, `--ink`, `--line` se usan de forma disciplinada. La paleta es coherente de navbar a footer.

**2. Copy orientado al paciente.** "Cuidamos de ti y de toda tu familia en un espacio donde te sentirás como en casa" es específico y cálido. La trust row está bien colocada.

**3. Floating cards del hero.** El card "Abierto hoy" y el "+15 años" rompen bien la composición hero estándar y añaden personalidad.

## Priority Issues

**[P0] La imagen del hero es un placeholder activo**
- **Why**: Un rectángulo azul claro con texto "Foto de paciente sonriendo / clínica" destruye la credibilidad ante cualquier visitante real.
- **Fix**: Sustituir por una fotografía real o stock de alta calidad.
- **Suggested command**: /impeccable polish

**[P1] Kicker uppercase + triple card identica = scaffolding AI**
- **Why**: La combinación "NUESTROS SERVICIOS" uppercase + tres cards icono-redondo uniformes es el patrón mas fotografiado como "AI made this" en 2025-2026.
- **Fix**: Eliminar el kicker uppercase. Variar la estructura visual de las cards.
- **Suggested command**: /impeccable bolder

**[P1] Las CTAs no llevan a ningún destino funcional**
- **Why**: "Pedir cita" y "Reservar primera visita" enlazan a #contacto (el footer). No hay formulario. El usuario que llega convencido no tiene forma de reservar.
- **Fix**: Implementar formulario de reserva o enlazar a sistema externo (Calendly, Doctoralia).
- **Suggested command**: /impeccable harden

**[P2] Navbar sin estado activo en links de sección**
- **Why**: Al hacer scroll el usuario no sabe en qué sección está.
- **Fix**: IntersectionObserver para detectar sección activa.
- **Suggested command**: /impeccable animate

**[P2] transition: width causa layout thrash**
- **Why**: Animar propiedades de layout en el scroll path es costoso.
- **Fix**: Reemplazar por transform: scaleX() en Navbar.tsx:161.
- **Suggested command**: /impeccable optimize

## Persona Red Flags

**Jordan (Paciente nuevo)**: Hace clic en "Pedir cita". Llega al footer. No hay formulario. Abandona. Red flag critico: la promesa del CTA no se cumple.

**Casey (Mobile user)**: Los floating cards con posicionamiento negativo (-34px left, -26px right) pueden estar cortados fuera del viewport en pantallas de 375px. El CTA del navbar desaparece en mobile pero no hay CTA fijo en thumb-zone.

**Sam (Accessibility)**: Mobile menu sin aria-expanded, sin role="dialog", sin trampa de foco. Service cards solo con onMouseEnter/Leave sin equivalente de teclado. Nav links sin aria-current.

## Minor Observations

- CTA band gradient de dos azules casi identicos (accent a accent-deep): visualmente es un sólido; el gradiente no aporta valor.
- Links en footer (Servicios, Clinica) tienen href="#" — envian al top de la página.
- Secciones "Equipo" y "Tarifas" aparecen en nav pero no existen en la página.
- Sin text-wrap: balance en headings.

## Questions to Consider

- "Si un paciente llega buscando 'dentista Madrid urgente', qué encuentra? Hay información de disponibilidad inmediata?"
- "El gradiente del CTA band existe porque añade algo o porque los CTAs llevan gradiente?"
- "Una foto de la clínica vs una foto de un paciente: qué comunica cada opción?"
