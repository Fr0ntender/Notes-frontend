FROM node:12.10.0-alpine

RUN apk add git \
    cd home/ \
    && git clone https://github.com/Frost0x/Notes-front.git notes \
    && cd notes \
    && yarn \
    && yarn build

WORKDIR /home/notes

EXPOSE 9000

CMD ["yarn", "serve"]