import express from 'express';
import sequelize from './infrastructure/database/sequelize';
import router from './infrastructure/controllers/pago';
// import pagosRoutes from './presentation/routes/pagos.routes';


const app = express();
const PORT = process.env.PORT_APPLICATION || 3000;

app.use(express.json());
app.use('/pagos', router);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
