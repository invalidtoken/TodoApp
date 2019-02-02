// Set up filters default object
let filters = {
  searchFilter : "",
  hideCompleted : false
}

// getFilters
// Arguments: none
// Return value: filters object
function getFilters(){
  return filters;
}

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
function setFilters(updates){
  if(updates.hasOwnProperty("searchFilter") && typeof updates.searchFilter === "string"){
    filters.searchFilter = updates.searchFilter;
  }

  if(updates.hasOwnProperty("hideCompleted") && typeof updates.hideCompleted === "boolean"){
    filters.hideCompleted = updates.hideCompleted;
  }
}
// Make sure to set up the exports
export { getFilters, setFilters };