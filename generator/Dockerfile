FROM node:16 as builder

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY src src
COPY tsconfig.json tsconfig.json

RUN npm run build

FROM node:16

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY --from=builder dist dist

CMD ["node", "dist/index.js"]