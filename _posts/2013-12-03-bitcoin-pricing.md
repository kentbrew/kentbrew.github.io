---
layout: post
category : practical
tagline: "Find the price of Bitcoin fast."
tags : [useful]
title: Bitcoin Pricing
---

Bitcoin exchanges live around the world; <a href="https://bitcoinaverage.com/">BitcoinAverage</a> shows the price in a ton of currencies.

There doesn't seem to be the usual heinous practice of putting a 20-minute delay on any of these; as far as I know, they are as live as is practical given the multiple confirmations that need to be done before a transaction is complete.

BitcoinAverage also has a very nice <a href="https://api.bitcoinaverage.com/">self-discovering API</a> that looks like this when you hit the root:

    { 
      "all": "https://api.bitcoinaverage.com/all", 
      "exchanges": "https://api.bitcoinaverage.com/exchanges/", 
      "global_tickers": "https://api.bitcoinaverage.com/ticker/global/", 
      "history": "https://api.bitcoinaverage.com/history/", 
      "ignored": "https://api.bitcoinaverage.com/ignored", 
      "no-mtgox": "https://api.bitcoinaverage.com/no-mtgox/", 
      "tickers": "https://api.bitcoinaverage.com/ticker/" 
    }
