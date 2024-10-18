import { CreateTaskDTO, UpdateTaskDTO } from '../dtos/task.dto'
import Task from '../entities/task.entity'

export const createTask = async (data: CreateTaskDTO) => {
    return Task.create({data})
}

export const findAllTasks = async () => {
    return Task.findMany()
}

export const findTaskById = async (id: number) => {
    return Task.findFirst({where: {id}})
}

export const updateTask = async (id: number, data: UpdateTaskDTO) => {
    return Task.update({where: {id}, data})
}

export const deleteTask = async (id: number) => {
    return Task.delete({where: {id}})
}