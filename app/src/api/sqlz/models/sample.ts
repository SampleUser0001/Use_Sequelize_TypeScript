import { Model, INTEGER, STRING } from 'sequelize'
// import sequelize from '@/api/sqlz/models/index'

import sequelize from '../../../api/sqlz/models/index'

export class SampleModel extends Model {
  id!: number
  content!: string
}

SampleModel.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      field: 'id'
    },
    content: {
      type: STRING,
      field: 'content'
    }
  },
  { sequelize,
    modelName: 'SampleModel',
    tableName: 'sample',
    charset:'utf8',
    collate: 'utf8_unicode_ci'
  }
)