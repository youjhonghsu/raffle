import { handleActions } from 'redux-actions'
import faker from 'faker'

const members = [...new Array(103)].map(() => {
  return {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
  }
})

export default handleActions({}, members)
