# 📧 Configuración de Envío de Emails

Tu portafolio está configurado para enviar emails directamente a **dl735894@gmail.com** usando **EmailJS**.

## ⚡ Pasos para Configurar (5 minutos)

### 1️⃣ Crear Cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Click en **"Sign Up"**
- Registrate con tu email (puede ser cualquiera)
- Verifica tu email

### 2️⃣ Obtener tu Public Key
- En el dashboard, ve a **Account** (esquina superior derecha)
- Copia tu **Public Key**
- Es algo como: `a1b2c3d4e5f6g7h8i9j0k1l2m3`

### 3️⃣ Conectar tu Servicio de Email (Gmail)
En EmailJS:
- Ve a **Email Services** en el menú izquierdo
- Click en **Add New Service**
- Selecciona **Gmail**
- Completa los campos:
  - **Service ID**: `gmail` (o el nombre que prefieras)
  - **Email**: `dl735894@gmail.com`
  - **Password**: Genera una **contraseña de aplicación** de Google:
    - Ve a tu cuenta de Google
    - Security → App passwords
    - Selecciona Mail y Windows
    - Copia la contraseña generada

### 4️⃣ Crear un Template de Email
En EmailJS:
- Ve a **Email Templates**
- Click en **Create New Template**
- Dale un nombre como `portfolio_contact`
- En **Service**, selecciona el servicio de Gmail que creaste

**En el Template Editor, usa este contenido:**

```
To Email: {{to_email}}
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Message: {{message}}
```

- Guarda el template y copia el **Template ID** (algo como: `template_abc123xyz`)

### 5️⃣ Actualizar el Código
En `src/components/sections/ContactSection.jsx`, reemplaza:

```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```
con tu **Public Key**

Y reemplaza:
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',    // Reemplaza con "gmail" o tu Service ID
  'YOUR_TEMPLATE_ID_HERE',    // Reemplaza con tu Template ID
  templateParams
);
```

**Ejemplo completo:**
```javascript
emailjs.init('a1b2c3d4e5f6g7h8i9j0k1l2m3');

await emailjs.send(
  'gmail',
  'template_abc123xyz',
  templateParams
);
```

### 6️⃣ ¡Listo! 🎉
Ahora cuando alguien complete el formulario en tu portafolio, ¡recibirás un email en **dl735894@gmail.com**!

## 🧪 Prueba
1. Abre tu portafolio en `http://localhost:3000`
2. Ve a la sección "¿Hablamos?"
3. Completa el formulario con tus datos
4. ¡Envía! Deberías recibir el email en segundos

## ⚙️ Variables del Email
El template usa estas variables que puedes personalizar:
- `{{to_email}}` - Email destino (dl735894@gmail.com)
- `{{from_name}}` - Nombre de quien envía
- `{{from_email}}` - Email de quien envía
- `{{subject}}` - Asunto
- `{{message}}` - Mensaje

## 🆘 Solución de Problemas

**Error: "Invalid Service ID"**
→ Verifica que el Service ID sea exacto (case-sensitive)

**Error: "Invalid Template ID"**
→ Verifica que el Template ID sea exacto

**No recibo emails**
→ Revisa tu carpeta de Spam en Gmail
→ Verifica que hayas generado la contraseña de aplicación correctamente

**Error de CORS**
→ En EmailJS, ve a Account → Security y asegúrate que tu dominio esté autorizado

---

**¡Listo! Tu portafolio ahora puede recibir emails reales.** 📬✨
