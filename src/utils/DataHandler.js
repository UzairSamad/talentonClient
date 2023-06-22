let store = null;
let isInternetConnected = false;
let topLoaderRef = null;
let initialRouteNameForBottomTab = 'Project';

function setInititalRouteNameForBottomTab(value) {
  initialRouteNameForBottomTab = value;
}

function getInititalRouteNameForBottomTab(value) {
  return initialRouteNameForBottomTab;
}

function setStore(value) {
  store = value;
}

function getStore() {
  return store;
}

function getStoreState() {
  return store?.getState() ?? {};
}

function dispatchAction(action) {
  const {dispatch} = store;
  dispatch(action);
}

function setInternetConnected(connected) {
  isInternetConnected = connected;
}

function getIsInternetConnected() {
  return isInternetConnected;
}

function setTopLoaderRef(value) {
  topLoaderRef = value;
}

function getTopLoaderRef() {
  return topLoaderRef;
}

export default {
  setStore,
  getStore,
  setInternetConnected,
  getIsInternetConnected,
  getStoreState,
  dispatchAction,
  setTopLoaderRef,
  getTopLoaderRef,
  getInititalRouteNameForBottomTab,
  setInititalRouteNameForBottomTab,
};
