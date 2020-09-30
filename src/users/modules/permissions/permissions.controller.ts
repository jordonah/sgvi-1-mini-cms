import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './models/permission.entity';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {

    constructor(private readonly permissionsService: PermissionsService) { }

    @Post()
    create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
        //console.log(JSON.stringify(createPermissionDto));
        return this.permissionsService.create(createPermissionDto);
    }

    @Get()
    findAll(): Promise<Permission[]> {
        return this.permissionsService.findAll()
    }

}
