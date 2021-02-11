

const itemDetailService = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                title: '',
                description: '',
                detail: [
                    {
                        sectionTitle: '',
                        description: ''
                    },
                    {
                        sectionTitle: '',
                        description: ''
                    }
                ],
                price: 0,
                stock: 0,
                pictureUrl: 'unaUrl'
            })
        }, 2000)
    })
}

export default itemDetailService;