import { Router } from 'express' // Importa o Router do Express
import { createTask, updateTask, deleteTask, findAllTasks } from '../controllers/task.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/validate.middleware'
import { CreateTaskDTO, UpdateTaskDTO } from '../dtos/task.dto'
import { auth } from '../middlewares/auth.middleware'

const router = Router() // Cria uma instância do Router

router.post('/', validate(CreateTaskDTO), createTask) // Define a rota para criar uma tarefa
router.get('/', findAllTasks) // Define a rota para buscar todas as tarefas
router.patch('/:id', validate(UpdateTaskDTO), updateTask) // Define a rota para atualizar uma tarefa
router.delete('/:id', deleteTask) // Define a rota para deletar uma tarefa
router.post('/', auth, validate(CreateTaskDTO), createTask) // Define a rota para criar uma tarefa


export default router // Exporta o router