---
layout: post
author: matt
title: Bingebot (mostly) done!
---

Barring some minor styling work, some dialogue revisions, and a possible face upgrade — the Bingebot is more or less complete!

Or, at least, the features that I initially conceived are working. That's a big victory for me.

Here are some stray thoughts about how it went.

## What I'm happy with

The four-node connection is seamless: MongoDB <-> DialogFlow <-> App Sever <-> FrontEnd. 

It's zippy, easy to interact with, and there are little 'rewards' for the user sprinkled throughout. Happy with the overall experience.

## What I'd do differently

My frustrations are about some avoidable slow-downs in development time.

#### Env struggles

The worst of these, by far, was my previously mentioned Heroku blunders. I screwed up the `ENV variables`, and that cost me like 1.5 days.

#### Twilio time

I also spun my wheels looking at development on `Twilio.` Yes, it would be very cool to SMS this bot — but this bot is also not a great use-case for Twilio. 

There's the cost, for one thing. 

And for another, there's the context issue. Twilio's not great at preserving contexts in conversations, like DialogFlow can. Which means that user's input can derail the conversation, if it's too similar to input that tracks to another Twilio task.

Twilio, to me, seems better for a simple SMS-and-response agent. Which I have ideas for. (More to come later)

#### DF Issues

My final big time waster was struggling with DialogFlow. A case of me not reading the documentation thoroughly enough.

The issue came when I wanted to deploy quick-replies. I didn't know how to do them, so I trialed-and-errored my way through it.

At first, I tried to send a custom payload from DF to my app's server. No dice. There's a [known bug](https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/153) about this issue — custom payloads that are NOT sent to a specific platform (Facebook, WhatsApp, etc) don't include a `platform` specification — which DF can't deal with.

I finally found the (much simpler) quick reply method, of using `agent.add` commands in my node server itself. 

Once that happened, it was smooth sailing. But I lost a lot of time to frustration.

The lesson I learned was to use Google's console to develop / test my code, and then import that code into my server.


## On to the next thing

With this Bingebot under my belt, I'm pretty pleased with how my portfolio looks. Now it's time to offer myself to potential employers. 

Wish me luck everybody. 