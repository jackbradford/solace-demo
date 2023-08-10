#!/bin/bash


# This script's directory:
_DIRNAME="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

sudo mysql < "${_DIRNAME}/uninstall.sql"

