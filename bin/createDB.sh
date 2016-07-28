#!/bin/bash

ARG_COUNT=3
BADARGS=65
createdb $1
Q1="CREATE USER $2 WITH PASSWORD '$3';"
Q2="ALTER USER $2 WITH ENCRYPTED PASSWORD '$3';"
Q3="GRANT ALL PRIVILEGES ON DATABASE $1 TO $2;"
SQL="${Q1}${Q2}${Q3}"

if [ $# -ne $ARG_COUNT ]; then
  echo "Expected args: dbname dbuser dbpass"
  exit $BADARGS
fi

sudo -u postgres bash -c "psql -c \"${SQL}\""
