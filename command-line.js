"use strict";
/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: Commandline
 * @interface: CommandLineModel
 *
 * @property: argv    @type: object
 * @property: command @type: string
 *
 * @description: responsible for handling
 * yargs library for creating a powerful
 * command line tool interface with argv
 * string buffer.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var CommandLine = /** @class */ (function () {
    function CommandLine() {
        this.argv = yargs.argv;
        this.command = this.argv._[0];
    }
    return CommandLine;
}());
exports.CommandLine = CommandLine;
;
