# Snowflake

Snowflake is Tallwave's tool (Based on [Medium's](https://github.com/medium/snowflake)) for planning and supporting our engineers' career development. You can read more
about how we use this tool in our [growth framework documentation](https://medium.com/s/engineering-growth-framework).
Our growth tool is hosted [publicly](https://snowflake.medium.com).

![Sample image](https://i.imgur.com/e9DYLBr.png)

## Using this
Snowflake is not tied to any official policies at Tallwave currently, it is more for feedback and performance planning. There are 16 Tracks, each with 5 tiers. Advancement through tiers gets progressively harder. The difference between a 4 and a 5 is significantly larger than between 1 and 2. The left most tracks are more technical in nature, and the right most are more people & relationship based. Individual Contributors will tilt towards the left and Managers towards the right, though a mix between the two is normal.

There will be a tension between what people are capable of doing versus what they are already demonstrating. A person should only be moved up a tier if they have consistently shown that they meet the criteria at that tier. 

Another sticky area is if a person has done certain things at a job before Tallwave... This will need to be evaluated on a case by case basis. Due to the nature of our work (and client work in general), developers simply may not get a chance to exercise some of the skills they possess.

## Contributions

Medium's policy:
> You are free to use, change and build on this work to make it useful for your organisation. We will happily consider unencumbered code contributions to improve functionality, but as this is the actual tool we use within Medium, acceptance is likely to be intentional, and deliberate. Meaning, slow. As such, you may prefer to fork the codebase for your own needs. We will not accept any contributions that modify the text of the application (but, thank you in advance for pointing out any typos).

## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

## Future work

* Some of the people-related Tracks are more difficult for remote folk. How do we fix this?
* Load initial data from a file, to improve flexibility.
* Add restricted job title selection and validation.

## How to edit data

All the content is within the `constants.js` file. Modify track info, milestones, and levels. 
