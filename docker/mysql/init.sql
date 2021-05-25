ALTER USER 'docker'@'%' IDENTIFIED WITH mysql_native_password BY 'secret';

CREATE TABLE sample (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  content varchar(255),
  PRIMARY KEY (`id`)
);

INSERT INTO sample (content) VALUES ('aaa');
INSERT INTO sample (content) VALUES ('bbb');
INSERT INTO sample (content) VALUES ('ccc');

commit;

exit
