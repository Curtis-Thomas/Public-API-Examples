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
        //http://ccdb.hemiola.com/
        {name:'Chinese Character Web'},
        //https://ctext.org/tools/api
        {name:'Chinese Text Project'},
        //https://api.collinsdictionary.com/api/v1/documentation/html/
        {name:'Collins'},
        //https://dictionaryapi.dev/
        {name:'Free Dictionary'},
        //https://new-kbbi-api.herokuapp.com/
        {name:'Indonesia Dictionary'},
        //https://www.linguarobot.io/
        {name:'Lingua Robot'},
        //https://dictionaryapi.com/
        {name:'Merriam-Webster'},
        //https://owlbot.info/
        {name:'OwlBot'},
        //https://developer.oxforddictionaries.com/
        {name:'Oxford'},
        //https://www.synonyms.com/synonyms_api.php
        {name:'Synonyma'},
        //https://en.wiktionary.org/w/api.php
        {name:'Wiktionary'},
        //https://developer.wordnik.com/
        {name:'Wordnik'},
        //https://www.wordsapi.com/docs/
        {name:'Words'},

    ]},
    {name:'Documents & Productivity',
    list: [
        //https://airtable.com/developers/web/api/introduction
        {name:'Airtable'},
        //https://www.api2convert.com/
        {name:'Api2convert'},
        //https://pdflayer.com/
        {name:'apilayer pdflayer'},
        //https://developers.asana.com/docs
        {name:'Asana'},
        //https://clickup.com/api/
        {name:'ClickUp'},
        //https://cloudconvert.com/login
        {name:'Clockify'},
        //https://cloudmersive.com/convert-api
        {name:'CloudConvert'},
        //https://codestats.net/api-docs
        {name:'Cloudmersive Document and Data conversion'},
        //https://codestats.net/api-docs
        {name:'Code::Stats'},
        //https://craftmypdf.com/
        {name:'CraftMyPDF'},
        //https://docs.flowdash.com/docs/api
        {name:'Flowdash'},
        //https://html2pdf.app/
        {name:'Html2PDF'},
        //https://developer.ilovepdf.com/
        {name:'iLovePDF'},
        //https://developer.atlassian.com/server/jira/platform/rest-apis/
        {name:'JIRA'},
        //https://api.mattermost.com/
        {name:'Mattermost'},
        //https://reader.postlight.com/web-parser/
        {name:'Mercury'},
        //https://api.developer.monday.com/docs
        {name:'Monday'},
        //https://developers.notion.com/docs/getting-started
        {name:'Notion'},
        //https://developers.pandadoc.com/
        {name:'PandaDoc'},
        //https://getpocket.com/developer/
        {name:'Pocket'},
        //https://developers.podio.com/
        {name:'Podio'},
        //https://prexview.com/
        {name:'PrexView'},
        //https://restpack.io/
        {name:'restpack'},
        //https://developer.todoist.com/guides/#developing-with-todoist
        {name:'Todoist'},
        //https://apilayer.com/
        {name:'Smart Image Enhancement API'},
        //https://vector.express/
        {name:'Vector Express v2.0'},
        //https://wakatime.com/developers
        {name:'WakaTime'},
        //https://zube.io/docs/api
        {name:'Zube'},
        
    ]},
    {name:'Email',
    list: [
        //https://www.abstractapi.com/api/email-verification-validation-api
        {name:'Abstract Email Validation'},
        //https://mailboxlayer.com/
        {name:'apilayer mailboxlayer'},
        //https://www.disify.com/
        {name:'Disify'},
        //https://dropmail.me/api/#live-demo
        {name:'DropMail'},
        //https://eva.pingutil.com/
        {name:'EVA'},
        //https://www.guerrillamail.com/GuerrillaMailAPI.html
        {name:'Guerrilla Mail'},
        //https://improvmx.com/api/
        {name:'ImprovMX'},
        //https://open.kickbox.com/
        {name:'Kickbox'},
        //https://docs.mail.gw/
        {name:'mail.gw'},
        //https://docs.mail.tm/
        {name:'mail.tm'},
        //https://www.mailboxvalidator.com/api-email-free
        {name:'MailboxValidator'},
        //https://www.mailcheck.ai/#documentation
        {name:'MailCheck.ai'},
        //https://mailtrap.docs.apiary.io/#
        {name:'Mailtrap'},
        //https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication
        {name:'Sendgrid'},
        //https://developers.sendinblue.com/docs
        {name:'Sendinblue'},
        //https://verifier.meetchopra.com/docs#/
        {name:'Verifier'},
        
    ]},
    {name:'Entertainment',
    list: [
        //https://api.chucknorris.io/
        {name:'chucknorris.io'},
        //https://github.com/sameerkumar18/corporate-bs-generator-api
        {name:'Corporate Buzz Words'},
        //https://excuser.herokuapp.com/
        {name:'Excuser'},
        //http://ww1.aakhilv.me/
        {name:'Fun Fact'},
        //https://imgflip.com/api
        {name:'Imgflip'},
        //https://mememaker.github.io/API/
        {name:'Meme Maker'},
        //https://github.com/theIYD/NaMoMemes
        {name:'NamoMemes'},
        //https://uselessfacts.jsph.pl/
        {name:'Random Useless Facts'},
        //https://techy-api.vercel.app/
        {name:'Techy'},
        //https://github.com/beanboi7/yomomma-apiv2
        {name:'Yo Momma Jokes'},
        
    ]},
    {name:'Environment',
    list: [
        //https://docs.breezometer.com/api-documentation/pollen-api/v2/
        {name:'BreezoMeter Pollen'},
        //https://docs.carboninterface.com/#/
        {name:'Carbon Interface'},
        //https://www.climatiq.io/docs
        {name:'Climatiq'},
        //https://docs.cloverly.com/
        {name:'Cloverly'},
        //https://corrently.io/books/susscope2-framework-fur-co2-emissionen-strombezug
        {name:'CO2 Offset'},
        //https://www.energidataservice.dk/
        {name:'Danish data service Energi'},
        //https://gruenstromindex.de/
        {name:'GrunstromIndex'},
        //https://www.iqair.com/air-pollution-data-api
        {name:'IQAir'},
        //https://api-docs.luchtmeetnet.nl/
        {name:'Lunchtmeetnet'},
        //https://data.nationalgrideso.com/
        {name:'National Grid ESO'},
        //https://docs.openaq.org/docs
        {name:'OpenAQ'},
        //https://pm25.lass-net.org/#apis
        {name:'PM2.5 Open Data Portal'},
        //http://www.pm25.in/api_doc
        {name:'PM25.in'},
        //https://developer.nrel.gov/docs/solar/pvwatts/v6/
        {name:'PVWatts'},
        //https://srpenergy-api-client-python.readthedocs.io/en/latest/api.html
        {name:'Srp Energy'},
        //https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0
        {name:'UK Carbon Intensity'},
        //https://api.websitecarbon.com/
        {name:'Website Carbon'},
        
    ]},
    {name:'Events',
    list: [
        //https://www.eventbrite.com/platform/api/
        {name:'Eventbrite'},
        //https://platform.seatgeek.com/
        {name:'SeatGeek'},
        //https://developer.ticketmaster.com/products-and-docs/apis/getting-started/
        {name:'Ticketmaster'},
    ]},
    {name:'Finance',
    list: [
        //https://www.abstractapi.com/api/vat-validation-rates-api
        {name:'Abstract VAT Validation'},
        //https://aletheiaapi.com/
        {name:'Aletheia'},
        //https://alpaca.markets/docs/api-references/market-data-api/
        {name:'Alpaca'},
        //https://www.alphavantage.co/
        {name:'Alpha Vantage'},
        //https://marketstack.com/
        {name:'apilayer marketstack'},
        //https://developers.bb.com.br/home
        {name:'Banco do Brasil'},
        //https://apilayer.com/marketplace/bank_data-api
        {name:'Bank Data API'},
        //https://www.billplz.com/api#introduction
        {name:'Billplz'},
        //https://binlist.net/
        {name:'Binlist'},
        //https://boleto.cloud/
        {name:'Boleto.Cloud'},
        //https://sandbox.developerhub.citi.com/api-catalog-list
        {name:'Citi'},
        //https://www.econdb.com/api/series/CPIUS/?page=1
        {name:'Econdb'},
        //https://fiscaldata.treasury.gov/api-documentation/
        {name:'Fed Treasury'},
        //https://finage.co.uk/
        {name:'Finage'},
        //https://site.financialmodelingprep.com/developer/docs/
        {name:'Financial Modeling Prep'},
        //https://finnhub.io/docs/api
        {name:'Finnhub'},
        //https://fred.stlouisfed.org/docs/api/fred/
        {name:'FRED'},
        //https://frontaccounting.com/fawiki/index.php?n=Devel.SimpleAPIModule
        {name:'Front Accounting APIs'},
        //https://hotstoks.com/?utm_source=public-apis
        {name:'Hotstoks'},
        //https://iexcloud.io/docs/api/
        {name:'IEX Cloud'},
        //https://labs.ig.com/gettingstarted
        {name:'IG'},
        //https://www.mfapi.in/
        {name:'Indian Mutual Fund'},
        //https://intrinio.com/
        {name:'Intrinio'},
        //https://docs.klarna.com/api/payments/
        {name:'Klarna'},
        //https://www.mercadopago.com.br/developers/es/reference
        {name:'MercadoPago'},
        //https://mono.co/
        {name:'Mono'},
        //https://docs.moov.io/api/
        {name:'Moov'},
        //https://nordigen.com/en/account_information_documenation/integration/quickstart_guide/
        {name:'Nordigen'},
        //https://www.openfigi.com/api
        {name:'OpenFIGI'},
        //https://plaid.com/en-eu/
        {name:'Plaid'},
        //https://polygon.io/
        {name:'Polygon'},
        //https://portfoliooptimizer.io/
        {name:'Portfolio Optimizer'},
        //https://razorpay.com/docs/#home-payments
        {name:'Razorpay IFSC'},
        //https://github.com/Real-time-finance/finance-websocket-API/
        {name:'Real Time Finance'},
        //https://www.sec.gov/edgar/sec-api-documentation
        {name:'SEC EDGAR Data'},
        //https://smartapi.angelbroking.com/
        {name:'SmartAPI'},
        //https://www.stockdata.org/
        {name:'StockData'},
        //https://www.styvio.com/
        {name:'Styvio'},
        //https://apilayer.com/marketplace/tax_data-api
        {name:'Tax Data API'},
        //https://developer.tradier.com/
        {name:'Tradier'},
        //https://twelvedata.com/
        {name:'Tewlve Data'},
        //https://tradestie.com/apps/reddit/api/
        {name:'WallstreetBets'},
        //https://www.yahoofinanceapi.com/
        {name:'Yahoo finance'},
        //https://api.youneedabudget.com/
        {name:'YNAB'},
        //https://www.zoho.com/books/api/v3/introduction/#organization-id
        {name:'Zoho Books'},
    ]},
    {name:'Food & Drink',
    list: [
        //https://baconmockup.com/
        {name:'BaconMockup'},
        //https://chompthis.com/api/
        {name:'Chomp'},
        //https://coffee.alexflipnote.dev/
        {name:'Coffee'},
        //https://developer.edamam.com/edamam-docs-nutrition-api
        {name:'Edamam Nutrition'},
        //https://developer.edamam.com/edamam-docs-recipe-api
        {name:'Edamam recipes'},
        //https://github.com/surhud004/Foodish#readme
        {name:'Foodish'},
        //https://fruityvice.com/
        {name:'Fruityvice'},
        //https://developer.kroger.com/reference/
        {name:'Kroger'},
        //https://github.com/heycarsten/lcbo-api
        {name:'LCBO'},
        //https://www.openbrewerydb.org/
        {name:'Open Brewery DB'},
        // /https://world.openfoodfacts.org/data
        {name:'Open Food Facts'},
        //https://punkapi.com/
        {name:'PunkAPI'},
        //https://rustybeer.herokuapp.com/
        {name:'Rustybeer'},
        //https://spoonacular.com/food-api
        {name:'Spoonacular'},
        //https://api-portal.systembolaget.se/
        {name:'Systembolaget'},
        //https://github.com/evz/tacofancy-api
        {name:'TacoFancy'},
        //https://rapidapi.com/apidojo/api/tasty/
        {name:'Tasty'},
        //https://github.com/andyklimczak/TheReportOfTheWeek-API
        {name:'The Report of the Week'},
        //https://www.thecocktaildb.com/api.php
        {name:'TheCocktailDB'},
        //https://www.themealdb.com/api.php
        {name:'TheMealDB'},
        // /https://untappd.com/api/docs
        {name:'Untapped'},
        //http://nypl.github.io/menus-api/
        {name:'What\'s on the menu?'},
        //https://whiskyhunter.net/api/
        {name:'WhiskyHunter'},
        //https://zestfuldata.com/
        {name:'Zestful'},
    ]},
    {name:'Games & Comics',
    list: [
        //https://age-of-empires-2-api.herokuapp.com/
        {name:'Age of Empires II'},
        //https://amiiboapi.com/
        {name:'AmiiboAPI'},
        //https://acnhapi.com/
        {name:'Animal Crossing: New Horizons'},
        //https://github.com/didadadida93/autochess-vng-api
        {name:'Autochess VNG'},
        //https://github.com/bartervg/barter.vg/wiki
        {name:'Barter.vg'},
        //https://develop.battle.net/documentation/guides/getting-started
        {name:'Battle.net'},
        //https://boardgamegeek.com/wiki/page/BGG_XML_API2
        {name:'Board Game Geek'},
        //https://developer.brawlstars.com/#/
        {name:'Brawl Stars'},
        //https://apidocs.cheapshark.com/
        {name:'Bugsnax'},
        //https://apidocs.cheapshark.com/
        {name:'CheapShark'},
        //https://www.chess.com/news/view/published-data-api
        {name:'Chess.com'},
        //http://www.icndb.com/api/
        {name:'Chuck Norris Database'},
        //https://developer.clashofclans.com/#/
        {name:'Clash of Clans'},
        //https://developer.clashroyale.com/#/
        {name:'Clash Royale'},
        //https://comicvine.gamespot.com/api/documentation
        {name:'Comic Vine'},
        //https://crafatar.com/
        {name:'Casfatar'},
        //https://battle.crossuniverse.net/apiDocs.html
        {name:'Cross Universe'},
        //https://deckofcardsapi.com/
        {name:'Deckl of Cards'},
        //https://bungie-net.github.io/multi/index.html
        {name:'Destiny The Game'},
        //https://digimon-api.vercel.app/
        {name:'Digimon Information'},
        //https://documenter.getpostman.com/view/14059948/TzecB4fH
        {name:'Digimon TCG'},
        //https://disneyapi.dev/
        {name:'Disney'},
        //https://docs.opendota.com/
        {name:'Dota 2'},
        //https://www.dnd5eapi.co/docs/
        {name:'Dungeons and Dragons'},
        //https://open5e.com/
        {name:'Dungeons and Dragons (Alternate)'},
        //https://esi.evetech.net/ui
        {name:'Eve Online'},
        //https://ffxivcollect.com/
        {name:'FFXIV Collect'},
        //https://www.easports.com/fifa/ultimate-team/api/fut/item
        {name:'FIFA Ultimate Team'},
        //https://xivapi.com/
        {name:'Final Fantacy XIV'},
        //https://fortnitetracker.com/site-api
        {name:'Fortnite'},
        //https://docs.forza-api.tk/
        {name:'Forza'},
        // /https://www.freetogame.com/api-doc
        {name:'FreeToGame'},
        //https://asli-fun-fact-api.herokuapp.com/
        {name:'Fun Facts'},
        //https://api.funtranslations.com/
        {name:'FunTranslations'},
        //https://www.gamerpower.com/api-read
        {name:'GamerPower'},
        //https://gdbrowser.com/api
        {name:'GdBrowser'},
        //https://github.com/sameerkumar18/geek-joke-api
        {name:'Geek-Jokes'},
        //https://genshin.dev/
        {name:'Genshin Impact'},
        //https://www.giantbomb.com/api/documentation/
        {name:'Giant Bomb'},
        //https://github.com/favware/graphql-pokemon
        {name:'GraphQL Pokemon'},
        //https://wiki.guildwars2.com/wiki/API:Main
        {name:'Guild Wars 2'},
        //https://github.com/rubensayshi/gw2spidy/wiki
        {name:'GW2Spidey'},
        //https://developer.haloapi.com/
        {name:'Halo'},
        //https://hearthstoneapi.com/
        {name:'Hearthstone'},
        //https://rapidapi.com/Ziggoto/api/humble-bundle
        {name:'Humble Bundle'},
        //https://humorapi.com/
        {name:'Humor'},
        //https://api.hypixel.net/
        {name:'Hypixel'},
        //https://github.com/gadhagod/Hyrule-Compendium-API
        {name:'Hyrule Compendium'},
        //https://hytale-api.com/
        {name:'Hytale'},
        //https://api-docs.igdb.com/#getting-started
        {name:'IGDB.com'},
        //https://sv443.net/jokeapi/v2/
        {name:'JokeAPI'},
        //https://jokes.one/api/joke/
        {name:'Jokes One'},
        //http://jservice.io/
        {name:'Jservice'},
        //https://lichess.org/api
        {name:'Lichess'},
        //https://magicthegathering.io/
        {name:'Magic The Gathering'},
        //https://mario-kart-tour-api.herokuapp.com/
        {name:'Mario Kart Tour'},
        //https://developer.marvel.com/
        {name:'Marvel'},
        //https://api.mcsrvstat.us/
        {name:'MineCraft Server Status'},
        //https://www.mmobomb.com/api
        {name:'MMO Games'},
        //https://docs.mod.io/#getting-started
        {name:'mod.io'},
        //https://wiki.vg/Mojang_API
        {name:'Mojang'},
        //https://docs.mhw-db.com/
        {name:'Monster Hunter World'},
        //https://opentdb.com/api_config.php
        {name:'Open Trivia'},
        //https://developers.pandascore.co/docs
        {name:'PandaScore'},
        //https://www.pathofexile.com/developer/docs
        {name:'PAth of Exile'},
        //https://playerdb.co/
        {name:'PlayerDB'},
        //https://pokeapi.co/
        {name:'Pokeapi'},
        //https://github.com/mazipan/graphql-pokeapi
        {name:'PokeAPI (GraphQL)'},
        //https://pokemontcg.io/
        {name:'Pokemon TCG'},
        //https://psychonauts-api.netlify.app/
        {name:'Psychonauts'},
        //https://developer.pubg.com/
        {name:'PUBG'},
        //https://github.com/deltadex7/puyodb-api-deno
        {name:'Puyo Nexus'},
        //https://quizapi.io/
        {name:'quizapi.io'},
        //https://raider.io/api
        {name:'Raider'},
        //https://rawg.io/apidocs
        {name:'RAWG.io'},
        //https://rickandmortyapi.com/
        {name:'Rick and Morty'},
        //https://developer.riotgames.com/
        {name:'Riot Games'},
        //https://rps101.pythonanywhere.com/api
        {name:'RPS 101'},
        //https://runescape.wiki/w/Application_programming_interface
        {name:'Runescape'},
        //https://github.com/JessVel/sakura-card-captor-api
        {name:'Sakura CardCaptor'},
        //https://scryfall.com/docs/api
        {name:'Scryfall'},
        //https://spacetraders.io/?rel=pub-apis
        {name:'SpaceTradersAPI'},
        //https://github.com/Revadike/InternalSteamWebAPI/wiki
        {name:'Steam'},
        //https://superheroapi.com/
        {name:'SuperHeroes'},
        //https://tcgdex.dev/
        {name:'TCGdex'},
        //https://docs.tebex.io/plugin/
        {name:'Tebex'},
        //https://tetr.io/about/api/
        {name:'TETR.IO'},
        //https://www.tronalddump.io/
        {name:'Tronald Dump'},
        //https://docs.universalis.app/
        {name:'Universalis'},
        //https://valorant-api.com/
        {name:'Valorant (non-official)'},
        //https://api.wfstats.cf/
        {name:'Warface (non-official)'},
        //https://developers.wargaming.net/
        {name:'Wargaming.net'},
        //https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md
        {name:'When is next MCU film'},
        //https://xkcd.com/json.html
        {name:'xkcd'},
        //https://ygoprodeck.com/api-guide/
        {name:'Yu-Gi-Oh!'},

    ]},
    {name:'Geocoding',
    list: [
        //https://www.abstractapi.com/api/ip-geolocation-api
        {name:'Abstract IP Geolocation'},
        //https://redocly.github.io/redoc/?url=https://actinia.mundialis.de/latest/swagger.json
        {name:'Actinia Grass GIS'},
        //https://github.com/kamikazechaser/administrative-divisions-db
        {name:'administrive-divisions-db'},
        //https://adresse.data.gouv.fr/
        {name:'adresse.data.gouv.fr'},
        //https://sys.airtel.lv/ip2country/1.1.1.1/?full=true
        {name:'Airtel IP'},
        //https://apiip.net/
        {name:'Apiip'},
        //https://ipstack.com/
        {name:'apilayer ipstack'},
        //http://battuta.medunes.net/
        {name:'Battuta'},
        //https://www.bigdatacloud.com/docs/ip-geolocation
        {name:'BigDataCloud'},
        //https://www.microsoft.com/en-us/maps
        {name:'Bing Maps'},
        //https://www.getthedata.com/bng2latlong
        {name:'bng2latlong'},
        //https://github.com/M-Media-Group/Cartes.io/wiki/API
        {name:'Cartes.io'},
        //http://cep.la/
        {name:'Cep.la'},
        //https://www.citysdk.eu/citysdk-toolkit/
        {name:'CitySDK'},
        //https://country.is/
        {name:'Country'},
        //https://countrystatecity.in/
        {name:'CountryStateCity'},
        //https://gis.ducks.org/datasets/du-university-chapters/api
        {name:'Ducks Unlimited'},
        //https://ipbase.com/
        {name:'FreeGeoIP'},
        //https://api.gouv.fr/les-api/api-geo
        {name:'GeoApi'},
        //https://www.geoapify.com/maps-api
        {name:'Geoapify'},
        //https://www.geocod.io/
        {name:'Geocod.io'},
        //https://geocode.xyz/api
        {name:'Geocode.xyz'},
        //https://geocodify.com/
        {name:'Geocodify.com'},
        //https://geodata.gov.gr/en/
        {name:'Geodata.gov.gr'},
        //https://www.geodatasource.com/web-service
        {name:'GeoDataSource'},
        //http://geodb-cities-api.wirefreethought.com/
        {name:'GeoDB Cities'},
        //https://geographql.netlify.app/
        {name:'GeographQL'},
        //https://www.geojs.io/
        {name:'GeoJS'},
        //https://geokeo.com/
        {name:'Geokeo'},
        //http://www.geonames.org/export/web-services.html
        {name:'GeoNames'},
        //https://www.geoplugin.com/
        {name:'geoPlugin'},
        //https://developers.google.com/earth-engine/
        {name:'Google Earth Engine'},
        //https://developers.google.com/maps/
        {name:'Google Maps'},
        //https://github.com/lennertVanSever/graphcountries
        {name:'Graph Countries'},
        //https://stefanbohacek.com/project/hellosalut-api/
        {name:'HelloSalut'},
        //https://developer.here.com/
        {name:'HERE Maps'},
        //chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/document-blocked.html?details=%7B%22url%22%3A%22http%3A%2F%2Fiyfbodn.com%2F%3Fdn%3Dhirak.site%26pid%3D9POT3387I%26pbsubid%3Db882e239-5827-b68e-4721-39df433bb4d1%26noads%3Dhttp%253A%252F%252Fiyfbodn.com%252F%253Fdn%253Dhirak.site%2526skipskenzo%253Dtrue%22%2C%22hn%22%3A%22iyfbodn.com%22%2C%22dn%22%3A%22iyfbodn.com%22%2C%22fs%22%3A%22%7C%7Ciyfbodn.com%5E%22%7D
        {name:'Hirak IP to Country'},
        //https://geodata.gov.hk/gs/
        {name:'Hong Kong GeoData Store'},
        //https://servicodados.ibge.gov.br/api/docs/
        {name:'IBGE'},
        //https://ip2country.info/
        {name:'IP 2 Country'},
        //https://ipinfo.io/
        {name:'IP Address Details'},
        //https://www.ipvigilante.com/
        {name:'IP Vigilante'},
        //https://ip-api.com/docs
        {name:'ip-api'},
        //https://www.ip2location.com/web-service/ip2location
        {name:'IP2Location'},
        //https://www.ip2location.com/web-service/ip2proxy
        {name:'IP2Proxy'},
        //https://ipapi.co/api/#introduction
        {name:'ipapi.co'},
        //https://ipapi.com/
        {name:'ipapi.com'},
        //https://api.techniknews.net/ipgeo/84.231.19.214
        {name:'IPGEO'},
        //https://ipgeolocation.io/
        {name:'ipgeolocation'},
        //https://www.ipinfodb.com/api
        {name:'IPInfoDB'},
        //https://apis.map.kakao.com/
        {name:'Kakao Maps'},
        //https://tools.keycdn.com/geo
        {name:'keycdn IP Location Finder'},
        //https://web.locationiq.com/docs
        {name:'LocationIQ'},
        //https://map.longdo.com/docs/
        {name:'Longdo Map'},
        //https://docs.mapbox.com/
        {name:'Mapbox'},
        //https://developer.mapquest.com/
        {name:'Mapquest'},
        //https://github.com/IcaliaLabs/sepomex
        {name:'Mexico'},
        //https://nominatim.org/release-docs/latest/api/Overview/
        {name:'Nominatim'},
        //https://www.onemap.gov.sg/docs/
        {name:'One Map, Singapore'},
        //https://onwater.io/
        {name:'OnWater'},
        //https://www.opentopodata.org/
        {name:'Open Topo Data'},
        //https://opencagedata.com/
        {name:'OpenCage'},
        //https://openrouteservice.org/
        {name:'openrouteservice.org'},
        //https://wiki.openstreetmap.org/wiki/API
        {name:'OpenStreetMap'},
        //https://pinballmap.com/api/v1/docs
        {name:'Pinball Map'},
        //https://positionstack.com/
        {name:'positionstack'},
        //https://postali.app/api
        {name:'Postali'},
        //http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&streetnumber=60&ref=domeinnaam.nl&type=json
        {name:'PostcodeData.nl'},
        //https://postcodes.io/
        {name:'Postcodes.io'},
        //https://queimadas.dgi.inpe.br/queimadas/dados-abertos/
        {name:'Queimadas INPE'},
        //https://restcountries.com/
        {name:'REST Countries'},
        //https://www.roadgoat.com/business/cities-api
        {name:'RoadGoat Cities'},
        //https://rapidapi.com/victorkarangwa4/api/rwanda
        {name:'Rwanda Locations'},
        //https://github.com/slftool/slftool.github.io/blob/master/API.md
        {name:'SLF'},
        //https://spotsense.io/
        {name:'SpotSense'},
        //https://developer.tomtom.com/
        {name:'Telize TomTom'},
        //https:uebermaps.com/api/v2
        {name:'Uebermaps'},
        //https://www.smarty.com/docs/cloud/us-zipcode-api
        {name:'US ZipCode'},
        //https://api.mapserv.utah.gov/
        {name:'Utah AGRC'},
        //https://viacep.com.br/
        {name:'ViaCep'},
        //https://what3words.com/resolved.apples.gets
        {name:'What3Words'},
        //https://yandex.com/dev/maps/geocoder/
        {name:'Yandex.Maps Geocoder'},
        //https://www.zipcodeapi.com/
        {name:'ZipCodeAPI'},
        //https://www.zippopotam.us/
        {name:'Zippopotam.us'},
        //https://ziptasticapi.com/
        {name:'Ziptastic'},
    ]},
    {name:'Government',
    list: [
        //https://apikijangportal.bnm.gov.my/
        {name:'Bank Negara Malaysia'},
        //https://www.bclaws.gov.bc.ca/civix/template/complete/api/index.html
        {name:'BCLaws'},
        //https://brasilapi.com.br/
        {name:'Brazil'},
        //https://dadosabertos.bcb.gov.br/
        {name:'Brazil Central Bank Open Data'},
        //https://www.receitaws.com.br/
        {name:'Brazil Recetia WS'},
        //https://dadosabertos.camara.leg.br/swagger/api.html
        {name:'Brazil Chamber of Deputies Open Data'},
        //https://www.census.gov/data/developers/data-sets.html
        {name:'Census.gov'},
        //https://daten.berlin.de/
        {name:'City, Berlin'},
        //https://ckan.multimediagdansk.pl/en
        {name:'City, Gdansk'},
        //https://otwartedane.gdynia.pl/en/api_doc.html
        {name:'City, Gydnia'},
        //https://hri.fi/en_gb/
        {name:'City, Helsinki'},
        //https://opendata.city-adm.lviv.ua/
        {name:'City, Lviv'},
        //https://data.nantesmetropole.fr/pages/home/
        {name:'City, Nantes Open Data'},
        //https://opendata.cityofnewyork.us/
        {name:'City, New York Oepn Data'},
        //https://opendata.praha.eu/en
        {name:'City, Prague Open Data'},
        //https://open.toronto.ca/
        {name:'City, Toronto Open Data'},
        //https://code.gov/
        {name:'Code.gov'},
        //https://data.colorado.gov/
        {name:'Colorado Information Marketplace'},
        //https://datausa.io/about/api/
        {name:'Data USA'},
        //https://api.data.gov/
        {name:'Data.gov'},
        //https://explore.data.parliament.uk/?learnmore=Members
        {name:'Data.parliment.uk'},
        //https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf
        {name:'Deutscher Bundestag DIP'},
        //https://opendata.dc.gov/pages/using-apis
        {name:'District of Columbia Open Data'},
        //https://www.epa.gov/developers/data-data-products#apis
        {name:'EPA'},
        //https://www.fbi.gov/wanted/api
        {name:'FBI Wanted'},
        //https://api.open.fec.gov/developers/
        {name:'FEC'},
        //https://www.federalregister.gov/reader-aids/developer-resources/rest-api
        {name:'Federal Register'},
        //https://ratings.food.gov.uk/open-data/en-GB
        {name:'Food Standadrds Agency'},
        //https://www.thegazette.co.uk/data
        {name:'Gazetta Data, UK'},
        //https://www.gunpolicy.org/api
        {name:'Gun Policy'},
        //http://iinei.inei.gob.pe/microdatos/
        {name:'INEI'},
        //https://interpol.api.bund.dev/
        {name:'Interpol Red Notices'},
        //https://data.ibb.gov.tr/
        {name:'Istanbul (iBB) Open Data'},
        //https://www.nps.gov/subjects/developer/index.htm
        {name:'National Park Services, US'},
        //https://www.data.act.gov.au/
        {name:'Open GOvernment, ACT'},
        //https://datos.gob.ar/
        {name:'Open Government, Argentina'},
        //https://www.data.gov.au/
        {name:'Open Government, Australia'},
        //https://www.data.gv.at/
        {name:'Open Government, Austria'},
        //https://data.gov.be/en
        {name:'Open Government Belgium'},
        //https://open.canada.ca/en
        {name:'Open Government, Canada'},
        //https://www.dane.gov.co/
        {name:'Open Government, Colombia'},
        //https://data.gov.cy/?language=en
        {name:'Open Government, Cyprus'},
        //https://data.gov.cz/english/
        {name:'Open Government, Czech Republic'},
        //https://www.opendata.dk/
        {name:'Open Government, Denmark'},
        //https://avaandmed.eesti.ee/instructions/opendata-dataset-api
        {name:'Open Government, Estonia'},
        //https://www.avoindata.fi/en
        {name:'Open Government Finland'},
        //https://www.data.gouv.fr/fr/
        {name:'Open Government, France'},
        //https://www.govdata.de/daten/-/details/govdata-metadatenkatalog
        {name:'Open Government, Germany'},
        //https://data.gov.gr/
        {name:'Open Government, Greece'},
        //https://data.gov.in/
        {name:'Open Government, India'},
        //https://data.gov.ie/pages/developers
        {name:'Open Government, Ireland'},
        //https://www.dati.gov.it/
        {name:'Open Government, Italy'},
        //https://www.data.go.kr/
        {name:'Open Government, Korea'},
        //https://data.gov.lt/public/api/1
        {name:'Open Government, Lithuania'},
        //https://data.public.lu/fr/
        {name:'Open Government, Luxembourg'},
        //https://datos.gob.mx/
        {name:'Open Government, Mexico'},
        //https://data.overheid.nl/en/ondersteuning/data-publiceren/api
        {name:'Open Government, Netherlands'},
        //https://api.nsw.gov.au/
        {name:'Open Government, New South Wales'},
        //https://www.data.govt.nz/
        {name:'Open Government, New Zeland'},
        //https://data.norge.no/dataservices
        {name:'Open Government, Norway'},
        //https://www.datosabiertos.gob.pe/
        {name:'Open Government, Peru'},
        //https://dane.gov.pl/en
        {name:'Open Government, Poland'},
        //https://dados.gov.pt/en/docapi/
        {name:'Open Government, Portugal'},
        //https://www.data.qld.gov.au/
        {name:'Open Government, Queensland Government'},
        //https://data.gov.ro/
        {name:'Open Government, Romania'},
        //https://data.gov.sa/
        {name:'Open Government, Saudia Arabia'},
        //https://data.gov.sg/developer
        {name:'Open Government, Singaporee'},
        //https://data.gov.sk/en/
        {name:'Open Government, Slovakia'},
        //https://podatki.gov.si/
        {name:'Open Government, Slovenia'},
        //https://data.sa.gov.au/
        {name:'Open Government, South Australian Government'},
        //https://datos.gob.es/en
        {name:'Open Government, Spain'},
        //https://www.dataportal.se/en/404
        {name:'Open Government, Sweden'},
        //https://handbook.opendata.swiss/de/content/nutzen/api-nutzen.html
        {name:'Open Government, Swwitzerland'},
        //https://data.gov.tw/
        {name:'Open Government, Taiwan'},
        //https://data.go.th/
        {name:'Open Government, Thailand'},
        //https://www.data.gov.uk/
        {name:'Open Government, UK'},
        //https://data.gov/
        {name:'Open Government, USA'},
        //https://www.data.vic.gov.au/
        {name:'Open Government, Victoria State Government'},
        //https://data.wa.gov.au/
        {name:'Open Government, West Australia'},
        //https://api.whenisthenextboardexam.com/docs/
        {name:'PRC Exam Schedule'},
        //https://represent.opennorth.ca/
        {name:'Represent by Open North'},
        //https://developer.company-information.service.gov.uk/
        {name:'UK Companies House'},
        //https://uselection.togatech.org/api/
        {name:'USE Presidential Election Data by TogaTech'},
        //https://www.usa.gov/developer
        {name:'USA.gov'},
        //https://api.usaspending.gov/
        {name:'USAspending.gov'},
   
    ]},
    {name:'Health',
    list: [
        //https://data.cms.gov/provider-data/
        {name:'CMS.gov'},
        //https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme
        {name:'Coronavirus'},
        //https://coronavirus.data.gov.uk/details/developers-guide
        {name:'Coronavirus in the UK'},
        //https://covidtracking.com/data/api/version-2
        {name:'Covid Tracking Project'},
        //https://github.com/M-Media-Group/Covid-19-API
        {name:'Covid-19'},
        // /https://npgeo-corona-npgeo-de.hub.arcgis.com/
        {name:'Covid-19 Datenhub'},
        //https://www.bsg.ox.ac.uk/research/covid-19-government-response-tracker
        {name:'Covid-19 Government Response'},
        //https://data.covid19india.org/
        {name:'Covid-19 India'},
        //https://nuttaphat.com/covid19-api/
        {name:'Covid-19 JHU CSSE'},
        //https://github.com/mathdroid/covid-19-api
        {name:'Covid-19 Live data'},
        //https://github.com/Simperfy/Covid-19-API-Philippines-DOH
        {name:'Covid-19 Philippines'},
        //https://api.covid19tracker.ca/docs/1.0/overview
        {name:'COVID-19 Tracker Canada'},
        //https://www.hpb.health.gov.lk/en/api-documentation
        {name:'COVID-19 Tracker Sri Lanka'},
        //https://data.covid19.go.id/public/api/prov.json
        {name:'COVID-ID'},
        //https://covid-19.dataflowkit.com/
        {name:'Dataflow Kit COVID-19'},
        //https://fdc.nal.usda.gov/
        {name:'FoodData Central'},
        //https://www.healthcare.gov/developers/
        {name:'Healthcare.gov'},
        //https://data.humdata.org/
        {name:'Humanitarian Data Exchange'},
        //https://developer.infermedica.com/docs/introduction
        {name:'Infermedica'},
        //https://cov-spectrum.org/public
        {name:'LAPIS'},
        //https://docs.lexigram.io/
        {name:'Lexigram'},
        //http://makeup-api.herokuapp.com/
        {name:'Makeup'},
        //https://documenter.getpostman.com/view/16605343/Tzm8GG7u
        {name:'MyVaccination'},
        //https://npiregistry.cms.hhs.gov/search
        {name:'NPPES'},
        //https://developer.nutritionix.com/
        {name:'Nuutritionix'},
        //https://www.opendata.nhs.scot/
        {name:'Open Data NHS Scotland'},
        //https://disease.sh/
        {name:'Open Disease'},
        //https://open.fda.gov/
        {name:'openFDA Orion Health'},
        //https://ro.postcode.one/coronavirus/api?path=coronavirus/api/#gsc.tab=0
        {name:'Quarantine'},
    ]},
    {name:'Jobs',
    list: [
        //https://developer.adzuna.com/overview
        {name:'Adzuna'},
        //https://documenter.getpostman.com/view/18545278/UVJbJdKh
        {name:'Arbeitnow'},
        //https://jobsuche.api.bund.dev/
        {name:'Arbeitsamt'},
        //https://www.careerjet.com/partners/api/
        {name:'Careerjet'},
        //https://devitjobs.uk/job_feed.xml
        {name:'DevITjobs UK'},
        //https://findwork.dev/accounts/login/?next=/developers/
        {name:'Findwork'},
        //https://graphql.jobs/docs/api/
        {name:'GraphQL Jobs'},
        //https://api.jobs2careers.com/api/spec.pdf
        {name:'Jobs2Careers'},
        //https://jooble.org/api/about
        {name:'Jooble'},
        //http://www.juju.com/publisher/spec/
        {name:'Juju'},
        //https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview
        {name:'Open Skills'},
        //https://www.reed.co.uk/developers
        {name:'Reed'},
        //https://www.themuse.com/developers/api/v2
        {name:'The Muse'},
        //https://developers.upwork.com/?lang=python
        {name:'Upwork'},
        //https://developer.usajobs.gov/
        {name:'USAJOBS'},
        //https://developer.usajobs.gov/
        {name:'WhatJobs'},
        //https://www.ziprecruiter.co.uk/?utm_source=ziprecruiter-com-redirect
        {name:'ZipRecruiter'},
        
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