import { CreateTaskDTO, UpdateTaskDTO } from '../dtos/task.dto'
import { createTask, findAllTasks, findTaskById, updateTask, deleteTask } from '../repositories/task.repository'

export const createTaskService = async (data: CreateTaskDTO) => {
  return createTask(data)
}

export const findAllTasksService = async () => {
  return findAllTasks()
}

export const findTaskByIdService = async (id: number) => {
  return findTaskById(id)
}

export const updateTaskService = async (id: number, data: UpdateTaskDTO) => {
  return updateTask(id, data)
}

export const deleteTaskService = async (id: number) => {
  return deleteTask(id)
}