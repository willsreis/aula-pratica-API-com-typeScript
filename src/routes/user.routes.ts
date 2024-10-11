import { Router } from 'express' 
import { createUser, findAllUsers, updateUser, deleteUser } from '../controllers/user.controller' 

const router = Router() 

router.post('/', createUser) 
router.get('/', findAllUsers)
router.patch('/:id', updateUser) 
router.delete('/:id', deleteUser) 

export default router 