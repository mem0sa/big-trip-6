const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '3f0c3d2f-d0e5-4854-85e9-be02816a4a44',
        'title': 'Upgrade to a business class',
        'price': 87
      },
      {
        'id': 'ea7892ba-b374-478d-ab53-f23abcbfae42',
        'title': 'Choose the radio station',
        'price': 143
      },
      {
        'id': 'a17b9505-3fb0-4cb1-9461-fd9e2b06c7d3',
        'title': 'Choose temperature',
        'price': 34
      },
      {
        'id': '1db88af3-646a-43ff-b9a5-27eb5d479f44',
        'title': 'Drive quickly, Im in a hurry',
        'price': 168
      },
      {
        'id': '36e8cef7-e4b9-43c0-a4b9-175c58abd548',
        'title': 'Drive slowly',
        'price': 34
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 'ca2411ec-cc6e-43ac-9635-a4dae2df98fa',
        'title': 'Infotainment system',
        'price': 69
      },
      {
        'id': 'de5b74e8-cf78-4d1e-ae6f-34bc60211b3a',
        'title': 'Order meal',
        'price': 110
      },
      {
        'id': '6b4503d4-c680-42c1-ab8d-c150ff7f88cc',
        'title': 'Choose seats',
        'price': 171
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 'f1ec62ee-a393-42da-b18d-8c2ceaf44df4',
        'title': 'Book a taxi at the arrival point',
        'price': 153
      },
      {
        'id': '32322c09-4521-4487-8f49-4d0f6bb7a7dd',
        'title': 'Order a breakfast',
        'price': 33
      },
      {
        'id': 'b6bca4e4-08b4-4d27-9119-c8d5b5c4e9cb',
        'title': 'Wake up at a certain time',
        'price': 142
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'da472db6-af70-4747-be78-74ac29960499',
        'title': 'Choose meal',
        'price': 33
      },
      {
        'id': '8a8aa524-8d4a-4670-ae4d-b80b0319311a',
        'title': 'Choose seats',
        'price': 195
      },
      {
        'id': 'e5e3a64a-f7ea-4f3c-b9e8-962055f6557c',
        'title': 'Upgrade to comfort class',
        'price': 164
      },
      {
        'id': 'da9e7d66-d17c-46da-9298-4ee9a6079c67',
        'title': 'Upgrade to business class',
        'price': 54
      },
      {
        'id': 'd14076ef-7176-481e-8d9f-4b0944d480dc',
        'title': 'Add luggage',
        'price': 181
      },
      {
        'id': '22776e09-0a94-4e4b-89e9-87cd0abd23e8',
        'title': 'Business lounge',
        'price': 86
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 'c6be53c8-4945-40db-bf3e-c0eba9a9b30c',
        'title': 'Choose the time of check-in',
        'price': 71
      },
      {
        'id': 'ca97fab4-ae63-4079-88ff-3ed3928107db',
        'title': 'Choose the time of check-out',
        'price': 124
      },
      {
        'id': '1d1f6195-f0f5-4ee7-bf6b-5cde71559ec2',
        'title': 'Add breakfast',
        'price': 53
      },
      {
        'id': '3068fe41-25b9-43c4-b7ac-e5a1bb9c0bab',
        'title': 'Laundry',
        'price': 177
      },
      {
        'id': 'e4144995-77b2-4c44-9686-767f2a16f271',
        'title': 'Order a meal from the restaurant',
        'price': 158
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': '787ece7a-b351-458b-a3e8-2846c8fed03f',
        'title': 'Choose meal',
        'price': 37
      },
      {
        'id': '454bd9c5-3147-4826-b49a-4bd428af2ffe',
        'title': 'Choose seats',
        'price': 170
      },
      {
        'id': '42e2a1cd-c19d-4d8e-b0d0-3a22dd78ac53',
        'title': 'Upgrade to comfort class',
        'price': 144
      },
      {
        'id': '13ea1dba-b896-4671-8a23-2e6afbf3cc34',
        'title': 'Upgrade to business class',
        'price': 89
      },
      {
        'id': 'f86220c5-a4a2-4a59-bc19-c035cce8eaf8',
        'title': 'Add luggage',
        'price': 143
      },
      {
        'id': 'cbd2509e-0476-4e5c-9086-6d8c5c8b573e',
        'title': 'Business lounge',
        'price': 139
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '5966d259-a92f-40e3-b3a2-dd255967f959',
        'title': 'With automatic transmission',
        'price': 74
      },
      {
        'id': '9c4394fc-2475-4c01-b34f-cbf7d9b78e80',
        'title': 'With air conditioning',
        'price': 82
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': '7702fad6-5109-4627-bc8f-f2a71c7e650f',
        'title': 'Choose live music',
        'price': 164
      },
      {
        'id': 'dfd452a5-6c8e-47a7-9c5f-2aff3683e820',
        'title': 'Choose VIP area',
        'price': 113
      }
    ]
  }
];

export {mockOffers};
