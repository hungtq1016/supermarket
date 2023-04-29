FROM node:16-alpine

WORKDIR /app

# COPY package.json yarn.lock ./

COPY . .

RUN yarn install

# COPY next.config.js ./next.config.js
# COPY pages ./pages
# COPY app ./app
# COPY hook ./hook
# COPY lib ./lib
# COPY style ./style
# COPY ui ./ui
# COPY prisma ./prisma
# COPY public ./public

CMD [ "yarn","dev"]