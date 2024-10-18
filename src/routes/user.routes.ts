import { Router } from 'express' 
import { createUser, findAllUsers, updateUser, deleteUser, findUserByIdWithTasks, authenticateUser } from '../controllers/user.controller' 
import { validate } from '../middlewares/validate.middleware'  
import { CreateUserDTO } from '../dtos/user.dto' 

const router = Router() 

router.post('/', validate(CreateUserDTO), createUser) 
router.patch('/:id', validate(CreateUserDTO), updateUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser) 
router.get('/:id/tasks', findUserByIdWithTasks) // Define a rota para buscar um usuário pelo ID e suas tarefas
router.post('/authenticate', authenticateUser) // Define a rota para autenticar um usuário

export default router 