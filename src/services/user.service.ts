import { createUser, findAllUsers, findUserByEmail, findUserById, updateUser, deleteUser } from "../repositories/user.repository"

interface CreateUserDTO {
    name: string
    email: string
    password: string
}

export const createUserService = async (data: CreateUserDTO) => {
    const user = await findUserByEmail(data.email)
    if (user) {
        throw new Error('E-mail já cadastrado')
    }
    return await createUser(data)
}

export const findAllUsersService = async () => {
    return findAllUsers()
}


export const updateUserService = async (id: number, data: { name: string, email: string, password: string }) => {
    const user = await findUserById(id)

    if (!user) {
        throw new Error('Usuário não encontrado')
    }

    return updateUser(id, data)
}

export const deleteUserService = async (id: number) => {
    const user = await findUserById(id)

    if (!user) throw new Error('Usuário não encontrado')
    

    return deleteUser(id)
}