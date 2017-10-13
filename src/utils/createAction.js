const actionCreator = (type, payloadName) =>
  (payload) => ({ type, [payloadName]: payload });

export default actionCreator;