FROM alpine:3.4
MAINTAINER Steven Truesdell <steven@strues.io>

ENV LANG en_US.utf8
ENV PGDATA /var/lib/postgresql/data

RUN \
    apk add --no-cache bash su-exec postgresql postgresql-contrib \
    && mkdir /docker-entrypoint-initdb.d \
    && sed -ri "s!^#?(listen_addresses)\s*=\s*\S+.*!\1 = '*'!" /usr/share/postgresql/postgresql.conf.sample \
    && mkdir -p /run/postgresql && chown -R postgres /run/postgresql

VOLUME /var/lib/postgresql/data

COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 5432
CMD ["postgres"]
