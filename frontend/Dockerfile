# Usa la imagen oficial de Node.js 14 (puedes ajustar según tu versión preferida)
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm ci --verbose

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Instala un servidor HTTP simple para servir tu aplicación Angular
RUN npm install -g http-server

# Establece el puerto que utilizará la aplicación
EXPOSE 8080

# Comando para iniciar el servidor y servir la aplicación Angular
CMD ["http-server", "dist/your-angular-app-name"]
