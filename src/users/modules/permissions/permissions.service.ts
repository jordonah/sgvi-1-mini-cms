import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './models/permission.entity';

@Injectable()
export class PermissionsService {

    constructor(
        @InjectRepository(Permission) private permissionRepository: Repository<Permission>,
    ){}

    async create (createPermissionDto: CreatePermissionDto): Promise<Permission>{

        const newPermission = this.permissionRepository.create(createPermissionDto);
        return this.permissionRepository.save(newPermission);
        
    }
 
    async findAll(): Promise<Permission[]> {
        return await this.permissionRepository.find({select: ["name"]});
    }    
    
}
