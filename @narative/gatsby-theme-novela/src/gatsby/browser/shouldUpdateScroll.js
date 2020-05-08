/* eslint-disable */

module.exports = ({ routerProps, prevRouterProps, getSavedScrollPosition }) => {
  const currentPosition = getSavedScrollPosition(routerProps.location);
  const topOfPage = [0, 0];

  if (routerProps.location.hash.includes('#fn')) {
    return false;
  }

  if (routerProps.location.action === 'POP' && currentPosition) {
    window.scrollTo(...currentPosition);
  } else {
    window.scrollTo(...topOfPage);
  }

  // Handling previous path into local storage for "Back" arrow button
  if (prevRouterProps) {
    window.localStorage.setItem(
      'previousPath',
      prevRouterProps.location.pathname,
    );
  }
  // FIXME: Make various test behaviour and make condition and test it!
  return false;
};
