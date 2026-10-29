/**
 * CONTENIDO DEL BLOG
 * Todos los textos están aquí para que los puedas editar fácilmente.
 * Son una referencia: ajústalos a lo que realmente hizo tu grupo.
 */
import type { ImageSize } from '../config/environment';

export interface Shot {
  label: string;
  size?: ImageSize;
  src?: string;
  caption?: string;
}

/* ---------------- Introducción / Hero ---------------- */
export const hero = {
  eyebrow: 'Proyecto final · Electrónica Digital',
  title: 'Automatización inteligente del invernadero de Frutos de Guatemala',
  lead: 'Un sistema basado en microcontroladores que monitorea, registra y controla las variables clave del cultivo en Zacapa, para producir más y mejor usando menos agua, energía y tiempo.',
  shot: {
    label: 'Prototipo: relé controlando la tira LED con los sensores conectados',
    size: 'photo' as ImageSize,
    src: 'circuito-iluminacion-rele.jpg',
    caption: 'El módulo relé enciende la iluminación mientras los sensores se leen en la protoboard',
  },
};

/* ---------------- Problema ---------------- */
export const problem = {
  intro:
    'Frutos de Guatemala opera un invernadero en Zacapa, una región de clima cálido y seco donde el control del microclima y del riego es determinante para la calidad de la cosecha. Hoy el control depende en gran medida de la supervisión manual, lo que genera consumo innecesario de recursos y exposición a errores humanos.',
  needs: [
    { icon: '🌡️', title: 'Monitoreo continuo', text: 'Medir temperatura, humedad ambiental, humedad del suelo, luz y calidad del aire de forma automática y manual.' },
    { icon: '🗄️', title: 'Registro de datos', text: 'Capturar y almacenar las lecturas de todos los sensores para analizar tendencias y tomar mejores decisiones.' },
    { icon: '⚙️', title: 'Actuadores automáticos', text: 'Activar bombas, ventiladores, luces, alarmas y notificaciones según parámetros configurables.' },
    { icon: '🎛️', title: 'Control dual', text: 'Permitir al operador alternar entre modo automático y modo manual para cada componente.' },
    { icon: '🌱', title: 'Salud del suelo', text: 'Evaluar qué tan apto está el suelo para cultivar mediante sensores de suelo.' },
    { icon: '🚪', title: 'Puertas automáticas', text: 'Abrir y cerrar accesos del invernadero según temperatura, viento y condiciones de operación.' },
  ],
  objectives: [
    'Implementar una solución basada en microcontroladores que automatice el control del invernadero, aplicando lo aprendido en el curso y en la carrera de Ingeniería en Sistemas.',
    'Diseñar un sistema integral de automatización y monitoreo que optimice el funcionamiento del invernadero.',
    'Validar la solución mediante un prototipo funcional antes de una implementación a escala real.',
  ],
};

/* ---------------- Solución ---------------- */
export const solution = {
  intro:
    'La propuesta es un sistema embebido con una placa Arduino Mega 2560 como núcleo, elegida por su gran cantidad de pines de entrada y salida. Recibe las lecturas de los sensores, las compara con umbrales configurables y activa los actuadores correspondientes. Una pantalla LCD local muestra el estado, y la comunicación inalámbrica permite ampliar el sistema con monitoreo remoto y alertas.',
  layers: [
    { title: 'Percepción', text: 'Sensores de temperatura, humedad, suelo, luz, movimiento, viento y calidad del aire / CO.' },
    { title: 'Control', text: 'Microcontrolador que ejecuta la lógica automática, el modo manual y el registro de datos.' },
    { title: 'Actuación', text: 'Relés y transistores que gobiernan bomba de agua, ventiladores, luces, alarma y puertas.' },
    { title: 'Interfaz y comunicación', text: 'Pantalla LCD 16×2 para el operador y módulo inalámbrico (WiFi/Bluetooth) para panel remoto, almacenamiento de datos y alertas por correo o mensaje.' },
  ],
  diagram: { label: 'Diagrama de arquitectura del sistema', size: 'wide' as ImageSize, src:"Arquitectura.png" ,caption: 'Arquitectura general: sensores → microcontrolador → actuadores y nube' } as Shot,
  cycleTitle: 'Ciclo automático optimizado',
  cycleIntro:
    'El ciclo se diseñó para ahorrar recursos y tiempo: cada actuador funciona solo cuando la lectura lo justifica y con histéresis para evitar encendidos y apagados continuos. Los valores son referenciales y se calibran en las pruebas.',
  rules: [
    { sensor: 'Humedad del suelo', condition: '< 35 %', action: 'Enciende la bomba hasta alcanzar 60 %', benefit: 'Riego solo cuando hace falta' },
    { sensor: 'Temperatura ambiente', condition: '> 30 °C', action: 'Enciende ventiladores y abre puertas', benefit: 'Evita estrés térmico en el cultivo' },
    { sensor: 'Temperatura ambiente', condition: '< 15 °C', action: 'Cierra puertas y apaga ventilación', benefit: 'Conserva el calor' },
    { sensor: 'Intensidad de luz', condition: 'Baja al atardecer', action: 'Enciende iluminación suplementaria', benefit: 'Extiende el fotoperiodo sin desperdicio' },
    { sensor: 'Viento', condition: 'Ráfagas fuertes', action: 'Cierra puertas automáticas', benefit: 'Protege la estructura' },
    { sensor: 'Calidad del aire / CO', condition: 'Sobre el umbral', action: 'Activa alarma y ventilación; notifica', benefit: 'Seguridad del personal' },
    { sensor: 'Movimiento / presencia', condition: 'Fuera de horario', action: 'Activa alarma y envía mensaje', benefit: 'Vigilancia del invernadero' },
  ],
};

/* ---------------- Materiales y componentes ---------------- */
// status: 'Integrado' = ya aparece en el prototipo · 'Planificado' = previsto en la solución
export const components = [
  { name: 'Arduino Mega 2560', role: 'Núcleo del sistema; ofrece muchos pines para sensores y actuadores.', status: 'Integrado' },
  { name: 'Pantalla LCD 16×2 con módulo I2C (0x27)', role: 'Interfaz local para el operador, montada en una carcasa impresa en 3D.', status: 'Integrado' },
  { name: 'Sensor DHT11', role: 'Temperatura y humedad ambiental.', status: 'Integrado' },
  { name: 'Sensor capacitivo de humedad de suelo V2.0.0', role: 'Humedad del suelo para decidir el riego y evaluar su aptitud para cultivar.', status: 'Integrado' },
  { name: 'Sensor de nivel tipo flotador', role: 'Detecta el nivel de agua del depósito de riego.', status: 'Integrado' },
  { name: 'Sensor PIR', role: 'Detección de movimiento y presencia.', status: 'Integrado' },
  { name: 'Sensores de gas serie MQ (x2)', role: 'Calidad del aire y monóxido de carbono.', status: 'Integrado' },
  { name: 'Módulo relé de 2 canales', role: 'Controla cargas de mayor voltaje/corriente.', status: 'Integrado' },
  { name: 'Tira LED', role: 'Iluminación suplementaria controlada por el relé.', status: 'Integrado' },
  { name: 'Convertidor de niveles lógicos (HW-221)', role: 'Adapta las señales entre módulos de distinto voltaje.', status: 'Integrado' },
  { name: 'Transistor, resistencias, protoboards y cables', role: 'Control de señales, divisores de voltaje y ensamble del circuito.', status: 'Integrado' },
  { name: 'Bomba de agua y ventilador (motores DC)', role: 'Riego controlado y ventilación.', status: 'Planificado' },
  { name: 'Motor / servomotor para puertas', role: 'Apertura y cierre automático de accesos.', status: 'Planificado' },
  { name: 'Alarma sonora y visual', role: 'Avisos de condiciones críticas.', status: 'Planificado' },
  { name: 'Módulo WiFi / Bluetooth', role: 'Panel remoto, almacenamiento de datos y alertas.', status: 'Planificado' },
];

/* ---------------- Procedimiento ---------------- */
export interface Step {
  title: string;
  text: string;
  bullets?: string[];
  shots: Shot[];
}

export const steps: Step[] = [
  {
    title: 'Análisis de requerimientos',
    text: 'Se estudió el planteamiento de Frutos de Guatemala y se tradujo en requisitos funcionales: variables a medir, actuadores a controlar, modos de operación y alertas.',
    bullets: ['Lista de sensores y actuadores', 'Modos automático y manual', 'Parámetros configurables y registro de datos'],
    shots: [{ label: 'Tabla de requerimientos o acta de la discusión grupal', size: 'wide',src:"analisis-requerimientos.png" }],
  },
  {
    title: 'Diseño de la arquitectura',
    text: 'Se definió la estructura del sistema en capas (percepción, control, actuación e interfaz) y el flujo de datos entre sensores, microcontrolador y actuadores.',
    shots: [{ label: 'Diagrama de bloques / flujo de datos', size: 'wide',src: 'Arquitectura.png' }],
  },
  {
    title: 'Selección de materiales',
    text: 'Se eligieron los componentes según disponibilidad, costo, compatibilidad de voltaje y facilidad de integración con la placa Arduino Mega 2560. En la fotografía se observan los sensores de gas, el sensor DHT11, el sensor PIR y el convertidor de niveles montados para su verificación.',
    bullets: ['Compatibilidad de voltajes (3.3 V / 5 V)', 'Costo y disponibilidad local', 'Documentación y librerías disponibles'],
    shots: [
      { label: 'Sensores de gas, DHT11, PIR y convertidor de niveles', size: 'photo', src: 'sensores-gas-dht-pir.jpg', caption: 'Sensores principales sobre la protoboard' },
    ],
  },
  {
    title: 'Pantalla LCD I2C y carcasa impresa en 3D',
    text: 'El primer módulo en funcionar fue la pantalla LCD 16×2, alojada en una carcasa impresa en 3D. Con la prueba inicial se comprobó la alimentación y el contraste; después, un escáner I2C detectó el dispositivo en la dirección 0x27 y, finalmente, se mostró un mensaje de estado en pantalla.',
    bullets: ['Prueba inicial: todos los bloques visibles', 'Escáner I2C: dispositivo encontrado en 0x27', 'Mensaje "Invernadero OK" mostrado correctamente'],
    shots: [
      { label: 'LCD en su primera prueba, con todos los bloques encendidos', size: 'photo', src: 'lcd-prueba-inicial.jpg', caption: 'Prueba inicial de la pantalla' },
      { label: 'Monitor serie del escáner I2C: dispositivo encontrado en 0x27', size: 'photo', src: 'scanner-i2c.jpg', caption: 'Detección de la dirección I2C 0x27' },
      { label: 'LCD mostrando "Invernadero OK / LCD funcionando"', size: 'photo', src: 'lcd-funcionando.jpg', caption: 'Mensaje de estado en la pantalla' },
    ],
  },
  {
    title: 'Sensor de temperatura y humedad, y convertidor de niveles',
    text: 'Sobre una protoboard se montó el sensor DHT11 junto al convertidor de niveles lógicos HW-221, con sus líneas de alimentación y tierra, y se conectó a la placa Arduino para leer la temperatura y la humedad ambiental.',
    shots: [
      { label: 'DHT11 y convertidor de niveles en la protoboard', size: 'photoTall', src: 'dht11-convertidor-niveles.jpg', caption: 'Montaje del DHT11 y el convertidor HW-221' },
    ],
  },
  {
    title: 'Sensor de humedad de suelo',
    text: 'Se probó el sensor capacitivo de humedad de suelo V2.0.0 insertándolo en una muestra de tierra. Sus lecturas permiten decidir cuándo regar y estimar qué tan apto está el suelo para cultivar.',
    bullets: ['Pruebas con tierra seca y húmeda', 'Calibración de los valores de lectura', 'Relación entre la lectura y el umbral de riego'],
    shots: [
      { label: 'Sensor de suelo en una muestra de tierra (vista 1)', size: 'photoTall', src: 'sensor-suelo-1.jpg', caption: 'Sensor insertado en la muestra' },
      { label: 'Sensor de suelo en una muestra de tierra (vista 2)', size: 'photoTall', src: 'sensor-suelo-2.jpg', caption: 'Conexión hacia la placa Arduino' },
      { label: 'Sensor de suelo en una muestra de tierra (vista 3)', size: 'photoTall', src: 'sensor-suelo-3.jpg', caption: 'Pruebas de lectura' },
    ],
  },
  {
    title: 'Sensor de nivel de agua',
    text: 'Se integró un sensor de nivel tipo flotador para conocer el estado del depósito de agua. Evita que la bomba funcione en vacío y avisa cuando hace falta rellenar.',
    shots: [
      { label: 'Sensor de nivel tipo flotador conectado a la placa', size: 'photoTall', src: 'sensor-nivel-flotador.jpg', caption: 'Flotador conectado junto al DHT11 y la placa' },
    ],
  },
  {
    title: 'Ensamble de sensores de gas y movimiento, relé e iluminación',
    text: 'Se incorporaron los sensores de gas, el sensor PIR y el módulo relé de 2 canales, que enciende la tira LED como iluminación suplementaria. Con esto el circuito reúne sensores, lógica de control y un primer actuador funcionando.',
    bullets: ['Relé que controla la tira LED', 'Sensores de gas y PIR conectados', 'Alimentación distribuida entre protoboards'],
    shots: [
      { label: 'Circuito completo: sensores, relé y tira LED encendida', size: 'photo', src: 'circuito-completo.jpg', caption: 'Circuito integrado con la iluminación en funcionamiento' },
    ],
  },
  {
    title: 'Programación del microcontrolador',
    text: 'Se desarrolló el firmware: lectura de sensores, lógica de control con histéresis, modo manual, manejo de la pantalla y generación de alertas.',
    bullets: ['Lectura y filtrado de sensores', 'Reglas automáticas con umbrales configurables', 'Alternancia automático / manual'],
    shots: [{ label: 'Captura del código en el IDE de Arduino', size: 'wide' , src:"scanner-i2c.jpg"}],
  },
  {
    title: 'Pruebas y calibración',
    text: 'Se verificó cada sensor y actuador por separado y luego el ciclo completo. Se calibraron los umbrales y se midieron tiempos de respuesta.',
    bullets: ['Pruebas unitarias por componente', 'Pruebas del ciclo completo', 'Ajuste de umbrales'],
    shots: [
      { label: 'Monitor serie con lecturas de sensores', size: 'wide', src:"sensores-gas-dht-pir.jpg"},
      { label: 'Gráfica de datos registrados', size: 'wide', src:"circuito-iluminacion-rele.jpg" },
    ],
  },
  {
    title: 'Revisión y correcciones',
    text: 'Con la retroalimentación de la fase de revisión del prototipo, se corrigieron errores y se mejoró la estabilidad del sistema.',
    shots: [{ label: 'Prototipo final corregido', size: 'wide',src:"circuito-completo.jpg" }],
  },
];

/* ---------------- Ventajas y desventajas ---------------- */
export const pros = [
  'Ahorro de agua y energía: se riega y ventila solo cuando es necesario.',
  'Menos horas de supervisión manual y menos errores humanos.',
  'Datos históricos para decisiones basadas en evidencia.',
  'Alertas inmediatas ante condiciones críticas.',
  'Diseño modular y escalable a más sensores o más invernaderos.',
  'Bajo costo frente a soluciones comerciales cerradas.',
];

export const cons = [
  'Depende de la energía eléctrica y de la conexión WiFi.',
  'Los sensores económicos requieren calibración y mantenimiento periódico.',
  'El calor, la humedad y el polvo pueden degradar los componentes.',
  'Requiere capacitar al personal para usar el panel.',
  'La inversión inicial y la instalación demandan tiempo.',
];

/* ---------------- Riesgos ---------------- */
export const risks = [
  { risk: 'Falla de energía eléctrica', prob: 'media', impact: 'alta', mitigation: 'Fuente de respaldo (batería o UPS) y estado seguro de actuadores al reiniciar.' },
  { risk: 'Pérdida de conexión WiFi', prob: 'media', impact: 'media', mitigation: 'El control automático opera localmente; los datos se almacenan y se sincronizan al reconectar.' },
  { risk: 'Sensor descalibrado o dañado', prob: 'alta', impact: 'media', mitigation: 'Calibración periódica, validación de rangos y alerta por lectura anómala.' },
  { risk: 'Falla de relé o bomba', prob: 'baja', impact: 'alta', mitigation: 'Protecciones eléctricas, mantenimiento preventivo y modo manual de emergencia.' },
  { risk: 'Exposición a humedad y calor', prob: 'alta', impact: 'media', mitigation: 'Cajas selladas, ventilación del gabinete y componentes con protección adecuada.' },
  { risk: 'Acceso no autorizado al panel', prob: 'baja', impact: 'alta', mitigation: 'Credenciales seguras, comunicación cifrada y permisos por usuario.' },
  { risk: 'Error de configuración de umbrales', prob: 'media', impact: 'media', mitigation: 'Valores por defecto seguros, límites permitidos y registro de cambios.' },
];

/* ---------------- Prototipo ---------------- */
export const prototype = {
  intro:
    'El prototipo funcional permite validar el sistema a escala reducida antes de su implementación real. Integra sensores, actuadores, pantalla local y comunicación inalámbrica.',
  shots: [
    { label: 'Prototipo completo (vista frontal)', size: 'wide' ,src:"circuito-completo.jpg"},
    { label: 'Detalle de sensores', size: 'detail', src:"circuito-iluminacion-rele.jpg" },
    { label: 'Detalle de actuadores y relés', size: 'detail', src:"sensores-gas-dht-pir.jpg"},
    { label: 'Pantalla / interfaz local', size: 'detail',src:"lcd-funcionando.jpg" },
  ] as Shot[],
};

/* ---------------- Entregas ---------------- */
export const deliveries = [
  { n: 1, desc: 'Informe de solución (ventajas y desventajas)', date: '29/08/2026', pts: 2 },
  { n: 2, desc: 'Informe de riesgos de la solución', date: '05/09/2026', pts: 2 },
  { n: 3, desc: 'Prototipo funcional (fase de revisión y corrección)', date: '03/10/2026', pts: 2 },
  { n: '4 y 5', desc: 'Informe final (video y blog) y presentación final', date: '31/10/2026', pts: 9 },
];

/* ---------------- Conclusiones ---------------- */
export const conclusions = [
  'La automatización con microcontroladores es una alternativa viable y de bajo costo para optimizar el manejo del invernadero.',
  'El ciclo automático con histéresis reduce el consumo de agua y energía y la intervención manual.',
  'El prototipo permitió validar la lógica de control antes de una implementación a escala real.',
  'El diseño modular facilita ampliar el sistema con nuevos sensores, actuadores o invernaderos.',
];
