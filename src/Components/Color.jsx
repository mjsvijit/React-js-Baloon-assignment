const randomNumber = () => {
    let set = new Set()
    while(set.size < 5){
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)

        set.add([r, g, b])
    }
    return set
}
export {randomNumber}