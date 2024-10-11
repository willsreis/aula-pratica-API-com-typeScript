import User from '../entities/user.entity'

interface CreateUserDTO{
    name: string
    email: string
    password: string
}
export const createUser = async (data: CreateUserDTO)=> {
    return User.create({data})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const findUserByEmail = async(email: string) =>{
    return User.findFirst({where: {email}})
}

export const updateUser = async (id: number, data:CreateUserDTO) =>{
    return User.update({where:{id},data})
}
export const deleteUser = async (id: number) =>{
    return User.delete ({where:{id}})
}

export const findUserById = async (id: number) => {
    return User.findFirst({ where: { id } }) 
  }