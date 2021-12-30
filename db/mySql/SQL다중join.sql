-- delete from bookmarks where bookmarkid < 300;
-- delete from bookmarks where bookmarkid = 19 AND userid = :userid;
--  UPDATE useroffers SET confirmed = null WHERE userofferid = 3;
-- usersdelete from users where userid < 300;
-- select * from users;
SELECT `lunchs`.*, `host`.`userid` AS `host.userid`, 
`host`.`kakaoid` AS `host.kakaoid`, 
`host`.`email` AS `host.email`, 
`host`.`nickname` AS `host.nickname`, 
`host`.`image` AS `host.image`, 
`host`.`mbti` AS `host.mbti`, 
`host`.`introduction` AS `host.introduction`, 
`host`.`likemenu` AS `host.likemenu`, 
`host`.`dislikemenu` AS `host.dislikemenu`, 
`host`.`mannerStatus` AS `host.mannerStatus`, 
`host`.`snsurl` AS `host.snsurl`, 
`host`.`job` AS `host.job`, 
`host`.`createdAt` AS `host.createdAt`, 
`host`.`updatedAt` AS `host.updatedAt`, 
`locations`.`id` AS `locations.id`, 
`locations`.`address_name` AS `locations.address_name`,
`locations`.`road_address_name` AS `locations.road_address_name`, 
`locations`.`category_group_name` AS `locations.category_group_name`, 
`locations`.`place_name` AS `locations.place_name`, 
`locations`.`place_url` AS `locations.place_url`, 
`locations`.`phone` AS `locations.phone`, 
`locations`.`x` AS `locations.x`, 
`locations`.`y` AS `locations.y`, 
ST_Distance(POINT(`y`, `x`), POINT(37.498, 127.0276)) AS `locations.distance`, 
`applicants`.`applicantid` AS `applicants.applicantid`, 
`applicants`.`lunchid` AS `applicants.lunchid`, 
`applicants`.`userid` AS `applicants.userid`, 
`applicants`.`confirmed` AS `applicants.confirmed`, `applicants`.`comments` AS `applicants.comments`, `applicants`.`createdAt` AS `applicants.createdAt`, `applicants`.`updatedAt` AS `applicants.updatedAt`, `applicants->user`.`userid` AS `applicants.user.userid`, `applicants->user`.`kakaoid` AS `applicants.user.kakaoid`, `applicants->user`.`email` AS `applicants.user.email`, `applicants->user`.`nickname` AS `applicants.user.nickname`, `applicants->user`.`image` AS `applicants.user.image`, `applicants->user`.`mbti` AS `applicants.user.mbti`, `applicants->user`.`introduction` AS `applicants.user.introduction`, `applicants->user`.`likemenu` AS `applicants.user.likemenu`, `applicants->user`.`dislikemenu` AS `applicants.user.dislikemenu`, `applicants->user`.`mannerStatus` AS `applicants.user.mannerStatus`, `applicants->user`.`snsurl` AS `applicants.user.snsurl`, `applicants->user`.`job` AS `applicants.user.job`, `applicants->user`.`createdAt` AS `applicants.user.createdAt`, `applicants->user`.`updatedAt` AS `applicants.user.updatedAt` FROM 
(SELECT `lunchs`.`lunchid`, 
`lunchs`.`userid`, 
`lunchs`.`title`, `lunchs`.`content`, 
`lunchs`.`date`, `lunchs`.`time`, 
`lunchs`.`location`, 
`lunchs`.`membernum`, 
`lunchs`.`end`, 
`lunchs`.`confirmed`,
`lunchs`.`private`, 
`lunchs`.`bk_num`, 
`lunchs`.`createdAt`, 
`lunchs`.`updatedAt` 
FROM `lunchs` AS `lunchs` 
WHERE `lunchs`.`private` = false AND `lunchs`.`end` = false 
ORDER BY `lunchs`.`date` ASC , `locations.distance` ASC LIMIT 0, 12) AS `lunchs` LEFT OUTER JOIN `users` AS `host` ON `lunchs`.`userid` = `host`.`userid` LEFT OUTER JOIN `lunchdata` AS `locations` ON `lunchs`.`location` = `locations`.`id` LEFT OUTER JOIN `applicants` AS `applicants` ON `lunchs`.`lunchid` = `applicants`.`lunchid` LEFT OUTER JOIN `users` AS `applicants->user` ON `applicants`.`userid` = `applicants->user`.`userid` 
ORDER BY `lunchs`.`date` ASC, `locations.distance` ASC;




