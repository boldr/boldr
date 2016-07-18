# Redis 3.2.1

FROM alpine:3.4
MAINTAINER Steven Truesdell <steven@strues.io>

EXPOSE 6379
ENTRYPOINT ["/entrypoint.sh"]
CMD ["redis-server", "/etc/redis.conf"]
VOLUME ["/data"]
WORKDIR /data

RUN build_packages="build-base linux-headers openssl" \
  && apk --update add ${build_packages} \
  && wget -O /usr/local/bin/gosu https://github.com/tianon/gosu/releases/download/1.9/gosu-amd64 \
  && chmod +x /usr/local/bin/gosu \
  && cd /tmp \
  && wget http://download.redis.io/releases/redis-3.2.1.tar.gz \
  && tar xzf redis-3.2.1.tar.gz \
  && cd /tmp/redis-3.2.1 \
  && make \
  && make install \
  && cp redis.conf /etc/redis.conf \
  && sed -i -e 's/bind 127.0.0.1/bind 0.0.0.0/' /etc/redis.conf \
  && adduser -D redis \
  && rm -rf /tmp/* \
  && apk del ${build_packages} \
  && rm -rf /var/cache/apk/*

COPY rootfs /
