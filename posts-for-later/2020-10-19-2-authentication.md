---
layout: post
author: matt
title: 30-day Project - Implementing Auth0.
---

## It's Auth0 Day.

Auth0 is almost entirely new to me. I figure I should start with it, since 1) User roles / sign in is critical for my app's functioning, and 2) I like to front-load the trickiest part of my development.

### Goals for the day.
- Implement a skeleton version of `Auth0`. That means having both sign-in and registration work. (I'll be following [this](https://auth0.com/docs/quickstart/spa/react) tutorial.)

### What actually happened.

Can't be too unhappy with this!

![Auth0 at work](/assets/images/auth0-basic-demo.gif){: .entry-image}

Basically, I've built an `AuthButton` component that connects the user to the Auth0 ['Universal Login Page.'](https://auth0.com/docs/universal-login)

That login page is Auth0's big value add. It handles all the authentication from there, and you hardly have to code any of it.

Registration / sign-up both work like a dream.

There are some drawbacks, of course.

For one, the page's style is not at all congruent with my plans for Tract. But that will change — the page is highly customizeable. 

Another issue (I've read) is reliability. Auth0 is younger than its chief AaaS rival, [Firebase](https://firebase.google.com/docs/auth/). It may therefore be more likely to introduce breaking changes as we go along.

At the moment, however, I have no complaints. And neither do many other users. Auth0 gets the job done. 

### What happens tomorrow

Basic sign-up / registration is complete. That's only half the picture. Where Auth0 will *really* earn its keep with me is in **user role assignment.**

My mission tomorrow is to figure out how that works, and create some dummy profiles so I can experience what it feels like from the user's perspective.

