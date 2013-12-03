---
layout: post
category : practical
tagline: "Prove you had it first with the blockchain."
tags : [legal, archive, useful]
title: Proof of Existence
---
{% include JB/setup %}

Here's an interesting side-effect of Bitcoin: you can create a document, calculate a cryptographic digest, and add the digest to the worldwide ledger with a small transaction. Once your transaction is confirmed by the Bitcoin network, it's there forever. If you ever need to prove that you had possession of the document at or before the time of confirmation, all you need to do is calculate the digest again and show that it matches.

If you're running a Bitcoin node and know what you're doing, you can do this yourself for only the cost of network fees, .0002 Bitcoin, about 38 cents at current rates.

If not, Manuel Ar&aacute;oz's Proof of Existence (<a href="http://www.proofofexistence.com/">http://www.proofofexistence.com/</a>) is a complete implementation of this idea with a nice Web interface, and will take care of everything for .005 Bitcoin, about $5.89 as of right now.