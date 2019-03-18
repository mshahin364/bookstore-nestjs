import { Controller, Get } from '@nestjs/common';
import { CommandsService } from './commands.service';

@Controller('commands')
export class CommandsController {
  constructor(private commandsService: CommandsService) {}

  @Get()
  async getCommands() {
    const commands = await this.commandsService.getCommands();
    console.log(commands);
    return commands;
  }
}
