// Picks a seasonal theme for the page based on the current month.
// Christmas runs 1-26 December, then winter until the end of February.
// For previewing, add ?season=autumn (or spring, summer, winter, christmas) to the address.
(function () {
  var built = ['spring', 'summer', 'autumn', 'winter', 'christmas'];
  var now = new Date();
  var month = now.getMonth(); // 0 = January
  var day = now.getDate();
  var season =
    month >= 2 && month <= 4 ? 'spring' :
    month >= 5 && month <= 7 ? 'summer' :
    month >= 8 && month <= 10 ? 'autumn' :
    month === 11 && day <= 26 ? 'christmas' : 'winter';

  try {
    var forced = new URLSearchParams(location.search).get('season');
    if (forced) season = forced;
  } catch (e) {}

  if (built.indexOf(season) === -1) season = 'spring';
  document.documentElement.setAttribute('data-season', season);
})();

// Keep the copyright year in the footer current.
document.addEventListener('DOMContentLoaded', function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = year; });
});
