### Schema
CREATE DATABASE burgers_db;
USE quotes_db;

CREATE TABLE `burgers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL DEFAULT '',
  `devoured` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
