## Redis

##### Run Server
${PROJECT_ID}-redis - the hostname of the container. This is specified in the config file. In this instance, it is boldr-redis
Data is stored on the volume `/data`, which is automatically created for you on your development/container host.

##### Connect

In another terminal, we can now connect to our server using the Redis CLI. This ephemeral container is connected to the `boldr` network and runs the command `redis-cli -h boldr-redis`. Here we specify the hostname `boldr-redis` which Docker has automagically inserted into this container's `/etc/hosts` file.

```bash
$ docker run --rm --net=boldr -it strues/redis redis-cli -h boldr-redis
boldr-redis:6379> info
```

> NOTE: If the CLI fails to connect or gives you a warning about protected-mode, be sure to explicitly `bind 0.0.0.0` on the server.

#### Example: Redis Master / Slave + Data Containers

##### Setup

Create a new network called `boldr` that will allow our containers to communicate in isolation.

Create data-only containers for the master and slave instances. This allows you to easily upgrade the server containers, while maintaining the persistent data stores.

```bash
$ docker create --name=redis-master-data strues/redis
1996974d4891995d476e8f015972d10388cb301fe585217760e31edc8005aa5a

$ docker create --name=redis-slave-data strues/redis
dd8f12ab673805468fc0dbd7dadedb37aa87c20732725a1530ff150963c41a6c
```

##### Run Master and Slave Servers

Start the master instance.

```bash
$ docker run --rm --name=redis-master --net=boldr --volumes-from=redis-master-data strues/redis
```

Start the slave instance, setting `slaveof redis-master 6379`.

```bash
$ docker run --rm --name=redis-slave  --net=boldr --volumes-from=redis-slave-data  strues/redis redis-server /etc/redis.conf --slaveof redis-master 6379
```

##### Connect

Connect to the master instance.

```bash
$ docker run --rm --net=boldr -it strues/redis redis-cli -h redis-master
```

Connect to the slave instance.

```bash
$ docker run --rm --net=boldr -it strues/redis redis-cli -h redis-slave
```
