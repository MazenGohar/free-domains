// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'A Home Online Store based in USA', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'thehome', // desired subdomain name
  owner: {
    repo: '<https://github.com/MazenGohar/free-domains/tree/master>',
    email: '<mazengoharforsolutions@gmail.com>',
  },
  record: {
    NS: ['dns1.freehostia.com', 'dns2.freehostia.com']
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
