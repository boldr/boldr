#!/bin/bash

# PostgreSQL does not supoort "IF NOT EXISTS" for db creation
# So we use a shell script to dynamically accomplish this

conditionalPsqlCreate () {
  testQuery=$1 thingToCreate=$2 tryMessage=$3
  echo $tryMessage
  if [ $(psql -tAc "SELECT 1 FROM $testQuery") ]; then
    echo "already exists"
  else
    psql -c "CREATE $thingToCreate"
  fi
}

# create database

database="circle_test"
conditionalPsqlCreate \
"pg_database WHERE datname = '$database'" \
"DATABASE $database" \
"creating database $database"
