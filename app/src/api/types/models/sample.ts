export interface SampleEntity {
  id?: number
  content?: string
}

export interface Sample extends SampleEntity {
  id: number
  content: string
}
