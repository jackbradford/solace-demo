#!/bin/bash


# This script's directory:
_DIRNAME="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

install_db () {
  echo "Installing database...\n"
  cp "${_DIRNAME}/create_user.sql" "${_DIRNAME}/create_user_tmp.sql"
  echo " IDENTIFIED BY '$DB_PASSWORD'" >> "${_DIRNAME}/create_user_tmp.sql"
  sudo mysql < "$_DIRNAME/create_user_tmp.sql"
  rm "${_DIRNAME}/create_user_tmp.sql"
  sudo mysql < "$_DIRNAME/create_database.sql"
  sudo mysql < "$_DIRNAME/tables/notes.sql"
  echo "Done.\n"
}

get_db_password () {

  echo "Enter a new password for the database:"
  read -s DB_PASSWORD

  echo "Please re-enter the password:"
  read -s DB_PASSWORD_CONFIRM

  if [ "$DB_PASSWORD" = "$DB_PASSWORD_CONFIRM" ]; then
    # Overwrite the .env file.
    echo "DB_PASSWORD=${DB_PASSWORD}" > "${_DIRNAME}/../.env"
    install_db
  else
    echo "Password do not match."
    get_db_password
  fi
}

get_db_password

