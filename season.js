// Picks a seasonal theme for the page based on the current month.
// Seasons that aren't built yet fall back to spring (the original garden).
// For previewing, add ?season=autumn (or spring) to the address.
(function () {
  var built = ['spring', 'autumn'];
  var month = new Date().getMonth(); // 0 = January
  var season =
    month >= 2 && month <= 4 ? 'spring' :
    month >= 5 && month <= 7 ? 'summer' :
    month >= 8 && month <= 10 ? 'autumn' : 'winter';

  try {
    var forced = new URLSearchParams(location.search).get('season');
    if (forced) season = forced;
  } catch (e) {}

  if (built.indexOf(season) === -1) season = 'spring';
  document.documentElement.setAttribute('data-season', season);
})();
