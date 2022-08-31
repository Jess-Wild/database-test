
CREATE TABLE skill (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
type varchar(255) NOT NULL
);


CREATE TABLE user (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nickname varchar(255) NOT NULL,
lastname varchar(255) NOT NULL,
firtname varchar(255) NOT NULL,
email varchar(255) NOT NULL,
password varchar(255) NOT NULL,
city varchar(255),
experience varchar(255),
description varchar(255),
skill_id INT,
CONSTRAINT fk_user_skill 
    FOREIGN KEY (skill_id) 
    REFERENCES skill(id)
);


CREATE TABLE message (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
text varchar(255) NOT NULL,
user_id INT,
CONSTRAINT fk_message_user 
    FOREIGN KEY (user_id) 
    REFERENCES user(id)
);






