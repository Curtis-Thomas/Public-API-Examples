'use-strict'
//https://free-apis.github.io/#/categories
let arr = [
    {name: 'Animals',
    list: [
        //https://www.adoptapet.com/public/apis/pet_list.html
        {name:'AdoptApet'},
        //https://alexwohlbruck.github.io/cat-facts/
        {name:'Axolotl'},
        //(BROKE)https://docs.thecatapi.com/
        {name:'Cat Facts'},
        //https://cataas.com/#/
        {name:'Cataas'},
        
        {name:'Cats'},
        //https://dogapi.dog/docs/api-v2
        {name:'Dog Facts'},
        //https://dog.ceo/dog-api
        {name:'Dogs'},
        //https://documenter.getpostman.com/view/664302/S1ENwy59
        {name:'eBird'},
        //https://www.fishwatch.gov/developers
        {name:'FishWatch'},
        //(BROKE-CORS)https://http.cat/
        {name:'HTTP Cat'},
        //(BROKE-CORS)https://http.dog/
        {name:'HTTP Dog'},
        //(BROKE- token Required)http://apiv3.iucnredlist.org/api/v3/docs
        {name:'IUCN'},
        //https://github.com/wh-iterabb-it/meowfacts
        {name:'MeowFacts'},
        //https://github.com/movebank/movebank-api-doc/blob/master/movebank-api.md
        {name:'Movebank'},
        //(TOKEN REQUIRED)https://www.petfinder.com/developers/
        {name:'Petfinder'},
        //(Add Later)https://placebear.com/
        {name:'PlaceBear'},
        //(Add later)https://place.dog/
        {name:'PlaceDog'},
        //(add later)https://placekitten.com/
        {name:'PlaceKitten'},
        //https://random.dog/woof.json
        {name:'RandomDog'},
        //(BROKE-Cors)https://random-d.uk/api
        {name:'RandomDuck'},
        //https://randomfox.ca/floof/
        {name:'RandomFox'},
        //(do Later)https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home
        {name:'RescueGroups'},
        //https://shibe.online/
        {name:'Shibe.Online'},
        //(token required)https://thedogapi.com/
        {name:'The Dog'},
        //(Broken-CORS)https://xeno-canto.org/explore/api
        {name:'xeno-canto'},
        //(Broke, wrong url)https://zoo-animal-api.herokuapp.com/
        {name:'Zoo Animals'},
    ]
    },
    {name:'Anime',
    list: [
        //(Broke404)https://aniapi.com/docs/
        {name:'AniAPI'},
        //https://wiki.anidb.net/HTTP_API_Definition
        {name:'AniDB'},
        //https://github.com/AniList/ApiV2-GraphQL-Docs
        {name:'AniList'},
        //https://github.com/RocktimSaikia/anime-chan
        {name:'AnimeChan'},
        //https://chandan-02.github.io/anime-facts-rest-api/
        {name:'AnimeFacts'},
        //https://www.animenewsnetwork.com/encyclopedia/api.php
        {name:'AnimeNewsNetwork'},
        //https://catboys.com/api
        {name:'Catboy'},
        //https://danbooru.donmai.us/wiki_pages/help:api
        {name:'Danbooru Anime'},
        //https://jikan.moe/
        {name:'Jikan'},
        //https://kitsu.docs.apiary.io/#
        {name:'Kitsu'},
        //(broke 404 ) https://api.mangadex.org/docs.html
        {name:'MangaDex'},
        //https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/
        {name:'Mangapi'},
        //https://myanimelist.net/clubs.php?cid=13727
        {name:'MyAnimeList'},
        //https://docs.nekos.best/
        {name:'NekosBest'},
        //https://shikimori.one/api/doc
        {name:'Shikimori'},
        //(Broke)https://ghibliapi.herokuapp.com/
        {name:'Studio Ghibli'},
        {name:'Trace Moe'},
        {name:'Waifu.im'},
        {name:'Waifu Pics'},

]},
    {name:'Anti-Malware',
list: [
    //https://docs.abuseipdb.com/#introduction
    {name:'AbuselPDB'},
    //https://otx.alienvault.com/api
    {name:'AlienVault Open Threat Exchange (OTX)'},
    //https://capev2.readthedocs.io/en/latest/usage/api.html
    {name:'CAPEsandbox'},
    //https://developers.google.com/safe-browsing/
    {name:'Google Safe Browsing'},
    //https://maldatabase.com/api-doc.html
    {name:'Maldatabase'},
    //https://malshare.com/doc.php
    {name:'Malshare'},
    //https://bazaar.abuse.ch/api/
    {name:'MalwareBazaar'},
    //https://metacert.com/
    {name:'Metacert'},
    //https://rapidapi.com/Amiichu/api/exerra-phishing-check/
    {name:'NoPhishy'},
    //https://phisherman.gg/
    {name:'Phisherman'},
    //https://docs.scanii.com/
    {name:'Scanii'},
    //https://urlhaus-api.abuse.ch/
    {name:'URLhaus'},
    //https://urlscan.io/docs/api/
    {name:'URLScan.io'},
    //https://developers.virustotal.com/v2.0/reference/getting-started
    {name:'VirusTotal'},
    //https://support.mywot.com/hc/en-us/sections/360004477734-API-
    {name:'Web of Trust'},

]},
    {name:'Art & Design',
list: [
    //https://api.amethyste.moe/
    {name: 'Amethyst'},
    //https://api.artic.edu/docs/
    {name:'Art Institute of Chicago'},
    //http://colormind.io/api-access/
    {name:'Colormind'},
    //https://www.colourlovers.com/api
    {name:'ColorLovers'},
    //https://collection.cooperhewitt.org/api
    {name:'Cooper Hewitt'},
    //https://developer.dribbble.com/
    {name:'Dribble'},
    //https://github.com/cheatsnake/emojihub
    {name:'EmojiHub'},
    //https://pro.europeana.eu/page/search
    {name:'Europeana'},
    //https://github.com/harvardartmuseums/api-docs
    {name:'Harvard Art Museums'},
    //https://icon.horse/
    {name:'Icon Horse'},
    //https://developer.iconfinder.com/reference/overview-1
    {name:'Iconfinder'},
    //https://img.icons8.com/
    {name:'Icons8'},
    //https://lordicon.com/
    {name:'Lordicon'},
    //https://metmuseum.github.io/
    {name:'Metropolitan Museum of Art'},
    //http://api.thenounproject.com/index.html
    {name:'Noun Project'},
    //https://php-noise.com/
    {name:'PHP-Noice'},
    //https://pixelencounter.com/api
    {name:'Pixel Encounter'},
    //https://data.rijksmuseum.nl/object-metadata/api/
    {name:'Rijksmuseum'},
    //https://wordcloudapi.com/
    {name:'Word Cloud'},
    //https://x-colors.herokuapp.com/
    {name:'xColors'},
    
]},
    {name:'Authentication & Authorization',
list: [
    //https://auth0.com/
    {name:'Auth0'},
    //https://otp.dev/en/docs/
    {name:'GetOTP'},
    //https://m3o.com/user
    {name:'Micro User Service'},
    //https://mojoauth.com/
    {name:'MojoAuth'},
    //https://sawolabs.com/
    {name:'SAWO Labs'},
    //https://stytch.com/
    {name:'Stytch'},
    //https://warrant.dev/
    {name:'Warrant'},

]},
    {name:'Blockchain',
    list: [
        //https://graphql.bitquery.io/auth/login
        {name:'Bitquery'},
        //https://chain.link/developer-resources
        {name:'Chainlink'},
        //https://tierion.com/chainpoint/
        {name:'Chainpoint'},
        //https://www.covalenthq.com/docs/api/#/0/0/USD/1
        {name:'Covalent'},
        //https://etherscan.io/apis
        {name:'Etherscan'},
        //https://docs.helium.com/api/blockchain/introduction/
        {name:'Helium'},
        //https://nownodes.io/
        {name:'Nownodes'},
        //https://developers.steem.io/
        {name:'Steem'},
        //https://thegraph.com/en/
        {name:'The Graph'},
        //https://walltime.info/api.html
        {name:'Walltime'},
        //https://docs.watchdata.io/
        {name:'Watchdata'},
    ]},
    {name:'Books',
    list: [
         //https://www.abibliadigital.com.br/en
         {name:'A Biblia Digital'},
         //https://bhagavadgita.io/api/
         {name:'Bhagavad Gita'},
         //https://gita-api.vercel.app/
         {name:'Bhagavad Gita telugu'},
         //https://bible-api.com/
         {name:'Bible-Api'},
         //https://www.bl.uk/collection-metadata/metadata-services/linked-open-bnb
         {name:'British National Bibliography'},
         //https://github.com/CrossRef/rest-api-doc
         {name:'Crossref Metadata Search'},
         //https://api.ganjoor.net/index.html
         {name:'Ganjoor'},
         //https://developers.google.com/books/
         {name:'Google books'},
         //https://github.com/GurbaniNow/api
         {name:'GurbaniNow'},
         //https://gutendex.com/
         {name:'Gutendex'},
         //https://openlibrary.org/developers/api
         {name:'Open Library'},
         //http://www.penguinrandomhouse.biz/webservices/rest/
         {name:'Penguin Publishing'},
         //https://github.com/thundercomb/poetrydb#readme
         {name:'PoetryDB'},
         //https://quran.api-docs.io/v4/getting-started/introduction
         {name:'Quran'},
         //https://alquran.cloud/api
         {name:'Quran Cloud'},
         //https://github.com/fawazahmed0/quran-api#readme
         {name:'Quran-api'},
         //https://aninditabasu.github.io/indica/html/rv.html
         {name:'Rig veda'},
         //https://docs.api.bible/
         {name:'The Bible'},
         //https://api-thirukkural.web.app/
         {name:'Thirukkural'},
         //https://aninditabasu.github.io/indica/html/vs.html
         {name:'Vedic Society'},
         //https://wizard-world-api.herokuapp.com/swagger/index.html
         {name:'Wizard World'},
         //https://wolnelektury.pl/api/
         {name:'Wolne Lektury'},
    ]},
    {name:'Business',
    list: [
        //https://superset.apache.org/docs/api/
        {name:'Apache Superset'},
        //https://charityapi.orghunter.com/
        {name:'Charity Search'},
        //https://dashboard.clearbit.com/docs#logo-api
        {name:'Clarbit Logo'},
        //https://domainsdb.info/
        {name:'Domainsdb.info'},
        //https://developers.freelancer.com/
        {name:'Freelancer'},
        //https://developers.google.com/gmail/api/guides
        {name:'Gmail'},
        //https://developers.google.com/analytics/
        {name:'Google Analytics'},
        //https://instatus.com/help/api
        {name:'Instatus'},
        //https://mailchimp.com/developer/
        {name:'Mailchimp'},
        //https://www.mailjet.com/
        {name:'mailjet'},
        //https://markerapi.com/
        {name:'markerapi'},
        //https://api.orb-intelligence.com/docs/
        {name:'ORB Intelligence'},
        //https://redash.io/help/user-guide/integrations-and-api/api
        {name:'Redash'},
        //https://smartsheet.redoc.ly/
        {name:'Smartsheet'},
        //https://developer.squareup.com/reference/square
        {name:'Square'},
        //https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi
        {name:'SwiftKanban'},
        //https://tenders.guru/hu/api
        {name:'Tenders in Hungary'},
        //https://tenders.guru/pl/api
        {name:'Tenders in Poland'},
        //https://tenders.guru/ro/api
        {name:'Tenders in Romania'},
        //https://tenders.guru/es/api
        {name:'Tenders in Spain'},
        //https://tenders.guru/ua/api
        {name:'Tenders in Ukraine'},
        //https://tomba.io/api
        {name:'Tomba email finder'},
        //https://developer.atlassian.com/cloud/trello/
        {name:'Trello'},
    ]},
    {name:'Calandar',
    list: [
        //https://www.abstractapi.com/api/holidays-api
        {name:'Abstract Public Holidays'},
        //https://calendarific.com/
        {name:'Calendarific'},
        //https://apilayer.com/marketplace/checkiday-api
        {name:'Checkiday - National Holiday API'},
        //http://calapi.inadiutorium.cz/
        {name:'Church Calendar'},
        //https://svatky.adresa.info/
        {name:'Czech Nameday Calendar'},
        //https://docs.getfestivo.com/docs/products/public-holidays-api/intro/
        {name:'Festico Public Holiday'},
        //https://developers.google.com/calendar
        {name:'Google Calendar'},
        //https://www.hebcal.com/home/developer-apis
        {name:'Hebrew Calendar'},
        //https://holidayapi.com/
        {name:'Holidays'},
        //https://www.lectserve.com/
        {name:'LectServe'},
        //https://date.nager.at/
        {name:'Nager.Date'},
        //https://nameday.abalin.net/
        {name:'Nameday Calendar'},
        //https://www.isdayoff.ru/
        {name:'Non-Working Days'},
        //https://github.com/egno/work-calendar
        {name:'Russian Calendar'},
        //https://github.com/egno/work-calendar
        {name:'UK Bank Holidays'},
    ]},
    {name:'Cloud Storage & File Sharing',
    list: [
        //https://anonfiles.com/docs/api
        {name:'AnonFiles'},
        //https://bayfiles.com/docs/api
        {name:'BayFiles'},
        //https://developer.box.com/
        {name:'Box'},
        //https://ddownload.com/api
        {name:'ddownload'},
        //https://www.dropbox.com/developers
        {name:'Dropbox'},
        //https://www.file.io/
        {name:'File.io'},
        //https://www.filestack.com/
        {name:'Filestack'},
        //https://gofile.io/api
        {name:'GoFile'},
        //https://developers.google.com/drive/
        {name:'Google drive'},
        //https://gyazo.com/api/docs
        {name:'Gyazo'},
        //https://api.imgbb.com/
        {name:'Imgbb'},
        //https://developer.microsoft.com/en-us/onedrive
        {name:'OneDrive'},
        //https://getpantry.cloud/
        {name:'Pantry'},
        //https://pastebin.com/doc_api
        {name:'Pastebin'},
        //https://docs.pinata.cloud/
        {name:'Pinata'},
        //https://docs.pinata.cloud/
        {name:'Quip'},
        //https://docs.storj.io/dcs/
        {name:'Storj'},
        //https://0x0.st/
        {name:'The Null Pointer'},
        //https://web3.storage/
        {name:'Web3 Storage'},
        
    ]},
    {name:'Continous Integration',
    list: [
        //https://learn.microsoft.com/en-us/rest/api/resourcehealth/
        {name:'Azure DevOps Health'},
        //https://api-docs.bitrise.io/
        {name:'Bitrise'},
        //https://buddy.works/docs/api/getting-started/overview
        {name:'Buddy'},
        //https://circleci.com/docs/api/v1/index.html#circleci-v1-api-overview
        {name:'CircleCL'},
        //https://docs.cloudbees.com/docs/cloudbees-codeship/latest/api-overview/
        {name:'Codeship'},
        //https://docs.travis-ci.com/api/
        {name:'Travis CL'},
    ]},
    {name:'Cryptocurrency',
    list: [
        //https://www.0x.org/
        {name:'0x'},
        //https://1inch.io/api/
        {name:'1inch'},
        //https://docs.alchemy.com/
        {name:'Alchemy Ethereum'},
        //https://coinlayer.com/
        {name:'apilayer coinlayer'},
        //https://github.com/binance/binance-spot-api-docs
        {name:'Binance'},
        //https://nova.bitcambio.com.br/api/v3/docs#a-public
        {name:'Bitcambio'},
        //https://apiv2.bitcoinaverage.com/
        {name:'Bitcoinaverage'},
        //https://bitcoincharts.com/about/exchanges/
        {name:'BitcoinCharts'},
        //https://docs.bitfinex.com/docs
        {name:'Bitfinex'},
        //https://www.bitmex.com/app/apiOverview
        {name:'Bitmex'},
        {name:'Bittrex'},
        {name:'Block'},
        {name:'Blockchain'},
        {name:'blockfrost Cardano'},
        {name:'Brave NewCoin'},
        {name:'BtcTurk'},
        {name:'Bybit'},
        {name:'CoinAPI'},
        {name:'Coinbase'},
        {name:'Coinbase Pro'},
        {name:'CoinCap'},
        {name:'CoinDCX'},
        {name:'CoinDesk'},
        {name:'CoinGecko'},
        {name:'Coinigy'},
        {name:'Coinlib'},
        {name:'Coinlore'},
        {name:'CoinMarketCap'},
        {name:'Coinpaprika'},
        {name:'CoinRanking'},
        {name:'Coinremitter'},
        {name:'CoinStats'},
        {name:'CryptAPI'},
        {name:'CryptingUp'},
        {name:'CryptoCompare'},
        {name:'CryptoMarket'},
        {name:'Cryptonator'},
        {name:'dYdX'},
        {name:'Ethplorer'},
        {name:'EXMO'},
        {name:'FTX'},
        {name:'Gateio'},
        {name:'Gemini'},
        {name:'Hirak Exchange Rates'},
        {name:'Huobi'},
        {name:'icy.tools'},
        {name:'Indodax'},
        {name:'INFURA Etherium'},
        {name:'Kraken'},
        {name:'KuCoin'},
        {name:'Localbitcoins'},
        {name:'Mempool'},
        {name:'MercadoBitcoin'},
        {name:'Messari'},
        {name:'Nexchange'},
        {name:'Nomics'},
        {name:'NocaDax'},
        {name:'OKEx'},
        {name:'Poloniex'},
        {name:'Solana JSON RPC'},
        {name:'Technical Analysis'},
        {name:'CALR'},
        {name:'WorldCoinIndex'},
        {name:'ZMOK'},
    ]},
    {name:'Currency Exchange',
    list: [
        {name:''},
    ]},
    {name:'Data Validation',
    list: [
        {name:''},
    ]},
    {name:'Development',
    list: [
        {name:''},
    ]},
    {name:'Dictionaries',
    list: [
        {name:''},
    ]},
    {name:'Documents & Productivity',
    list: [
        {name:''},
    ]},
    {name:'Email',
    list: [
        {name:''},
    ]},
    {name:'Entertainment',
    list: [
        {name:''},
    ]},
    {name:'Environment',
    list: [
        {name:''},
    ]},
    {name:'Events',
    list: [
        {name:''},
    ]},
    {name:'Finance',
    list: [
        {name:''},
    ]},
    {name:'Food & Drink',
    list: [
        {name:''},
    ]},
    {name:'Games & Comics',
    list: [
        {name:''},
    ]},
    {name:'Geocoding',
    list: [
        {name:''},
    ]},
    {name:'Government',
    list: [
        {name:''},
    ]},
    {name:'Health',
    list: [
        {name:''},
    ]},
    {name:'Jobs',
    list: [
        {name:''},
    ]},
    {name:'Machine LEarning',
    list: [
        {name:''},
    ]},
    {name:'Music',
    list: [
        {name:''},
    ]},
    {name:'News',
    list: [
        {name:''},
    ]},
    {name:'Open Data',
    list: [
        {name:''},
    ]},
    {name:'Open Source Projects',
    list: [
        {name:''},
    ]},
    {name:'Patent',
    list: [
        {name:''},
    ]},
    {name:'Personality',
    list: [
        {name:''},
    ]},
    {name:'Phone',
    list: [
        {name:''},
    ]},
    {name:'Photography',
    list: [
        {name:''},
    ]},
    {name:'Programming',
    list: [
        {name:''},
    ]},
    {name:'Science & Math',
    list: [
        {name:''},
    ]},
    {name:'Securtiy',
    list: [
        {name:''},
    ]},
    {name:'Shopping',
    list: [
        {name:''},
    ]},
    {name:'Social',
    list: [
        {name:''},
    ]},
    {name:'Sports & Fitness',
    list: [
        {name:''},
    ]},
    {name:'Test Data',
    list: [
        {name:''},
    ]},
    {name:'Text Analysis',
    list: [
        {name:''},
    ]},
    {name:'Tracking',
    list: [
        {name:''},
    ]},
    {name:'Transportation',
    list: [
        {name:''},
    ]},
    {name:'URL Shorteners',
    list: [
        {name:''},
    ]},
    {name:'Vehicle',
    list: [
        {name:''},
    ]},
    {name:'Video',
    list: [
        {name:''},
    ]},
    {name:'Weather',
    list: [
        {name:''},
    ]},

]