/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: Commandline
 * @interface: CommandLineModel
 * 
 * @instance: argv    @type: object
 * @instance: command @type: string
 *
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
