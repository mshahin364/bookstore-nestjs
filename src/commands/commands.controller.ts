import { Controller, Get, Body, Post } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CreateCommandDTO } from './dto/create-command.dto';

@Controller('searchcomands')
export class CommandsController {
  constructor(private commandsService: CommandsService) {}

  @Get()
  async getCommands() {
    const commands = await this.commandsService.getCommands();
    return commands;
  }

  @Post()
  async addCommand(@Body() createCommandDTO: CreateCommandDTO) {
    const command = await this.commandsService.addCommands(createCommandDTO);
    return command;
  }
}
