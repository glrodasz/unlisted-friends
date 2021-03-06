# Unlisted Friends
[![Travis](https://img.shields.io/travis/glrodasz/unlisted-friends.svg)](https://travis-ci.org/glrodasz/unlisted-friends)
[![Codecov](https://img.shields.io/codecov/c/github/glrodasz/unlisted-friends.svg)](https://codecov.io/github/glrodasz/unlisted-friends)
[![npm](https://img.shields.io/npm/v/unlisted-friends.svg)](https://www.npmjs.com/package/unlisted-friends)
[![npm](https://img.shields.io/npm/dt/unlisted-friends.svg)](https://www.npmjs.com/package/unlisted-friends)

A library for verify which following friends on Twitter that are not in your lists.

## Install and setup
```bash
npm install --save unlisted-friends
```
You need to provide your own application keys for use the **Twitter API**.

1. Visit **https://dev.twitter.com/apps** and register a new application.
2. Go to the application **Keys and Access Tokens** page.
3. Click on **Create my access token** to generate your access tokens.\*
4. Pass the _consumer key_ and _consumer secret_ as **second and third arguments** respectively when you use the library.

>\* The access tokens is for have private permissions for your personal account.

## How to use
The method returns a Promise with the a list of the names of the unlisted friends.
```javascript
const unlisted = require('unlisted-friends');
const friends = unlisted.get('glrodasz', '<PUT YOUR KEY HERE>', '<PUT YOUR SECRET HERE>');

friends.then(console.log).catch(console.log);
```

If you have all your friends in list you will get something like:
```bash
> [Error: @glrodasz does not have unlisted friends.]
```
But if you have unlisted friends you will get something like:
```bash
> ['hugeinc', 'auth0']
```

The Twitter API has some rate limits window divided into 15 minute intervals when you use **application-only authentication**. [Learn more](https://dev.twitter.com/rest/public/rate-limiting).

The library will print a message with the related error:

```bash
> [Error: Rate limit exceeded From Twitter API threw in members module.]
```

## Notes
In order to avoid the Twitter API rate limit, this library retrieves only **6000 friends**, **15 public lists** and **5000 members** for each list.

## Development
In order to run the tests locally you need to rename the file `keys.json.example` to `keys.json` and put your consumer and secret keys.
