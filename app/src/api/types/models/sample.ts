export interface SampleEntity {
  id?: number | unknown
  content?: string
}

export interface Sample extends SampleEntity {
  id: number | unknown
  content: string
}

export class SampleImpl implements Sample {
  id: number | unknown
  content: string

  constructor(content: string){
    this.content = content
  }
}