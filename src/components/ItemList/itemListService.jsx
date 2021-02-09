

const itemService = () => {
    return new Promise((res,rej) => {
        setTimeout(()=> {
            res([
                {
                    id: 1,
                    title: 'monitor',
                    description: 'monitor 24 pulgadas con hdmi',
                    price: 4000,
                    pictureUrl: 'unaUrl',
                    stock:30
                },
                {
                    id: 2,
                    title: 'Procesador',
                    description: 'monitor 24 pulgadas con hdmi',
                    price: 4000,
                    pictureUrl: 'unaUrl',
                    stock: 5
                },
                {
                    id: 3,
                    title: 'teclado',
                    description: 'monitor 24 pulgadas con hdmi',
                    price: 4000,
                    pictureUrl: 'unaUrl',
                    stock:10
                }
            ])
        }, 2000)
    })
}

export default itemService;