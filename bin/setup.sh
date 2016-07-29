#!/bin/bash
set -o nounset # Exit, with error message, when attempting to use an undefined variable.
set -o errexit # Abort script at first error, when a command exits with non-zero status.
set -o pipefail # Returns exit status of the last command in the pipe that returned a non-zero return value.
IFS=$'\n\t' # Defines how Bash splits words and iterates arrays. This defines newlines and tabs as delimiters.

BOLDrAPI="$PWD/api"
BOLDrCMS="$PWD/cms"

echo "Moving to api dir"
cd $BOLDrAPI

echo "Installing dependencies for BoldrAPI..."
npm install
printf "API install complete!\n"

cd $BOLDrCMS
echo "Installing BoldrCMS dependencies."
npm install

printf "CMS install complete!\n"
printf "---------------------\n"
printf "Thanks for checking out Boldr\n"
