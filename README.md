# TypeScript_MySQL_onDocker

TypeScript + MySQL環境を作成する。

## init

``` sh
docker-compose up -d --build
```

## 実行

``` sh
docker-compose exec node ash
```

``` sh
sh build_and_run.sh
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