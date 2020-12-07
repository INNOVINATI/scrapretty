# scrapretty
A pretty dashboard application for Scrapyd built with NuxtJS & Vuetify

## Motivation
A common problem for Scrapy users is the lack of a professional admin/monitoring UI.
In fact, there are a quite a few solutions out there trying to solve this - but most of
them consist of bloated dashboards and usually require a server/backend to make up for
Scrapy's ad-hoc-only scheduling. This project has two main goals:
- Offer a simple and intuitive application for managing/monitoring Scrapyd hosts
- Do this purely on the client side (only host/connection data will be stored in browser) 

As with every software, this won't suit everyone's needs. If you're looking for a fully-fledged
admin application, you might want to take a look at ScrapyWeb or SpiderKeeper.

## Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
