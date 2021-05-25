FROM mysql:8.0

WORKDIR /work

COPY init.sql /work/init.sql
COPY my.cnf /etc/mysql/conf.d/my.cnf

# RUN mysql -uroot -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} < "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'secret'"
# RUN mysql -uroot -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} < /work/init.sql
