CREATE TABLE IF NOT EXISTS `lunchs` (
`lunchid` INTEGER auto_increment , 
	`userid` INTEGER,
	`title` VARCHAR(255),
	`content` VARCHAR(255), 
	`date` VARCHAR(255), 
	`time` VARCHAR(255), 
	`location` INTEGER, 
	`membernum` VARCHAR(255), 
	PRIMARY KEY (`lunchid`), 
	FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE, 
	FOREIGN KEY (`location`) REFERENCES `lunchdata` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;