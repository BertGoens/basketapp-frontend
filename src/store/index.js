import { observable } from 'mobx'

export const appState = observable({
  UI: {
    errors: {},
  },
})
