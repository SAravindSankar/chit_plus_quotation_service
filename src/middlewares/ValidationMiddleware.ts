// import { Request, Response, NextFunction } from 'express';
// import { validate } from 'class-validator';
// import { plainToClass } from 'class-transformer';

// export function validationMiddleware<T>(type: any): RequestHandler {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const input = plainToClass(type, req.body);
//     validate(input).then(errors => {
//       if (errors.length > 0) {
//         const errorMessages = errors.map(err => Object.values(err.constraints)).join(', ');
//         res.status(400).json({ message: errorMessages });
//       } else {
//         next();
//       }
//     });
//   };
// }
