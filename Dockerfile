FROM registry.dgk:3000/node:12.16.1 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY .npmrc .npmrc 
RUN yarn
RUN rm -f .npmrc
COPY . ./
RUN yarn build

FROM registry.dgk:3000/nginx:latest
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]