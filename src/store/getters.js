export const getMembers = state => state.members;

export const getMember = state => id => state.members.find(member => member.id === id);
