USE YOUR_APP;
DROP DATABASE YOUR_APP;
CREATE DATABASE YOUR_APP;
USE YOUR_APP;

CREATE TABLE servers
(
    id INT NOT NULL AUTO_INCREMENT ,
    ip VARCHAR(255) NOT NULL ,
    host VARCHAR(255) NOT NULL ,

    PRIMARY KEY (id),

) ENGINE=InnoDB;

CREATE TABLE cpus
(
    id INT NOT NULL AUTO_INCREMENT ,
    server_id INT NOT NULL ,
    percent FLOAT NOT NULL ,
    date DATETIME NOT NULL ,

    PRIMARY KEY (id),

    FOREIGN KEY (server_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,

) ENGINE=InnoDB;

CREATE TABLE mems
(
    id INT NOT NULL AUTO_INCREMENT ,
    server_id INT NOT NULL ,
    free INT NOT NULL ,
    used INT NOT NULL ,
    date DATETIME NOT NULL ,

    PRIMARY KEY (id),

    FOREIGN KEY (server_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,

) ENGINE=InnoDB;

CREATE TABLE nets
(
    id INT NOT NULL AUTO_INCREMENT ,
    server_id INT NOT NULL ,
    rx INT NOT NULL ,
    tx INT NOT NULL ,
    date DATETIME NOT NULL ,

    PRIMARY KEY (id),

    FOREIGN KEY (server_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,

) ENGINE=InnoDB;

