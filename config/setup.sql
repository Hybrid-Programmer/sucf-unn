START TRANSACTION;

CREATE DATABASE IF NOT EXISTS sucf;

CREATE TABLE `sucf`.`members` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` varchar(10) NOT NULL,
   PRIMARY KEY  (`userID`)
) ENGINE = MyISAM;



CREATE TABLE `sucf`.`leaders` (
  `leaderID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `office` varchar(100) NOT NULL,
  `quote` text NOT NULL,
  `scripture` text NOT NULL,
  `tenure` varchar(20) NOT NULL,
  `type` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY  (`leaderID`)
)  ENGINE = MyISAM;


CREATE TABLE `sucf`.`past_leaders` (
  `leaderID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `office` varchar(100) NOT NULL,
  `quote` text NOT NULL,
  `scripture` text NOT NULL,
  `tenure` varchar(20) NOT NULL,
  `type` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY  (`leaderID`)
)  ENGINE = MyISAM;


CREATE TABLE `sucf`.`audio` (
 `audioID` INT NOT NULL AUTO_INCREMENT, 
 `title` varchar(255) NOT NULL,
 `likes` int NOT NULL, 
 `posted` varchar(50) NOT NULL, 
   PRIMARY KEY (`audioID`)
) ENGINE = MyISAM;


INSERT INTO `sucf`.`audio` (audioID, title, likes, posted) VALUES
(1, 'academic-excellence.mp3', 0, 'May 12, 2021'),
(2, 'area-vision.mp3', 0, 'May 14, 2021'),
(3, 'exceeding-fruitfulness.mp3', 0, 'June 04, 2021'),
(4, 'fullness-of-christ.mp3', 0, 'june 28, 2021'),
(5, 'inner-court-experience.mp3', 0, 'July 04, 2021'),
(6, 'let-them-have-dominion.mp3', 0, 'July 27,2021'),
(7, 'reigning-with-god.mp3', 0, 'July 31, 2021'),
(8, 'rooted-and-grounded.mp3', 0, 'Aug 05, 2021'),
(9, 'strengthened-with-might.mp3', 0, 'Aug 12, 2021'),
(10, 'sustaining-the-ancient-landmark.mp3', 0, 'Aug 18, 2021'),
(11, 'the-secret-place.mp3', 0, 'Sep 04, 2021'),
(12, 'weekend-exposition1.mp3', 0, 'Sep 15, 2021'),
(13, 'weekend-exposition2.mp3', 0, 'Oct 04, 2021'),
(14, 'weekend-exposition3.mp3', 0, 'Oct 12, 2021'),
(15, 'worship-session.mp3', 0, 'Nov 20, 2021');


CREATE TABLE `sucf`.`messages` (
  `messageID` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `viewers` varchar(20) NOT NULL,
  `created` varchar(50) NOT NULL,
    PRIMARY KEY  (`messageID`)
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`document` (
  `documentID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `downloads` int NOT NULL,
  `extension` varchar(10) NOT NULL,
  `posted` varchar(50) NOT NULL,
    PRIMARY KEY  (`documentID`)
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`video` (
  `videoID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `downloads` int NOT NULL,
  `views` int NOT NULL,
  `posted` varchar(50) NOT NULL,
   PRIMARY KEY  (`videoID`)
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`textPost` (
  `postID` int NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `post` text NOT NULL,
  `views` int NOT NULL,
  `likes` int NOT NULL,
  `posted_on` varchar(50) NOT NULL,
  `published` varchar(10) NOT NULL,
  PRIMARY KEY  (`postID`)
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`text_comments` (
  `commentID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `postingDate` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL,
  `postID` int NOT NULL,
   PRIMARY KEY  (`commentID`),
   FOREIGN KEY (`postID`) REFERENCES `textPost` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`mediaPost` (
  `postID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(200) NOT NULL,
  `extension` varchar(200) NOT NULL,
  `category` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `article` text NOT NULL,
  `views` int NOT NULL,
  `likes` int NOT NULL,
  `posted_on` varchar(50) NOT NULL,
  `published` varchar(10) NOT NULL,
   PRIMARY KEY  (`postID`)
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`media_comments` (
  `commentID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `comment` text NOT NULL,
  `postingDate` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL,
  `postID` int NOT NULL,
   PRIMARY KEY  (`commentID`),
   FOREIGN KEY (`postID`) REFERENCES `mediaPost` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = MyISAM;


CREATE TABLE `sucf`.`notification` (
  `notificationID` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(100) NOT NULL,
  `alert` varchar(255) NOT NULL,
  `created` varchar(50) NOT NULL,
  PRIMARY KEY  (`notificationID`)
) ENGINE = MyISAM;

CREATE TABLE `sucf`.`timer` (
  `timerID` int NOT NULL AUTO_INCREMENT,
  `profile` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `eventDate` varchar(255) NOT NULL,
   PRIMARY KEY  (`timerID`)
) ENGINE = MyISAM;


COMMIT;

