FROM node:12.10.0-alpine

RUN apk add git \
    && yarn global add serve

COPY ./public /home/notes

EXPOSE 5000

VOLUME /home/notes

WORKDIR /home/notes

CMD serve