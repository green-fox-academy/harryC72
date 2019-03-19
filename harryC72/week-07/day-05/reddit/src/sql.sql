CREATE TABLE redditPosts (
post_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
url VARCHAR(21844) NOT NULL,
timestamp timestamp NOT NULL,
score INT NOT NULL default 0,
user_id INT,
PRIMARY KEY (post_id),
FOREIGN KEY (user_id) REFERENCES redditUser(user_id)
) ;