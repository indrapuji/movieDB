export function addFav(newFav) {
  return { type: "ADDFAV", payload: newFav };
}

export function delFav(newFav) {
  return { type: "DELFAV", payload: newFav };
}
