import { Transaction } from 'sequelize'
// import sequelize from '@/api/sqlz/models'
// import ITransaction from '@/api/repositories/transaction'
import { injectable } from 'inversify'
import 'reflect-metadata'

import sequelize from '../../../api/sqlz/models'
import ITransaction from '../../../api/repositories/transaction'

@injectable()
export default class SequelizeTransaction implements ITransaction {
  private _transaction: Transaction | null
  constructor() {
    this._transaction = null
  }

  async start() {
    if(this._transaction){
      throw Error('Already a transaction in progress.')
    }
    this._transaction = await sequelize.transaction()
  }

  async commit() {
    if(!this._transaction){
      throw Error('Not started transaction.')
    }
    await this._transaction
      .commit()
      .then(() => (this._transaction = null))
      .catch((err) => {
        throw err
      })
  }

  async rollback(){
    if(!this._transaction){
      throw Error('Not started transaction.')
    }
    await this._transaction
      .rollback()
      .then(() => (this._transaction = null))
      .catch((err) => {
        throw err
      })
  }
  get(): Transaction {
    if(!this._transaction){
      throw Error('Not started transaction.')
    }
    return this._transaction
  }
}