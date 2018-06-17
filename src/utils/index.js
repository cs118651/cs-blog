exports.scrollToTop = (speed) => {
  const curHeight = document.documentElement.scrollTop
  if (curHeight === 0) return
  let timer = setInterval(() => {
    let top = document.documentElement.scrollTop
    if (top < speed) {
      top = 0
      clearInterval(timer)
    } else {
      document.documentElement.scrollTop -= speed
    }
  }, 1)
}
