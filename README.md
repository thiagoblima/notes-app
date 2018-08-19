# Notes App

Tiny and simple Nodejs TypeScript command line tool for notes management.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Nodejs, NPM, TypeScript, GitBash or Linux command line interface, VSCode or your preferred Code Editor - Latest 
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm run init-project
```

And repeat

```
npm run list-notes

> notes-node@1.0.0 list-notes C:\notesApp
> node app.js list

Printing 4 note(s).
--
Title: to buy
Body: food
--
Title: to buy from store
Body: food
--
Title: things to do
Body: go to post office
--
Title: My First Note
Body: This is my first note
```

End with an example of getting some data out of the system or using it for a little demo

## Adding a new note

```
node app.js add --title="title" --body="body"
```

## Listing all notes

```
node app list
```

or

```
npm run list-notes
``` 
## Removing note

arguments: --title=<title-id>

accepts string or `\` to handle linux spacing interface.

linux bash example:

```
node app.js remove --title=to\ buy
Note was removed
```

string based example:

```
node app.js remove --title="to buy"
Note was removed
```

## Get note byId 

arguments: --title=<title-id>

```
node app.js read --title=My\ First\ Note
Note found
--
Title: My First Note
Body: This is my first note
``` 


## Running the tests

More to be explored soon.

### Break down into end to end tests

More to be explored soon.

### And coding style tests

More to be explored soon.

## Deployment

more to be explored soon.

## Built With

* [TypeScript](https://www.typescriptlang.org/) - TypeScript language
* [Nodejs](https://nodejs.org/en/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Yargs](https://github.com/yargs/yargs) - Interactive command line tools

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Gitlab](https://gitlab.com/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/). 

## Authors

* **Thiago Lima** - *Initial work* - [Thiago Lima](https://gitlab.com/thiagoblima/notes-app)

See also the list of [contributors](https://gitlab.com/thiagoblima/notes-app) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Used by great companies for grea commannd line tools
* Making better tools for the best user experience
* With love
