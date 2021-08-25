## :copyright: eyepex-frontend
> _Demonstration of Carousel application with minimum UIs._

## :book: Table of Contents
   <!-- START doctoc generated TOC please keep comment here to allow auto update -->
   <!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#sparkles-prerequisites)
- [Getting started](#sparkles-getting-started)
- [How to use](#sparkles-how-to-use)
- [Technologies](#sparkles-technologies)
- [License](#sparkles-license)

   <!-- END doctoc generated TOC please keep comment here to allow auto update -->

## :sparkles: Prerequisites

Proceed with next steps if your platform meet following recommended prerequisite.

- Install [Node.js](https://nodejs.org/en/) on your device.

## :sparkles: Getting Started
Run the following command under `eyepex-frontend` directory to install dependencies and run the project.
 ```
 npm install && npm start
 ```

## :sparkles: How to Use

Make sure one or more slides data available on database or add using, I have not used static data binding instead of that I have used the REST APIs.
 ```
POST /v1/api/carousel/add
BODY: { "image": "some_image_url", "title": "some_image_title", "subTitle": "some_image_title" }
 ```

Here is the list of tasks available out of the box and run these via `npm run <task>`.
 ```
   clean             Clean distribution folder
   build             Perform webpack build and generates bundle
   start             Start the app
   watch             Run development application on watch mode
 ```

## :sparkles: Technologies

Usage          	            | Technology
 --------------------------	| --------------------------
Language                    | TypeScript
Framework     	            | Angular
Stream Communication        | RxJS
Dependency Registries      	| NPM

## :sparkles: License

EyePex Frontend is MIT licensed. Please refer LICENSE for more information.
