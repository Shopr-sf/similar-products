# Project Name

> Project description

## Related Projects

- https://github.com/viamis/similar-products
- https://github.com/viamis/photo-gallery-module
- https://github.com/viamis/amazon-service-tk
- https://github.com/viamis/review-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

##CRUD API

- /products/:id/add (POST)
- creates a new item record and returns modification results from the database
- /products/:id/related (GET)
- returns the similar products of the Product with ID id.
- /products/:id/update (PUT)
  - updates an item in its entirety on the database and returns the results of said operation from the database
- /products/:id/delete (DELETE)
  - removes a record from the database and returns the sucess message from the database.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
