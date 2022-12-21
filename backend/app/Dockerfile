FROM node:lts-alpine3.16
RUN node --version
RUN npm --version
RUN mkdir /services/
WORKDIR /services/
COPY services/ /services/
EXPOSE 3000