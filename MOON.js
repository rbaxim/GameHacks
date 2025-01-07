var ids = []
const MOON = (speed) => {return ids.push(setInterval(() => {document.getElementById("moon-btn").click()}, speed))}
var clearAll = () => {
  for (var i = 0; i > ids.length; i++) {
    clearInterval(ids[i])
  }
}
