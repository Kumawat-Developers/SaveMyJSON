module.exports  = {
    base: 'https://savemyjson.kumawat.co.in/', // website url
    urls: [ // list of pages you want to crawl
        'https://savemyjson.kumawat.co.in/app/myjson/612c6547dfcf4d00b66941d9', 
        'https://savemyjson.kumawat.co.in/app/myjson/',
    ],
    strictPresence: 'https://savemyjson.kumawat.co.in/', // url will be added to xml only if this exists
    ignoreStrings: [ // ignore any url that has these texts
        'img.xfinity',
        'styles.',
        'm.me'
    ],
    autoCrawl: false, // Recursive crawling functionality
    crawlLevel: 0, // Recursive calling for pages upto 'x' levels
    pageLoad: { // page load configuration
        waitUntil: 'networkidle0',
        timeout: 3000000
    },
    disableHashRoutes: false, // disable routes with Hash in it
    sortBy: 'asc' // 'asc' | 'dsc' | 'none'
}