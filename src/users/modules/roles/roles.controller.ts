import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) { }

    @Post()
    create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
        //console.log(JSON.stringify(createRoleDto));
        return this.rolesService.create(createRoleDto);
    }

    @Get()
    findAll(): Promise<Role[]> {
        return this.rolesService.findAll()
    }

}
