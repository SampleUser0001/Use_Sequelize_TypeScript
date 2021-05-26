export default interface ITransaction {
  start(): Promise<void>
  commit(): Promise<void>
  rollback(): Promise<void>
  get(): any
}
