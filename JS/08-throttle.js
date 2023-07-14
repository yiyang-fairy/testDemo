const dragbox = document.getElementById('dragbox');
console.log(dragbox);

const throttle = (fn, delay) => {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

dragbox.addEventListener('drag', throttle((e) => {
    console.log(e.offsetX, e.offsetY);
}, 100))