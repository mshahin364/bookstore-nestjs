import { Injectable } from '@nestjs/common';
import { COMMANDS } from 'src/mocks/commands.mock';

@Injectable()
export class CommandsService {
  commands = COMMANDS;

  getCommands(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.commands);
    });
  }

  addCommands(command): Promise<any> {
    return new Promise(resolve => {
      this.commands.push(command);
      resolve(this.commands);
    });
  }
}
