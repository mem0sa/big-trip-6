const mockDestination = [
  {
    'id': 'bd704102-bd8d-4050-bb7a-129171016d50',
    'description': 'Oslo - for those who value comfort and coziness',
    'name': 'Oslo',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Oslo for those who value comfort and coziness'
      }
    ]
  },
  {
    'id': 'df1f2866-15e3-49fd-86d2-835b75b882f1',
    'description': 'Kopenhagen - for those who value comfort and coziness',
    'name': 'Kopenhagen',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Kopenhagen for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Kopenhagen full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': '65a2ab11-b785-423a-85d2-69b91aa4eee9',
    'description': 'Vien is a city',
    'name': 'Vien',
    'pictures': []
  },
  {
    'id': '710f8b43-55af-413a-8340-6d4c048590f5',
    'description': 'Barcelona - famous for its crowded street markets with the best street food in Asia',
    'name': 'Barcelona',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Barcelona a perfect place to stay with a family'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Barcelona famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Barcelona is a beautiful city'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Barcelona with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    'id': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'description': 'Tokio - famous for its crowded street markets with the best street food in Asia',
    'name': 'Tokio',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Tokio in a middle of Europe'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/15.jpg',
        'description': 'Tokio a perfect place to stay with a family'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/13.jpg',
        'description': 'Tokio with crowded streets'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Tokio middle-eastern paradise'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Tokio full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': '945770e6-116d-4714-af76-67ce08c942ec',
    'description': 'Chamonix - with crowded streets',
    'name': 'Chamonix',
    'pictures': []
  },
  {
    'id': '75665944-f952-4280-bfcb-17e4965cde94',
    'description': 'Saint Petersburg - with an embankment of a mighty river as a centre of attraction',
    'name': 'Saint Petersburg',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Saint Petersburg famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Saint Petersburg for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/6.jpg',
        'description': 'Saint Petersburg middle-eastern paradise'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Saint Petersburg a true asian pearl'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/15.jpg',
        'description': 'Saint Petersburg with crowded streets'
      }
    ]
  },
  {
    'id': 'a05de506-59d1-4cca-8554-edaf03825e75',
    'description': '',
    'name': 'Den Haag',
    'pictures': []
  },
  {
    'id': '57c888b7-604e-4121-8c39-831b88eb40c0',
    'description': 'Milan - with a beautiful old town',
    'name': 'Milan',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Milan in a middle of Europe'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/2.jpg',
        'description': 'Milan full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Milan with a beautiful old town'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Milan middle-eastern paradise'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Milan middle-eastern paradise'
      }
    ]
  },
  {
    'id': 'af292fe6-3622-4bd7-95da-06e2c682d5a6',
    'description': 'Amsterdam - with an embankment of a mighty river as a centre of attraction',
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Amsterdam with a beautiful old town'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Amsterdam famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Amsterdam for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Amsterdam middle-eastern paradise'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Amsterdam full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  }
];

export {mockDestination};
