FROM strues/alpine-base
MAINTAINER Steven Truesdell <steven@strues.io>

ENV REDIS_VERSION="3.2.3" \
    REDIS_DOWNLOAD_URL="http://download.redis.io/releases/redis-3.2.3.tar.gz" \
    REDIS_DOWNLOAD_SHA1="92d6d93ef2efc91e595c8bf578bf72baff397507"

EXPOSE 6379

COPY redis.conf /usr/local/etc/redis/redis.conf
# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN addgroup -S redis && adduser -S -G redis redis \
# grab su-exec for easy step-down from root
  && apk add --no-cache 'su-exec>=0.2'
# Install redis
RUN set -x \
  	&& apk add --no-cache --virtual .build-deps \
  		gcc \
  		linux-headers \
  		make \
  		musl-dev \
  		tar \
  	&& wget -O redis.tar.gz "$REDIS_DOWNLOAD_URL" \
  	&& echo "$REDIS_DOWNLOAD_SHA1 *redis.tar.gz" | sha1sum -c - \
  	&& mkdir -p /usr/src/redis \
  	&& tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1 \
  	&& rm redis.tar.gz \
  	&& make -C /usr/src/redis \
  	&& make -C /usr/src/redis install \
  	&& rm -r /usr/src/redis \
  	&& apk del .build-deps \
    && sed -i -e 's/bind 127.0.0.1/bind 0.0.0.0/' /usr/local/etc/redis/redis.conf \
    && mkdir /data && chown redis:redis /data \
    && rm -rf /var/cache/apk/*

VOLUME ["/data"]
WORKDIR /data

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]


CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]
