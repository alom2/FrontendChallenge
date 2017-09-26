const mainObject = 'lolTournament';

/**
 * Get mainObject in localStorage and returns a JSON
 */
const getJSONStored = ():Object => {
  const storage = localStorage.getItem(mainObject);
  return JSON.parse(storage);
}

/**
 * Create the initial state in localStorage
 */
export const createStorage = ():void => {
  const initalState = {};
	localStorage.setItem(mainObject, JSON.stringify(initalState));
}
/**
 * Check LocalStore state
 */
export const hasStorage = ():boolean => {
  return !!getJSONStored();
} 
/**
 * this function set an item in localStorage
 * 
 * @param property 
 * @param value 
 */
export const setItem = (property:string, value:any):void => {
  let JSONStored = getJSONStored();
  JSONStored = {
    ...JSONStored,
    [property]: value,
  };
  localStorage.setItem(mainObject, JSON.stringify(JSONStored));
}
/**
 * Returns a value in localStorage
 * 
 * @param property 
 */
export const getProperty = (property:string):any|null => {
  return getJSONStored()[property] || null;
}
/**
 * removes a item from localStorage
 * @param property 
 */
export const remove = (property:string) => {
  let JSONStored = getJSONStored();
  delete JSONStored[property];
  localStorage.setItem(mainObject, JSON.stringify(JSONStored));
}