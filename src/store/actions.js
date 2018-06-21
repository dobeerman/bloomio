export const reorderMembers = ({ commit, state }, payload) => {
  const { idx, op } = payload;

  if ((!idx && op < 0) || (idx === state.members.length - 1 && op > 0)) return;

  const { members } = state;

  const movedItem = members.find((item, index) => index === idx);
  const remainingItems = members.filter((item, index) => index !== idx);

  const reorderedItems = [
    ...remainingItems.slice(0, idx + op),
    movedItem,
    ...remainingItems.slice(idx + op),
  ];

  // @TODO: add the ordered list to DB

  commit('setMembers', reorderedItems);
};

export const removeMember = ({ commit, state }, payload) => {
  const { members } = state;

  // eslint-disable-next-line
  const index = members.findIndex(el => el.id == payload.id);

  if (index > -1) {
    members.splice(index, 1);
    commit('setMembers', members);
  }
};
