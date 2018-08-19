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

import * as _ from  'lodash';
import * as yargs from 'yargs';

export interface CommandLineModel {
  argv: object;
  command: string;
}

export class CommandLine implements CommandLineModel {
  public argv;
  public command;
  constructor() {
    this.argv = yargs.argv;
    this.command = this.argv._[0];
  }

};
