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
import {Services } from './service.service';
import { Service } from './interfaces/service.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class ServiceController {

    constructor(private services: Services) { }


    @Post('service')
    // @UseGuards(new AuthGuard())
    createService(
        @Body() Service: Service,

    ): Promise<Service> {
        return this.services.createService(Service);
    }

    @Get('service/all')
    findServices(): Promise<Service[]> {
        return this.services.getServices();
    }

    @Get('service/:serviceId')
    findService(@Param('serviceId') serviceId): Promise<Service[]> {
        return this.services.getService(serviceId);
    }


    @Delete('service/:serviceId')
    // @UseGuards(new AuthGuard())
    delete(@Param('serviceId') id): Promise<Service> {
        return this.services.delete(id);
    }
}
