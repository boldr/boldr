Using Docker and Boldr in harmony
=====================

Boldr is developed for usage with Docker and Docker Compose.


Redis
======
The Redis container is built upon Alpine Linux 3.4 and running Redis v3.2.3. The Redis
instance is bound to `0.0.0.0` and runs as a non-root user, **redis**.

Commands
----

Using the default configuration.
```
$ docker run -d --name boldr_redis -v <docker_volume_name>:/data strues/redis
```

Using your own `redis.conf` file
```
$ docker run -d --name boldr_redis -v <docker_volume_name>:/data \
-v <redis_conf_file>:/usr/local/etc/redis/redis.conf strues/redis
```


Postgres
=========
The Postgres container is built upon Alpine Linux 3.4.

Commands
----
