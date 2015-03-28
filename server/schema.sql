CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `messageID` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT(144),
  `time` TIMESTAMP,
  `userID` INT,
  `roomID` INT,
  PRIMARY KEY  (`messageID`)
);

CREATE TABLE `Rooms` (
  `roomname` VARCHAR(32),
  `roomID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`roomID`)
);

CREATE TABLE `UserIDs` (
  `username` VARCHAR(32),
  `userID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`userID`)
);

CREATE TABLE `Friends` (
  `userID` INT,
  `friendID` INT
);

ALTER TABLE `Messages` ADD CONSTRAINT `Messages_fk1` FOREIGN KEY (`userID`) REFERENCES UserIDs(`userID`);
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_fk2` FOREIGN KEY (`roomID`) REFERENCES Rooms(`roomID`);


ALTER TABLE `Friends` ADD CONSTRAINT `Friends_fk1` FOREIGN KEY (`userID`) REFERENCES UserIDs(`userID`);
ALTER TABLE `Friends` ADD CONSTRAINT `Friends_fk2` FOREIGN KEY (`friendID`) REFERENCES UserIDs(`userID`);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

