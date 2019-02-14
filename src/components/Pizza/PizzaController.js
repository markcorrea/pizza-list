import { observable } from 'mobx'

export class PizzaController {
  @observable posts = 'my posts'

  constructor(store) {
    this.store = store
  }
}
