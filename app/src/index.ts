import * as mysql from 'promise-mysql'
import { Sample, SampleImpl } from './api/types/models/sample'
import SampleRepository from './api/repositories/impl/sampleRepositoryImpl'
import SequelizeTransaction from './api/repositories/impl/transactionImpl'

// async function connection() {
//   const connection = await mysql.createConnection({
//     host: 'db',
//     user: 'docker',
//     password: 'secret',
//     database: 'typescript',
//     multipleStatements: true
//   });

//   return connection;
// }

// connection().then(connection => {
//   // console.log(connection);
//   const result = connection.query('SELECT * FROM sample');
//   connection.end();

//   return result;
// }).then(function(rows) {
//   console.log(rows);
// });

(async function main() {
  const sampleRepository = new SampleRepository()
  // insert
  const sampleModel = new SampleImpl('hoge')
  const transaction = new SequelizeTransaction()
  await transaction.start()
  await sampleRepository.create(sampleModel, transaction)
  await transaction.commit()

  // 値の取得
  sampleRepository.findAll().then(function(result){
    result.forEach(item => console.log(item))
  })
})()
