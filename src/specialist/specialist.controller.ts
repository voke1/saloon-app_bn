import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Body,
    Req,
    Res,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import {SpecialistService } from './specialist.service';
import { Specialist } from './interfaces/specialist.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class SpecialistController {

    constructor(private specialistService: SpecialistService) { }


    @Post('specialist')
    // @UseGuards(new AuthGuard())
    createSpecialist(
        @Body() Specialist: Specialist,

    ): Promise<Specialist> {
        return this.specialistService.createSpecialist(Specialist);
    }

    @Get('specialist/all')
    findSpecialists(): Promise<Specialist[]> {
        return this.specialistService.getSpecialists();
    }

    @Get('specialist/:specialistId')
    findSpecialist(@Param('specialistId') specialistId): Promise<Specialist[]> {
        return this.specialistService.getSpecialist(specialistId);
    }


    @Delete('specialist/:specialistId')
    // @UseGuards(new AuthGuard())
    delete(@Param('specialistId') id): Promise<Specialist> {
        return this.specialistService.delete(id);
    }
}
