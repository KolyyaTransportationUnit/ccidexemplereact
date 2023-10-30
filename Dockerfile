# Utilisez une image de base avec Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR ./src

# Copiez les fichiers package.json et package-lock.json (si disponible) pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel votre application s'exécutera
EXPOSE 3000

# Commande pour exécuter votre application
CMD ["node", "index.tsx"]
