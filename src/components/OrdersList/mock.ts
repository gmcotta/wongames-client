import { OrderProps } from '.'

const mock: OrderProps[] = [
  {
    id: '2',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/mastercard.png',
      number: '*** *** **** 4326',
      purchaseDate: 'Purchase made on Jul 20, 2020'
    },
    games: [
      {
        id: '1',
        title: 'game',
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: 'http://localhost:1337/image.png',
        price: '$215.00'
      }
    ]
  },
  {
    id: '2',
    paymentInfo: {
      flag: 'visa',
      img: '/img/visa.png',
      number: '*** *** **** 5423',
      purchaseDate: 'Purchase made on Aug 20, 202008/20/2020 at 21:12'
    },
    games: [
      {
        id: '2',
        title: 'Red Dead Redemption 2',
        downloadLink: 'https://wongames.com/game/download/kjhejl867asd76DEh',
        img: 'http://localhost:1337/image2.png',
        price: '$215.00'
      }
    ]
  }
]

export default mock
