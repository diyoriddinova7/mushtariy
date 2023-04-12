let time = document.querySelector("h3")
let start = document.querySelector(".btn-primary")
let Reset = document.querySelector(".btn-secondary")
let Stop = document.querySelector(".btn-danger")

start.onclick = () => {
    let i = 0
    setInterval(() => {
        time.innerHTML = i;
        let a = 1
        i += a
    }, 1000)
    i++
}


Stop.onclick = () =>{
    time.innerHTML = i
}