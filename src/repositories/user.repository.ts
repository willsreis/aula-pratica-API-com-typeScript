import User from '../entities/user.entity'
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto'

export const createUser = async (data: CreateUserDTO)=> {
    const newUser = await User.create({ data })

    return {...newUser, password: undefined}
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const findUserByEmail = async(email: string) =>{
    return User.findFirst({where: {email}})
}

export const updateUser = async (id: number, data:UpdateUserDTO) =>{
    return User.update({where:{id},data})
}
export const deleteUser = async (id: number) =>{
    return User.delete ({where:{id}})
}

export const findUserById = async (id: number) => {
    return User.findFirst({ where: { id } }) 
  }

  export const findUserByIdWithTasks = async (id: number) => {
    return User.findFirst({ where: { id }, include: { tasks: true } }) // O include: { tasks: true } faz com que as tarefas sejam incluídas na busca
  }