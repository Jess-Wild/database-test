-- DROP

DROP TABLE user_skill;
DROP TABLE message;
DROP TABLE user;
DROP TABLE skill;


-- CREATE

CREATE TABLE skill (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL UNIQUE,
type varchar(255) NOT NULL
);


CREATE TABLE user (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nickname varchar(255) NOT NULL UNIQUE,
lastname varchar(255) NOT NULL,
firstname varchar(255) NOT NULL,
email varchar(255) NOT NULL UNIQUE,
password varchar(255) NOT NULL,
city varchar(255),
experience varchar(255),
description varchar(255)
);


CREATE TABLE message (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
text varchar(255) NOT NULL,
user_id INT,
CONSTRAINT fk_message_user 
    FOREIGN KEY (user_id) 
    REFERENCES user(id)
);

CREATE TABLE user_skill (
    id INT,
    user_id INT,
    skill_id INT

);


-- SELECT * FROM user
-- LEFT JOIN skill ON user.id = skill.fk_id;

-- INTO

INSERT INTO
    skill (name, type)
VALUES
    (
        "React",
        "Library"
    ),
    (
        "JavaScript",
        "Language"
    ),
    (
        "PHP",
        "Language"
    );

INSERT INTO
    user (nickname, lastname, firstname, email, password, city, experience, description)
VALUES
    (
        "gentleman-cambrioleur",
        "Lupin",
        "Arsene",
        "adress.bidon@gmail.com",
        "azerty",
        "Paris",
        "10 ans",
        "Blablabla blabla blablabla blablabla"
    ),
    (
        "The Detective",
        "Holmes",
        "Sherlock",
        "backerstreet@gmail.com",
        "azerty",
        "Londres",
        "15 ans",
        "Blablabla blabla blablabla blablabla"
    ),
    (
        "The Doctor",
        "Watson",
        "John",
        "121BbackerStreet@gmail.com",
        "azerty",
        "Londres",
        "20 ans",
        "Blablabla blabla blablabla blablabla"
    );

INSERT INTO 
    user_skill (user_id, skill_id)
VALUE (
    1,
    1
    ),
    (
    2,
    3
    ),
    (
        1,
        2
    );

INSERT INTO 
    message (text, user_id)
    VALUE (
    "test",
    1
    );