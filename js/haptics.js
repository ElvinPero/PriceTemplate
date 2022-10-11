const hamIcon  = document.querySelector(`.hamburger-icon`);
const styleBtn  = document.querySelector(`.styleBtn`);
const toggleLabel  = document.querySelector(`.toggleLabel`);


hamIcon.addEventListener(`click` , () => {
    navigator.vibrate(60)
})
styleBtn.addEventListener(`click` , () => {
    navigator.vibrate(60)
})
toggleLabel.addEventListener(`click` , () => {
    navigator.vibrate(60)
})

