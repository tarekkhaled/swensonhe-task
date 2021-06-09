From alpine


RUN mkdir -p /opt/app

WORKDIR /opt/app

RUN adduser -S app

COPY package.json ./

RUN apk add nodejs && \
    apk add npm && \
    npm install 

COPY ./ ./

RUN chown -R app /opt/app

USER app

EXPOSE 3001

CMD [ "npm", "start"]
