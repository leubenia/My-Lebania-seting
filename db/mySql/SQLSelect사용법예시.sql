SELECT spoon, comments,
(SELECT nickname FROM users WHERE userid = usersReviews.userid ) AS writeuser, 
(SELECT nickname FROM users WHERE users.userid = usersReviews.targetusers) AS targetuser
FROM usersReviews WHERE targetusers = 24;





