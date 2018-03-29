import * as types from "../constants/ActionTypes"

const messages = (state = [], { type, message, author, id }) => {
	switch (type) {
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return state.concat([
				{
					message,
					author,
					id
				}
			])
		default:
			return state
	}
}

export default messages
