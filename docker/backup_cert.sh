#!/bin/sh

if [ "$#" -ne 1 ]; then
  echo "$0" backup.tar.gz
  exit
fi

cid=`docker-compose ps -q webserver`
docker exec "$cid" tar cz -C /etc/nginx/ certs/ >"$1"
