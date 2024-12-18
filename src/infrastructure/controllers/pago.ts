import { Router } from 'express';
import { CrearPagoUseCase } from '../../application/usecases/create_payment';

const router = Router();

router.post('/', async (req, res) => {
  const useCase = new CrearPagoUseCase();
  try {
    const pago = await useCase.execute(req.body);
    res.status(201).json(pago);
  } catch (error) {
   if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

export default router;
