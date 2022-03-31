<!--
title: 'Thundra Movie Fetcher Serverless Demo Application'
description: 'This repo contains the definition of an AWS Step Function built on Lambda in NodeJS.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/mattbillock'
authorName: 'Matt Billock'
-->

# Thundra Movie Fetcher

This application creates a new AWS Step Function consisting of two linked Lambda functions. The end result is a step function that ingests currently playing movies from The Movie Database, and returns the list of titles to the caller.

## Setup

* Clone the repo
* Create a .env file with the following details:
```
TMDB_API_KEY - your API key for TMDB
APP_ENV - your application's environment.
```
* Install packages with `npm install`

## Usage

To execute the Step Function, navigate to the AWS Step Function dashboard for the region configured in your `serverless.yml` file and test with the GUI provided.

### Deployment

```
$ serverless deploy
```

