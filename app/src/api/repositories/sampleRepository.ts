// import { Sample } from '@/api/types/models/sample'
// import ITransaction from '@/api/repositories/transaction'

import { Sample } from '../../api/types/models/sample'
import ITransaction from '../../api/repositories/transaction'

export default interface ISampleRepository {
  findAll(): Promise<Sample[]>
  create(sample: Sample, transaction: ITransaction): Promise<void>
}
