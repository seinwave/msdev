---
layout: post
author: matt
title: 30-day Project - Throwing down the gauntlet.
---

### Q: How long has it been since I put a new project up on my portfolio?

### A: Long enough, dammit.

It's time for a new project. Something complex and ambitious — at least compared with my previous work.

I'm going to build a **bug tracker**. And I'm going to chronicle my development, right here, as I go, with *daily* blog posts.

My goal is to have it 100% wrapped and deployed, by **Wednesday, Nov. 30th, 2020**. (About a month, +/- buffer time for some election-related obligations I have.)

Here's the broad strokes of what I want to build.


## Tract 

*Tract* is a bug-tracking / project management solution. Teams will use it to keep track of project due-dates, maintenance / development tickets, and revenues & expenses.


## Users & roles

*Tract* users will be divided into 4 roles:

- **Admins** will have full access to every feature, on every project (and every other non-admin team member)
- **Project Managers** will have full access to every feature, but only on projects to which they are assigned. They will be able to modify permissions for *developers* and *submitters*, but not for other *PMs* or *Admins*
- **Developers** will be able to create new tickets, and file new expenes, on projects to which they're assigned. They will not be able to modify user roles in any way.
- **Submitters** are the most restricted role. They can only create new tickets, and only on their assigned projects. 



## Authentication / Security

These varying roles will be managed at the authentication layer — which will be handled through `Auth0`

Why Auth0?

- Because I want to practice with the platform
- Because I want speedy, smooth implementation of [OAuth 2.0-based](https://oauth.net/2/) social media logins
- I want the option to implement 2-factor auth (which other providers like Firebase don't offer yet)



## MVC Breakdown

### Model

#### Basic Stack
`PostgreSQL` database, deployed on a `Node.js` server, hosted on `Heroku`.

`PostgreSQL`, because it's free and open-source and SQL. And it supports a `boolen` data-type, which is not always the case with other DB management systems. I'll need that `boolean` for approving / rejecting expenses. 

`Node.JS` because I like using the same language for the front and backend. (And the frontend, as you'll see below, will be `React`-based.)

And `Heroku` because it's the cloud platform I'm most familiar with, and I don't want to slow myself down.


#### Data design

My `PostgreSQL` database will have 5 linked tables:

- Users — for the users of Tract, their roles, and their associated projects / expenses / tickets
- Expenses - denoting creator, creation date, purpose, associated projects, etc.
- Tickets - Descriptions of issues / feature requests, complete with time / author details, along with deadlines and associated expenses.
- Projects - Best thought of as a collection of tickets.
- Clients - Collections of projects, ascribed to a specific end-client.  

Here's a ERD I drew up, in [Crow's Foot notation](https://www.gleek.io/blog/crows-foot-notation.html):

![Tract entity-relationship diagram](/assets/images/tract-erd.jpg){: .entry-image}
*Is it pretty enough?*


### View

The view is probably the easiest part to describe. `React` front-end, `Bootstrap` stylings, with `ChartJS` for data visualization.

Also, some pre-built components will come from CleanUI's [React admin template](https://react.cleanui.cloud/#/dashboard/alpha). (I just like the way they look.) 

I'll doodle individual components / screens as I develop them. 


### Control

`React-router` will handle navigation within the app. (Because building links naively sounds painful.)

API calls to the `PostgreSQL DB` will CRUD-ify the data. (Because, how else would you do it?)

`Redux` will handle the storage and modification of the app's state. (Because I'm going to have >20 components, I think. I don't want to manage the state / props of all of them individually.)



## Dev process

Development starts today. 

Each day, I'll write a quick post explaining what I'd intended to do, how it went, and what I learned along the way.

This'll give you a window into my thought process — and possibly a guide for accomplishing a similar project yourself.

I hesitate to a commit to a specific timeline. But here's the rough order I want to accomplish:

1. Auth0 Implementation
2. PSQL server set-up. 
3. Individual data-vizualization components.
4. Dashboard / screens / larger components.
5. Navigation components & logic.
6. Connecting front and back-end
7. Deployment

Wish me luck!
