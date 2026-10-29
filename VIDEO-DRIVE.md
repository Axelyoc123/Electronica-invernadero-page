# Video automático desde Google Drive

El apartado «Video» busca **invernadero-demo.mp4** en una carpeta pública. Si no existe, muestra «Video próximamente». Consulta al abrir la página y cada 60 segundos hasta encontrarlo. Subir el video no requiere publicar otra vez el blog. Google puede tardar en procesarlo antes de permitir reproducirlo.

## Configurar una sola vez

1. Crea una carpeta en Drive dedicada al video del blog. En **Compartir → Acceso general**, selecciona **Cualquier persona con el enlace**, con permiso **Lector**. No guardes archivos privados en esa carpeta.
2. Copia el ID de su enlace: en `https://drive.google.com/drive/folders/ABC123`, el ID es `ABC123`.
3. En [Google Cloud Console](https://console.cloud.google.com/), crea o elige un proyecto y habilita **Google Drive API**. En **APIs y servicios → Credenciales**, crea una **clave de API**.
4. Restringe esa clave a **Google Drive API** y a **Sitios web (referentes HTTP)**. Agrega el dominio real del blog, por ejemplo `https://TU-USUARIO.github.io/*`. Para probar localmente agrega `http://localhost:4321/*`. Esta clave se incluye en el navegador: no uses credenciales privadas ni claves de cuentas de servicio.
5. Para GitHub Pages, abre **Settings → Secrets and variables → Actions → Variables** en el repositorio y crea:
   - `PUBLIC_DRIVE_FOLDER_ID`: ID de la carpeta.
   - `PUBLIC_GOOGLE_DRIVE_API_KEY`: clave restringida del paso anterior.
6. Publica los cambios y ejecuta el workflow **Deploy a GitHub Pages**. Las variables se incorporan al compilar: si cambias alguna, ejecuta nuevamente el workflow.

Para desarrollo local, copia `.env.example` a `.env`, completa ambos valores y reinicia `npm run dev`.

## Cuando tengas el video

Sube **invernadero-demo.mp4** directamente a esa carpeta, respetando mayúsculas y extensión. Comprueba que el archivo también permita acceso a **Cualquier persona con el enlace** y que se reproduzca desde una ventana de incógnito. El blog lo detectará en su siguiente consulta; no necesitas editar código.

Evita archivos con el mismo nombre. Si existen duplicados, se elige el creado más recientemente. Para cambiar el nombre esperado, edita `site.driveVideo.fileName` en `src/config/environment.ts` y vuelve a publicar.

Puedes seguir usando una URL de reproductor en `site.videoEmbedUrl`: si tiene valor, se utiliza en lugar de la búsqueda automática en Drive.

## Si no aparece

- «Video próximamente»: verifica que las variables estén configuradas y que el archivo esté en la carpeta indicada con el nombre exacto.
- Error de consulta: revisa que Drive API esté habilitada, las restricciones de la clave, el dominio autorizado y el acceso público de la carpeta.
- Reproductor sin acceso o aún sin procesar: comprueba los permisos del archivo y espera a que Drive termine de procesar el video. También se ofrece un enlace para abrirlo en Drive.

Drive resulta práctico para una demostración de un proyecto. Para una audiencia grande, YouTube ofrece una alternativa orientada a reproducción de video.

Referencia: [buscar archivos y listar una carpeta pública con una clave de API](https://developers.google.com/workspace/drive/api/guides/search-files).
