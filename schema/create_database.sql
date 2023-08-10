CREATE DATABASE IF NOT EXISTS solace_demo
  CHARACTER SET utf8
  COLLATE utf8_unicode_ci;

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE
  ON solace_demo.*
  TO 'solace_demo'@'localhost';

