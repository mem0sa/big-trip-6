const mockPoints = [
  {
    'id': '6bdacc46-f8f9-4493-808e-59062a906054',
    'basePrice': 2812,
    'dateFrom': '2026-02-14T16:10:04.639Z',
    'dateTo': '2026-02-16T15:41:04.639Z',
    'destination': '65a2ab11-b785-423a-85d2-69b91aa4eee9',
    'isFavorite': true,
    'offers': [
      'a17b9505-3fb0-4cb1-9461-fd9e2b06c7d3',
      '1db88af3-646a-43ff-b9a5-27eb5d479f44',
      '36e8cef7-e4b9-43c0-a4b9-175c58abd548'
    ],
    'type': 'taxi'
  },
  {
    'id': 'ae53d4f7-4723-4e1b-b47b-43804acad48e',
    'basePrice': 6736,
    'dateFrom': '2026-02-17T20:35:04.639Z',
    'dateTo': '2026-02-19T20:59:04.639Z',
    'destination': '75665944-f952-4280-bfcb-17e4965cde94',
    'isFavorite': true,
    'offers': [
      '13ea1dba-b896-4671-8a23-2e6afbf3cc34',
      'f86220c5-a4a2-4a59-bc19-c035cce8eaf8',
      'cbd2509e-0476-4e5c-9086-6d8c5c8b573e'
    ],
    'type': 'ship'
  },
  {
    'id': '59001ce5-df2d-40f2-bc01-ecb0e0d14d29',
    'basePrice': 369,
    'dateFrom': '2026-02-20T15:40:04.639Z',
    'dateTo': '2026-02-21T20:10:04.639Z',
    'destination': '65a2ab11-b785-423a-85d2-69b91aa4eee9',
    'isFavorite': false,
    'offers': [
      '5966d259-a92f-40e3-b3a2-dd255967f959',
      '9c4394fc-2475-4c01-b34f-cbf7d9b78e80'
    ],
    'type': 'drive'
  },
  {
    'id': '9cbf574e-8136-4865-8619-7b08dc7a1706',
    'basePrice': 2670,
    'dateFrom': '2026-02-22T07:57:04.639Z',
    'dateTo': '2026-02-23T20:36:04.639Z',
    'destination': '945770e6-116d-4714-af76-67ce08c942ec',
    'isFavorite': false,
    'offers': [
      'ca2411ec-cc6e-43ac-9635-a4dae2df98fa',
      'de5b74e8-cf78-4d1e-ae6f-34bc60211b3a',
      '6b4503d4-c680-42c1-ab8d-c150ff7f88cc'
    ],
    'type': 'bus'
  },
  {
    'id': 'c0f0e03e-78ec-4702-9e5a-4123317e2abe',
    'basePrice': 6445,
    'dateFrom': '2026-02-24T12:45:04.639Z',
    'dateTo': '2026-02-26T06:31:04.639Z',
    'destination': 'a05de506-59d1-4cca-8554-edaf03825e75',
    'isFavorite': true,
    'offers': [
      '42e2a1cd-c19d-4d8e-b0d0-3a22dd78ac53',
      '13ea1dba-b896-4671-8a23-2e6afbf3cc34',
      'f86220c5-a4a2-4a59-bc19-c035cce8eaf8',
      'cbd2509e-0476-4e5c-9086-6d8c5c8b573e'
    ],
    'type': 'ship'
  },
  {
    'id': '282b50cd-6e75-4c8c-97be-0a1b2e9d4a51',
    'basePrice': 1172,
    'dateFrom': '2026-02-26T19:03:04.639Z',
    'dateTo': '2026-02-27T19:51:04.639Z',
    'destination': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'isFavorite': false,
    'offers': [
      'da9e7d66-d17c-46da-9298-4ee9a6079c67',
      'd14076ef-7176-481e-8d9f-4b0944d480dc',
      '22776e09-0a94-4e4b-89e9-87cd0abd23e8'
    ],
    'type': 'flight'
  },
  {
    'id': '69deec87-f9c3-42d3-bb58-495bb57bac97',
    'basePrice': 6142,
    'dateFrom': '2026-02-28T22:10:04.639Z',
    'dateTo': '2026-03-02T00:40:04.639Z',
    'destination': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'isFavorite': false,
    'offers': [],
    'type': 'ship'
  },
  {
    'id': '09380b5e-d21f-44ad-aacb-6fc01dc9e611',
    'basePrice': 9564,
    'dateFrom': '2026-03-02T08:42:04.639Z',
    'dateTo': '2026-03-04T06:08:04.639Z',
    'destination': 'a05de506-59d1-4cca-8554-edaf03825e75',
    'isFavorite': false,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '596e069c-69d7-483d-be36-950aaa3b3aab',
    'basePrice': 4836,
    'dateFrom': '2026-03-05T00:43:04.639Z',
    'dateTo': '2026-03-06T16:53:04.639Z',
    'destination': '65a2ab11-b785-423a-85d2-69b91aa4eee9',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '2dbd76a3-3a4c-4d9d-afa6-8d05a5364bca',
    'basePrice': 5654,
    'dateFrom': '2026-03-08T06:17:04.639Z',
    'dateTo': '2026-03-09T17:13:04.639Z',
    'destination': 'af292fe6-3622-4bd7-95da-06e2c682d5a6',
    'isFavorite': false,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '03d4ff45-5197-4545-80c3-6df24e70f596',
    'basePrice': 6864,
    'dateFrom': '2026-03-11T04:32:04.639Z',
    'dateTo': '2026-03-12T20:23:04.639Z',
    'destination': '75665944-f952-4280-bfcb-17e4965cde94',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '72efdce8-6829-4b81-9e55-9d857b030edd',
    'basePrice': 6777,
    'dateFrom': '2026-03-13T21:24:04.639Z',
    'dateTo': '2026-03-14T15:23:04.639Z',
    'destination': 'af292fe6-3622-4bd7-95da-06e2c682d5a6',
    'isFavorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '8c9e5fe0-c0f5-49d7-a679-e6c25890442d',
    'basePrice': 991,
    'dateFrom': '2026-03-15T06:34:04.639Z',
    'dateTo': '2026-03-16T13:48:04.639Z',
    'destination': 'bd704102-bd8d-4050-bb7a-129171016d50',
    'isFavorite': true,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '708ba894-d7b3-48cd-8508-62cfabe9bb14',
    'basePrice': 2330,
    'dateFrom': '2026-03-17T09:32:04.639Z',
    'dateTo': '2026-03-18T03:39:04.639Z',
    'destination': 'df1f2866-15e3-49fd-86d2-835b75b882f1',
    'isFavorite': true,
    'offers': [],
    'type': 'taxi'
  },
  {
    'id': '92a00869-3854-46eb-ac18-8dff50536bfe',
    'basePrice': 8042,
    'dateFrom': '2026-03-19T04:02:04.639Z',
    'dateTo': '2026-03-20T14:04:04.639Z',
    'destination': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'isFavorite': false,
    'offers': [
      'de5b74e8-cf78-4d1e-ae6f-34bc60211b3a',
      '6b4503d4-c680-42c1-ab8d-c150ff7f88cc'
    ],
    'type': 'bus'
  },
  {
    'id': '3d332fc8-35ea-43c3-8461-b511b440f528',
    'basePrice': 1235,
    'dateFrom': '2026-03-22T14:41:04.639Z',
    'dateTo': '2026-03-24T06:39:04.639Z',
    'destination': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'isFavorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '2d2f617b-c9ff-4122-b26e-3f039578ee8f',
    'basePrice': 6925,
    'dateFrom': '2026-03-25T05:05:04.639Z',
    'dateTo': '2026-03-27T05:34:04.639Z',
    'destination': 'af292fe6-3622-4bd7-95da-06e2c682d5a6',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'ad781970-d7ae-4d91-a9a3-25d2e67c26c2',
    'basePrice': 2675,
    'dateFrom': '2026-03-28T06:22:04.639Z',
    'dateTo': '2026-03-29T21:49:04.639Z',
    'destination': '945770e6-116d-4714-af76-67ce08c942ec',
    'isFavorite': false,
    'offers': [
      '1db88af3-646a-43ff-b9a5-27eb5d479f44',
      '36e8cef7-e4b9-43c0-a4b9-175c58abd548'
    ],
    'type': 'taxi'
  },
  {
    'id': 'ce37ab9c-3b00-47b1-ac6f-0d00ebef285b',
    'basePrice': 7531,
    'dateFrom': '2026-03-31T21:24:04.639Z',
    'dateTo': '2026-04-01T06:33:04.639Z',
    'destination': 'a05de506-59d1-4cca-8554-edaf03825e75',
    'isFavorite': true,
    'offers': [
      'ea7892ba-b374-478d-ab53-f23abcbfae42',
      'a17b9505-3fb0-4cb1-9461-fd9e2b06c7d3',
      '1db88af3-646a-43ff-b9a5-27eb5d479f44',
      '36e8cef7-e4b9-43c0-a4b9-175c58abd548'
    ],
    'type': 'taxi'
  },
  {
    'id': '7457adbb-51ad-47ca-84bf-13ea1b212fbf',
    'basePrice': 4583,
    'dateFrom': '2026-04-01T16:41:04.639Z',
    'dateTo': '2026-04-02T14:30:04.639Z',
    'destination': 'bd704102-bd8d-4050-bb7a-129171016d50',
    'isFavorite': true,
    'offers': [
      'c6be53c8-4945-40db-bf3e-c0eba9a9b30c',
      'ca97fab4-ae63-4079-88ff-3ed3928107db',
      '1d1f6195-f0f5-4ee7-bf6b-5cde71559ec2',
      '3068fe41-25b9-43c4-b7ac-e5a1bb9c0bab',
      'e4144995-77b2-4c44-9686-767f2a16f271'
    ],
    'type': 'check-in'
  },
  {
    'id': '31accb65-2a9c-416b-b997-35b75279a056',
    'basePrice': 9915,
    'dateFrom': '2026-04-04T00:41:04.639Z',
    'dateTo': '2026-04-05T09:30:04.639Z',
    'destination': 'bd704102-bd8d-4050-bb7a-129171016d50',
    'isFavorite': true,
    'offers': [
      '8a8aa524-8d4a-4670-ae4d-b80b0319311a',
      'e5e3a64a-f7ea-4f3c-b9e8-962055f6557c',
      'da9e7d66-d17c-46da-9298-4ee9a6079c67',
      'd14076ef-7176-481e-8d9f-4b0944d480dc',
      '22776e09-0a94-4e4b-89e9-87cd0abd23e8'
    ],
    'type': 'flight'
  },
  {
    'id': '173e6453-332a-4239-9f39-e3cdfe577049',
    'basePrice': 8304,
    'dateFrom': '2026-04-07T09:22:04.639Z',
    'dateTo': '2026-04-08T15:58:04.639Z',
    'destination': '65a2ab11-b785-423a-85d2-69b91aa4eee9',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '0c3e889c-8d80-40b2-b661-ae3845dd62dd',
    'basePrice': 9788,
    'dateFrom': '2026-04-09T22:44:04.639Z',
    'dateTo': '2026-04-10T14:48:04.639Z',
    'destination': 'bd704102-bd8d-4050-bb7a-129171016d50',
    'isFavorite': true,
    'offers': [
      'ea7892ba-b374-478d-ab53-f23abcbfae42',
      'a17b9505-3fb0-4cb1-9461-fd9e2b06c7d3',
      '1db88af3-646a-43ff-b9a5-27eb5d479f44',
      '36e8cef7-e4b9-43c0-a4b9-175c58abd548'
    ],
    'type': 'taxi'
  },
  {
    'id': 'a9520d55-c837-4aba-864d-efbe018d781f',
    'basePrice': 1405,
    'dateFrom': '2026-04-12T12:49:04.639Z',
    'dateTo': '2026-04-13T10:38:04.639Z',
    'destination': '710f8b43-55af-413a-8340-6d4c048590f5',
    'isFavorite': true,
    'offers': [
      '6b4503d4-c680-42c1-ab8d-c150ff7f88cc'
    ],
    'type': 'bus'
  },
  {
    'id': '0e145832-39d9-4d9c-8779-4ab73d5b10b5',
    'basePrice': 7060,
    'dateFrom': '2026-04-14T21:55:04.639Z',
    'dateTo': '2026-04-16T16:01:04.639Z',
    'destination': 'dfd66788-1d31-4268-bd78-777db00ef1ee',
    'isFavorite': true,
    'offers': [],
    'type': 'train'
  }
];

export {mockPoints};
