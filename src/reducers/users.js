import * as types from "../constants/ActionTypes"

const users = (state = [], { type, name, id, users }) => {
	switch (type) {
		case types.ADD_USER:
			return state.concat([
				{
					name,
					id
				}
			])
		case types.USERS_LIST:
			return users
		default:
			return state
	}
}

export default users
