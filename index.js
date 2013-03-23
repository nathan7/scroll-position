if (typeof window.scrollX === 'number' && typeof window.scrollY === 'number') module.exports =
function scrollPos_scrollXY() {
  return { x: window.scrollX, y: window.scrollY }
}

else if (typeof window.pageXOffset === 'number' && typeof window.pageYOffset === 'number') module.exports =
function scrollPos_pageXYOffset() {
  return { x: window.pageXOffset, y: window.pageYOffset }
}

else {
  var doc = document.documentElement || document.body.parentNode

  if (typeof doc.ScrollLeft !== 'number' || typeof doc.ScrollTop !== 'number')
    doc = document.body

  module.exports = 
  function scrollPos_scrollLeftTop() {
    return { x: doc.scrollLeft, y: doc.scrollTop }
  }
}
