import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [BooksModule, CommandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
