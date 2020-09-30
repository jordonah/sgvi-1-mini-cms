import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create/create-user.dto';
import { UpdateUserDto } from './dto/update/update-user.dto';
import { Profile } from './models/profile.entity';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
    
    /**
     * 
     * @param UserRepository 
     * @param customThemeRepository 
     */
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private customThemeRepository: Repository<Profile>
    ){}

    /**
     * 
     * @param createUserDto 
  
     * @param createUserDto 
     */
    async create (createUserDto: CreateUserDto): Promise<User>{

        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);

    }
    async findAll(): Promise<User[]> {
        return await this.userRepository.find(/*{select: ["firstName"], relations: ["Profile"]}*/);
    }
    
    //4. Etc. See https://typeorm.io/#/find-options

    /**
     * 
     * @param id 
     * find by id
     */
    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOne(id);
    }
    
    /**
     * 
     * @param id 
     * Finds by a criterion (id in this case) and deletes. Returns void
     */
    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    /**
     * 
     * @param tenant 
     * Remove the Tenant specifed. Returns Tenant removed.
     */
    async remove(user: User): Promise<User> {
        return await this.userRepository.remove(user);
    }

    //partial update
    /**
     * 
     * @param id 
     * @param tenant 
     * Find by the id and replace the fields sent in Dto
     */
    async update1(id: string, user: UpdateUserDto): Promise<UpdateResult> {
        return await this.userRepository.update(id, { ...user })
    }

    /**
     * 
     * @param tenant 
     * No partial update allowed here. Saves the tenant object supplied
     */
    async update2(user: User): Promise<User> {
        return await this.userRepository.save(user)
    }
}
