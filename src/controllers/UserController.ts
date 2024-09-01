// import { Request, Response } from 'express';
// import { createUser, getUser } from '../services/OrganisationService';

// export const createUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await createUser(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// };

// export const getUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await getUser(Number(req.params.id));
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user', error: error.message });
//   }
// };
