import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.entity';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Role) private roleRepository: Repository<Role>,
    ){}

    async create (createRoleDto: CreateRoleDto): Promise<Role>{

        const newRole = this.roleRepository.create(createRoleDto);
        return this.roleRepository.save(newRole);
        
    }
 
    async findAll(): Promise<Role[]> {
        return await this.roleRepository.find({select: ["name"]});
    }    
    
}
