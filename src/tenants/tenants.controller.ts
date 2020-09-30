import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { CreateTenantDto } from './dto/create/create-tenant.dto';
import { UpdateTenantDto } from './dto/update/update-tenant.dto';
import { Tenant } from './models/tenant.entity';
import { TenantsService } from './tenants.service';

@Controller('tenants')
export class TenantsController {

    /**
     * 
     * @param tenantsService 
     * Inject tenantsService
     */
    constructor(private readonly tenantsService: TenantsService) { }

    /**
     * 
     * @param createTenantDto 
     * Handle Post request for create
     */
    @Post()
    create(@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
        //console.log(JSON.stringify(createTenantDto));
        return this.tenantsService.create(createTenantDto);
    }

    /**
     * Handle Get request for find
     */
    @Get()
    findAll(): Promise<Tenant[]> {
        return this.tenantsService.findAll();
    }

    /**
     * 
     * @param id 
     * Handle Get request for find by id
     */
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Tenant> {
        return this.tenantsService.findOne(id);
    }

    /**
     * 
     * @param id id of tenant to be updated
     * @param updateTenantDto new content
     * Handle Put request for 
     */
    @Put(':id')
    partialUpdate(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto): Promise<UpdateResult> {
        return this.tenantsService.update1(id, updateTenantDto);
    }

    /**
     * 
     * @param tenant 
     * Non-partial update. Takes a full tenant without param.
     */
    @Put()
    update(@Body() tenant: Tenant): Promise<Tenant> {
        return this.tenantsService.update2(tenant);
    }
}
