

export const Harmony = {
  chainID: process.env.NODE_ENV === 'production' ? 1666600000 : 1666700000,
  chainName: process.env.NODE_ENV === 'production' ? 'Harmony Mainnet' : 'Harmony Testnet Shard 0',
  rpcURL: process.env.NODE_ENV === 'production' ? 'https://api.harmony.one' : 'https://api.s0.b.hmny.io',
  explorerURL: process.env.NODE_ENV === 'production' ? 'https://explorer.harmony.one/#/' : 'https://explorer.pops.one',
  token: 'ONE',
  decimals: 18,
}

export const Constants = {
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  production: process.env.NODE_ENV === 'production',
  harmony: Harmony,
  tutorial: {
    metamask: 'https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet',
  },
}

export const Templates = [
  {title: 'Template 1', imageURL: '/templates/template1.png', _id: '1'},
  {title: 'Template 2', imageURL: '/templates/template2.png', _id: '3'},
  {title: 'Template 3', imageURL: '/templates/template3.png', _id: '2'},
  {title: 'Template 4', imageURL: '/templates/template4.png', _id: '4'},
  {title: 'Template 5', imageURL: '/templates/template5.png', _id: '5'},
]

export const Pages = [
  { _id: 'Justin', name: 'Justin', site: 'https://example.com/pages/justin' },
  { _id: 'Amber', name: 'Amber', site: 'https://example.com/pages/amber' },
  { _id: 'Kat', name: 'Kat', site: 'https://example.com/pages/kat' },
  { _id: 'Andrew', name: 'Andrew', site: 'https://example.com/pages/andrew' },
  { _id: 'Steph', name: 'Steph', site: 'https://example.com/pages/steph' },
  { _id: 'Michael', name: 'Michael', site: 'https://example.com/pages/michael' },
]

export const Offers = [
  { _id: '0x00', name: 'Art 1', offerPrice: '0' },
  { _id: '0x01', name: 'Art 2', offerPrice: '0' },
  { _id: '0x02', name: 'Art 3', offerPrice: '0' },
]

export const Collections = [
  {
  name: 'LMA',
  description: 'I\'m the LMA artist, the creator of the first ever NFT art collection on Harmony Network released in 2020.\nI work as a freelance communication designer in Germany. My goal is to tell stories visually and to enrich your vision - to make it distinctive and easy to communicate, whether with editorial design, corporate design or illustrations.\nI hope you enjoy my gallery',
  coverImageURL: '/images/template1/001.jpg',
  nfts: [
    { title: 'NFT Name 1', price: '0', imageURL: '/images/template1/001.jpg'},
    { title: 'NFT Name 2', price: '0', imageURL: '/images/template1/002.jpg'},
    { title: 'NFT Name 3', price: '0', imageURL: '/images/template1/003.jpg'},
    { title: 'NFT Name 4', price: '0', imageURL: '/images/template1/004.jpg'},
    { title: 'NFT Name 5', price: '0', imageURL: '/images/template1/005.jpg'},
    { title: 'NFT Name 6', price: '0', imageURL: '/images/template1/006.jpg'},
    { title: 'NFT Name 7', price: '0', imageURL: '/images/template1/007.jpg'},
    { title: 'NFT Name 8', price: '0', imageURL: '/images/template1/008.jpg'},
    { title: 'NFT Name 9', price: '0', imageURL: '/images/template1/009.jpg'},
    { title: 'NFT Name 10', price: '0', imageURL: '/images/template1/010.jpg'},
  ]
},
{
  name: 'LMA',
  description: 'I\'m the LMA artist, the creator of the first ever NFT art collection on Harmony Network released in 2020.\nI work as a freelance communication designer in Germany. My goal is to tell stories visually and to enrich your vision - to make it distinctive and easy to communicate, whether with editorial design, corporate design or illustrations.\nI hope you enjoy my gallery',
  coverImageURL: '/images/template2/001.jpg',
  nfts: [
    { title: 'NFT Name 1', price: '0', imageURL: '/images/template2/001.jpg'},
    { title: 'NFT Name 2', price: '0', imageURL: '/images/template2/002.jpg'},
    { title: 'NFT Name 3', price: '0', imageURL: '/images/template2/003.jpg'},
    { title: 'NFT Name 4', price: '0', imageURL: '/images/template2/004.jpg'},
    { title: 'NFT Name 5', price: '0', imageURL: '/images/template2/005.jpg'},
  ]
},
  {
  name: 'LMA', 
  description: 'I\'m the LMA artist, the creator of the first ever NFT art collection on Harmony Network released in 2020.\nI work as a freelance communication designer in Germany. My goal is to tell stories visually and to enrich your vision - to make it distinctive and easy to communicate, whether with editorial design, corporate design or illustrations.\nI hope you enjoy my gallery',
  coverImageURL: '/images/template3/001.jpg',
  nfts: [
    { title: 'NFT Name 1', price: '0', imageURL: '/images/template3/001.jpg'},
    { title: 'NFT Name 2', price: '0', imageURL: '/images/template3/002.jpg'},
    { title: 'NFT Name 3', price: '0', imageURL: '/images/template3/003.jpg'},
    { title: 'NFT Name 4', price: '0', imageURL: '/images/template3/004.jpg'},
    { title: 'NFT Name 5', price: '0', imageURL: '/images/template3/005.jpg'},
    { title: 'NFT Name 6', price: '0', imageURL: '/images/template3/006.jpg'},
    { title: 'NFT Name 7', price: '0', imageURL: '/images/template3/007.jpg'},
  ]
},
{
  name: 'LMA',
  description: 'I\'m the LMA artist, the creator of the first ever NFT art collection on Harmony Network released in 2020.\nI work as a freelance communication designer in Germany. My goal is to tell stories visually and to enrich your vision - to make it distinctive and easy to communicate, whether with editorial design, corporate design or illustrations.\nI hope you enjoy my gallery',
  coverImageURL: '/images/template4/000.jpg',
  nfts: [
    { title: 'NFT Name 1', price: '0', imageURL: '/images/template4/001.jpg'},
    { title: 'NFT Name 2', price: '0', imageURL: '/images/template4/002.jpg'},
    { title: 'NFT Name 3', price: '0', imageURL: '/images/template4/003.jpg'},
    { title: 'NFT Name 4', price: '0', imageURL: '/images/template4/004.jpg'},
    { title: 'NFT Name 5', price: '0', imageURL: '/images/template4/005.jpg'},
    { title: 'NFT Name 6', price: '0', imageURL: '/images/template4/006.jpg'},
    { title: 'NFT Name 7', price: '0', imageURL: '/images/template4/007.jpg'},
    { title: 'NFT Name 8', price: '0', imageURL: '/images/template4/008.jpg'},
    { title: 'NFT Name 9', price: '0', imageURL: '/images/template4/009.jpg'},
    { title: 'NFT Name 10', price: '0', imageURL: '/images/template4/000.jpg'},
  ]
},
{
  name: 'LMA',
  description: 'I\'m the LMA artist, the creator of the first ever NFT art collection on Harmony Network released in 2020.\nI work as a freelance communication designer in Germany. My goal is to tell stories visually and to enrich your vision - to make it distinctive and easy to communicate, whether with editorial design, corporate design or illustrations.\nI hope you enjoy my gallery',
  coverImageURL: '/images/template5/001.jpg',
  nfts: [
    { title: 'NFT Name 1', price: '0', imageURL: '/images/template5/001.jpg'},
    { title: 'NFT Name 2', price: '0', imageURL: '/images/template5/002.jpg'},
    { title: 'NFT Name 3', price: '0', imageURL: '/images/template5/003.jpg'},
    { title: 'NFT Name 4', price: '0', imageURL: '/images/template5/004.jpg'},
    { title: 'NFT Name 5', price: '0', imageURL: '/images/template5/005.jpg'},
    { title: 'NFT Name 6', price: '0', imageURL: '/images/template5/006.jpg'},
  ],
  headerStyle: 'bg-coolGray',
  textStyle: 'text-white',
  buttonStyle: 'text-white !border-white',
},
]

export default Constants
