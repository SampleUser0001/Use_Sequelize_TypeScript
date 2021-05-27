import { injectable } from 'inversify'
// import { Sample } from '@/api/types/models/sample'
// import ISampleRepository from "@/api/repositories/sampleRepository";
// import { SampleModel } from '@/api/sqlz/models/sample'
import ITransaction from '../transaction';
import 'reflect-metadata'

import { Sample } from '../../../api/types/models/sample'
import ISampleRepository from "../../../api/repositories/sampleRepository";
import { SampleModel } from '../../../api/sqlz/models/sample'

@injectable()
export default class SampleRepository implements ISampleRepository {
  async findAll(): Promise<Sample[]> {
    return await SampleModel.findAll({
      raw: true,
    })
  }

  async create(sample: Sample, transaction: ITransaction): Promise<void> {
    await SampleModel.create(sample, {
      transaction: transaction.get(),
    })
  }
}
