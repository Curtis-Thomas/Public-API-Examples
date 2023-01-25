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
        //https://bittrex.github.io/api/v3
        {name:'Bittrex'},
        //https://block.io/docs/basic
        {name:'Block'},
        //https://www.blockchain.com/explorer/api
        {name:'Blockchain'},
        //https://blockfrost.io/
        {name:'blockfrost Cardano'},
        //https://bravenewcoin.com/developers
        {name:'Brave NewCoin'},
        //https://docs.btcturk.com/
        {name:'BtcTurk'},
        //https://bybit-exchange.github.io/docs/futuresV2/linear/#t-introduction
        {name:'Bybit'},
        //https://docs.coinapi.io/
        {name:'CoinAPI'},
        //https://www.coinbase.com/cloud
        {name:'Coinbase'},
        //https://docs.cloud.coinbase.com/exchange/docs/welcome#api
        {name:'Coinbase Pro'},
        //https://docs.coincap.io/
        {name:'CoinCap'},
        //https://docs.coindcx.com/#terms-and-conditions
        {name:'CoinDCX'},
        //https://old.coindesk.com/coindesk-api/
        {name:'CoinDesk'},
        //https://www.coingecko.com/en/api
        {name:'CoinGecko'},
        //https://coinigy.docs.apiary.io/#
        {name:'Coinigy'},
        //https://coinlib.io/apidocs
        {name:'Coinlib'},
        //https://www.coinlore.com/cryptocurrency-data-api
        {name:'Coinlore'},
        //https://coinmarketcap.com/api/
        {name:'CoinMarketCap'},
        //https://api.coinpaprika.com/
        {name:'Coinpaprika'},
        //https://developers.coinranking.com/api/documentation
        {name:'CoinRanking'},
        //https://coinremitter.com/docs
        {name:'Coinremitter'},
        //https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest
        {name:'CoinStats'},
        //https://docs.cryptapi.io/
        {name:'CryptAPI'},
        //https://cryptingup.com/apidoc/#introduction
        {name:'CryptingUp'},
        //https://min-api.cryptocompare.com/
        {name:'CryptoCompare'},
        //https://api.exchange.cryptomkt.com/
        {name:'CryptoMarket'},
        //https://www.cryptonator.com/api/
        {name:'Cryptonator'},
        //https://dydxprotocol.github.io/v3-teacher/#terms-of-service-and-privacy-policy
        {name:'dYdX'},
        //https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API
        {name:'Ethplorer'},
        //https://documenter.getpostman.com/view/10287440/SzYXWKPi
        {name:'EXMO'},
        //https://docs.ftx.com/
        {name:'FTX'},
        //https://www.gate.io/api2
        {name:'Gateio'},
        //https://www.gate.io/api2
        {name:'Gemini'},
        //chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/document-blocked.html?details=%7B%22url%22%3A%22http%3A%2F%2Fiyfbodn.com%2F%3Fdn%3Dhirak.site%26pid%3D9POT3387I%26pbsubid%3Dbde89772-d8ab-686f-b468-33f1055d4b76%26noads%3Dhttp%253A%252F%252Fiyfbodn.com%252F%253Fdn%253Dhirak.site%2526skipskenzo%253Dtrue%22%2C%22hn%22%3A%22iyfbodn.com%22%2C%22dn%22%3A%22iyfbodn.com%22%2C%22fs%22%3A%22%7C%7Ciyfbodn.com%5E%22%7D
        {name:'Hirak Exchange Rates'},
        //https://huobiapi.github.io/docs/spot/v1/en/#change-log
        {name:'Huobi'},
        //https://developers.icy.tools/
        {name:'icy.tools'},
        //https://github.com/btcid/indodax-official-api-docs
        {name:'Indodax'},
        //https://www.infura.io/product/ethereum
        {name:'INFURA Etherium'},
        //https://docs.kraken.com/rest/
        {name:'Kraken'},
        //https://docs.kucoin.com/#general
        {name:'KuCoin'},
        //https://localbitcoins.com/api-docs/
        {name:'Localbitcoins'},
        //https://mempool.space/docs/api/rest
        {name:'Mempool'},
        //https://www.mercadobitcoin.com.br/api-doc/
        {name:'MercadoBitcoin'},
        //https://messari.io/api
        {name:'Messari'},
        //https://nexchange2.docs.apiary.io/#
        {name:'Nexchange'},
        //https://nomics.com/docs/
        {name:'Nomics'},
        //https://doc.novadax.com/en-US/#introduction
        {name:'NocaDax'},
        //https://www.okx.com/docs/en/#overview
        {name:'OKEx'},
        //https://www.okx.com/docs/en/#overview
        {name:'Poloniex'},
        //https://docs.solana.com/developing/clients/jsonrpc-api
        {name:'Solana JSON RPC'},
        //https://technical-analysis-api.com/
        {name:'Technical Analysis'},
        //https://docs.valr.com/
        {name:'CALR'},
        //https://www.worldcoinindex.com/apiservice
        {name:'WorldCoinIndex'},
        //https://zmok.io/
        {name:'ZMOK'},
    ]},
    {name:'Currency Exchange',
    list: [
        //https://1forge.com/api
        {name:'1Forge'},
        //https://www.amdoren.com/currency-api/
        {name:'Amdoren'},
        //https://fixer.io/
        {name:'apilayer fixer.io'},
        //https://www.cbr.ru/development/SXML/
        {name:'Bank of Russia'},
        //https://github.com/fawazahmed0/currency-api#readme
        {name:'Currency-api'},
        //https://currencyfreaks.com/
        {name:'CurrencyFreaks'},
        //https://currencylayer.com/documentation
        {name:'Currencylayer'},
        //https://currencybeacon.com/api-documentation
        {name:'CurrencyScoop'},
        //https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml
        {name:'Czech National Bank'},
        //https://docs.awesomeapi.com.br/api-de-moedas
        {name:'Economia.Awesome'},
        //https://www.exchangerate-api.com/
        {name:'ExchangeRate-API'},
        //https://exchangerate.host/#/
        {name:'Exchangerate.host'},
        //https://exchangeratesapi.io/
        {name:'Exchangeratesapi.io'},
        //https://www.frankfurter.app/docs/
        {name:'Frankfurter'},
        //https://freeforexapi.com/Home/Api
        {name:'FreeForexAPI'},
        //http://api.nbp.pl/en.html
        {name:'National Bank of Poland'},
        //https://www.vatcomply.com/documentation
        {name:'VATComply.com'},

    ]},
    {name:'Data Validation',
    list: [
        //https://www.lob.com/
        {name:'Lob.com'},
        //https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation
        {name:'Postman Echo'},
        //http://www.purgomalum.com/
        {name:'PurgoMalum'},
        //https://www.smarty.com/docs/cloud/us-autocomplete-pro-api
        {name:'US Autocomplete'},
        //https://www.smarty.com/products/apis/us-extract-api
        {name:'US Extract'},
        //https://www.smarty.com/docs/cloud/us-street-api
        {name:'US Street Address'},
        //https://vatlayer.com/documentation
        {name:'vatlayer'},
    ]},
    {name:'Development',
    list: [
        //https://24pullrequests.com/api
        {name:'24 Pull Requests'},
        //https://www.abstractapi.com/api/website-screenshot-api
        {name:'Abstract Screenshot'},
        //https://agify.io/
        {name:'Agify.io'},
        //https://apigratis.com.br/
        {name:'API Gratis'},
        //https://www.apicagent.com/
        {name:'ApicAgent'},
        //https://apiflash.com/
        {name:'ApiFlash'},
        //https://userstack.com/
        {name:'apilayer userstack'},
        //https://apis.guru/api-doc/
        {name:'APIs.guru'},
        //https://learn.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-7.1
        {name:'Azure DevOps'},
        //https://www.base-api.io/
        {name:'Base'},
        //https://beeceptor.com/
        {name:'Beeceptor'},
        //https://developer.atlassian.com/cloud/bitbucket/?utm_source=%2Fbitbucket%2Fapi%2F2%2Freference%2F&utm_medium=302
        {name:'Bitbucket'},
        //https://blague.xyz/
        {name:'Blague.xyz'},
        //https://blitapp.com/api/
        {name:'Blitapp'},
        //https://blynkapi.docs.apiary.io/#
        {name:'Blynk-Cloud'},
        //https://www.boredapi.com/
        {name:'Bored'},
        //https://brainshop.ai/
        {name:'Brainshop.ai'},
        //https://browshot.com/api/documentation
        {name:'Browshot'},
        //https://api.cdnjs.com/libraries/jquery
        {name:'CDNJS'},
        //https://changelogs.md/
        {name:'Changelogs.md'},
        //https://github.com/polarspetroll/ciprand
        {name:'Ciprand'},
        //https://github.com/fawazahmed0/cloudflare-trace-api
        {name:'Cloudflare Trace'},
        //https://github.com/Jaagrav/CodeX
        {name:'Codex'},
        //https://www.contentful.com/developers/docs/references/images-api/
        {name:'Contentful Images'},
        //https://github.com/burhanuday/cors-proxy
        {name:'CORS Proxy'},
        //https://countapi.xyz/
        {name:'CountAPI'},
        //https://docs.databricks.com/dev-tools/api/latest/index.html
        {name:'Databricks'},
        //https://status.digitalocean.com/api
        {name:'DigitalOcean Status'},
        //https://docs.docker.com/docker-hub/api/latest/
        {name:'Docker Hub'},
        //https://api.domainsdb.info/v1/
        {name:'DomainDb Info'},
        //https://extendsclass.com/json-storage.html
        {name:'ExtendsClass JSON Storage'},
        //https://apidocs.geekflare.com/docs/geekflare-api/e57f4eb2b924c-geekflare-api-documentation
        {name:'GeekFlare'},
        //https://genderize.io/
        {name:'Genderize.io'},
        //https://www.getping.info/
        {name:'GETPing'},
        //https://ghost.org/
        {name:'Ghost'},
        //https://docs.github.com/en/rest?apiVersion=2022-11-28
        {name:'GitHub'},
        //https://docs.gitlab.com/ee/api/
        {name:'Gitlab'},
        //https://developer.gitter.im/docs/welcome
        {name:'Gitter'},
        //https://venngage.com/
        {name:'Glitterly'},
        //https://developers.google.com/docs/api/reference/rest
        {name:'Google Docs'},
        //https://firebase.google.com/docs
        {name:'Google Firebase'},
        //https://developers.google.com/fonts/docs/developer_api
        {name:'Google Fonts'},
        //https://developers.google.com/keep/api/reference/rest
        {name:'Google Keep'},
        //https://developers.google.com/sheets/api/reference/rest
        {name:'Google Sheets'},
        //https://developers.google.com/slides/api/reference/rest
        {name:'Google Slides'},
        //https://gorest.co.in/
        {name:'Gorest'},
        //https://hasura.io/opensource/
        {name:'Hasura'},
        //https://devcenter.heroku.com/articles/platform-api-reference
        {name:'Heroku'},
        //https://host-t.com/
        {name:'host-t.com'},
        //https://host.io/
        {name:'Host.io'},
        //https://http2.pro/doc/api
        {name:'HTTP2.Pro'},
        //https://httpbin.org/
        {name:'Httpbin'},
        //https://cloudflare-quic.com/b/
        {name:'Httpbin Cloudflare'},
        //https://hunter.io/api
        {name:'Hunter'},
        //https://cloud.ibm.com/docs/text-to-speech/getting-started.html
        {name:'IBM Text to Speech'},
        //https://major.io/2022/07/28/extra-icanhazip-services-going-offline/
        {name:'Icanhazepoch'},
        //https://major.io/icanhazip-com-faq/
        {name:'Icanhazip'},
        //https://ifttt.com/docs/connect_api
        {name:'IFTTT'},
        //https://documentation.image-charts.com/
        {name:'Image-Charts'},
        //http://api.docs.import.io/
        {name:'imoport.io'},
        //http://ww01.ip-fast.com/?pid=9POT3387I&pbsubid=ff4c88c9-4d2c-1807-efac-b6ac8b0128b9&noads=http%3A%2F%2Fww01.ip-fast.com%2F%3Fskipskenzo%3Dtrue
        {name:'ip-fast.com'},
        //https://www.ip2whois.com/
        {name:'IP2WHOIS Information Lookup'},
        //https://ipfind.io/
        {name:'ipfind.io'},
        //https://www.ipify.org/
        {name:'IPify'},
        //https://ipinfo.io/developers
        {name:'IPinfo'},
        //https://github.com/jsdelivr/data.jsdelivr.com
        {name:'jsDelivr'},
        //https://json2jsonp.com/
        {name:'JSON 2 JSONP'},
        //https://jsonbin.io/
        {name:'JSONbin.io'},
        //https://kroki.io/
        {name:'Kroki'},
        //https://github.com/cmccandless/license-api/blob/master/README.md
        {name:'License-API'},
        //https://logs.to/
        {name:'Logs.to'},
        //https://lua-decompiler.ferib.dev/
        {name:'Lua Decompiler'},
        //https://macaddress.io/api
        {name:'MAC address vendor lookup'},
        //https://m3o.com/db
        {name:'Micro DB'},
        //https://microenv.com/
        {name:'MicroENV'},
        //https://designer.mocky.io/
        {name:'Mocky'},
        //https://www.myip.com/api-docs/
        {name:'MY IP'},
        //https://nationalize.io/
        {name:'Nationalize.io'},
        //https://docs.netlify.com/api/get-started/
        {name:'Netlify'},
        //https://networkcalc.com/api/docs
        {name:'NetworkCalc'},
        //https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
        {name:'npm Registry'},
        //https://documentation.onesignal.com/docs/onesignal-api
        {name:'OneSignal'},
        //https://www.domcop.com/openpagerank/
        {name:'Open Page Rank'},
        //https://hub.openapihub.com/en-us/
        {name:'OpenAPIHub'},
        //https://opengraphr.com/docs/1.0/overview
        {name:'OpenGraphr'},
        //https://oyyi.xyz/docs/1.0
        {name:'oyyi'},
        //https://pagecdn.com/docs/public-api
        {name:'PageCDN'},
        //https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a
        {name:'Postman'},
        //https://crawlbase.com/
        {name:'ProxyCrawl'},
        //https://proxykingdom.com/
        {name:'ProxyKingdom'},
        //https://pusher.com/beams
        {name:'Pusher Beams'},
        //https://goqr.me/api/
        {name:'QR code'},
        //https://www.qrcode-monkey.com/qr-code-api-with-logo/
        {name:'Qrcode Mopnkey'},
        //https://quickchart.io/
        {name:'QuickChart'},
        //https://api-docs.pgamerx.com/
        {name:'Random Stuff'},
        //https://rejax.io/
        {name:'Rejax'},
        //https://reqres.in/
        {name:'ReqRes'},
        //https://rss-to-json-serverless-api.vercel.app/
        {name:'RSS feed to JSON'},
        //https://www.savepage.io/
        {name:'SavePage.io'},
        //https://scrapeninja.net/
        {name:'ScrapeNinja'},
        //https://www.scraperapi.com/
        {name:'ScraperApi'},
        //https://scraperbox.com/
        {name:'scraperBox'},
        //https://scrapestack.com/
        {name:'scrapestack'},
        //https://scrapingant.com/
        {name:'Scrapingant'},
        //https://www.scrapingdog.com/
        {name:'ScrapingDog'},
        //https://www.screenshotapi.net/
        {name:'ScreenshotAPI.net'},
        //https://color.serialif.com/
        {name:'Serialif Color'},
        //https://serpstack.com/
        {name:'serpstack'},
        //https://sheetsu.com/
        {name:'Sheetsu'},
        //http://shoutcloud.io/
        {name:'SHOUTCLOUD'},
        //https://github.com/Cgboal/SonarSearch
        {name:'Sonar'},
        //https://sonarcloud.io/web_api
        {name:'SonarQube'},
        //https://api.stackexchange.com/
        {name:'Stackexchange'},
        //https://statically.io/
        {name:'Statically'},
        //https://developers.supportivekoala.com/
        {name:'Supportivekoala'},
        //https://tyk.io/open-source/
        {name:'Tyk'},
        //https://github.com/melpon/wandbox/blob/master/kennel2/API.rst
        {name:'Wandbox'},
        //https://webscraping.ai/
        {name:'WebScraping.AI'},
        //https://www.zenrows.com/
        {name:'ZenRows'},

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