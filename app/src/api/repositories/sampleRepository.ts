import { Sample } from '@/api/types/modules/sample'
import ITransaction from '@/api/repositories/transaction'

export default interface ISampleRepository {
  findAll(): Promise<Sample[]>
  create(sample: Sample, transaction: ITransaction): Promise<void>
}
