export const getMembers = state => state.members;

// eslint-disable-next-line
export const getMember = state => id => state.members.find(member => member.id == id);
