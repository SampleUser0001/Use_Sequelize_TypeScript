# Use sequelize TypeScript

TypeScript + sequelizeでDBのセッション管理を行う。

## init

``` sh
docker-compose up -d --build
```

## 実行

``` sh
docker-compose exec node ash build_and_run.sh
```

### 実行時にエラーになった場合

``` sh
docker-compose exec db bash
```

``` sh
mysql -uroot -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} < /work/init.sql
```

## 参考

- [TypeScriptでMySQLを実行する:Qiita](https://qiita.com/ucan-lab/items/36f67633bc6e8b4229dc#tsc-init)
- [Sequelizeを使用してデータベースを操作するための基本的な情報(2020.09更新）:Qiita](https://qiita.com/mima_ita/items/014dcb42872f3a10855b)