follower = document.getElementById('follower')
printout = document.getElementById('printout')

mouseX = (event) =>
  return event.clientX

mouseY = (event) =>
  return event.clientY

positionElement = (event) =>
  mouse = {
    x: mouseX(event)
    y: mouseY(event)
  }
  follower.style.top = mouse.y + 'px'
  follower.style.left = mouse.x + 'px'

timer = false
window.onmousemove = init = (event) =>
  _event = event
  timer = setTimeout =>
    positionElement(_event)
  , 1
