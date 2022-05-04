let timer = () => 
    new Promise ((resolve) => 
    setTimeout(() => {
        resolve()
    }, 2000))


let timer1 = async () => {
    console.log('1')
    await timer()
    console.log('2')
}

timer1()