import { makeAutoObservable } from 'mobx'



export class PopUpInstance {
  public isOpen: boolean = false
  public name?: string = undefined
  constructor(name: string) {
    this.name = name
  }

  close(): void {
    this.isOpen = false
  }
}

export class PopUpStore {
  instances: PopUpInstance[] = []

  count = 0

  constructor() {
    makeAutoObservable(this, {
      count: false,
    })
  }

  open(name: string) {
    this.count++
    const ref = new PopUpInstance(name)
    this.instances.push(ref)

    return ref
  }

  close(nameProp: string): void {
    const index = this.instances.findIndex(({ name }) => name === nameProp)
    const instance = this.instances[index]
    this.instances = this.instances.filter(({ name }) => name !== instance.name)
  }

  get openCount(): number {
    return this.instances.length
  }
}
