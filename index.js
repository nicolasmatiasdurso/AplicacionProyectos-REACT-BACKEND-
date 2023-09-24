const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

const app = express();

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(bodyParser.json());

// Datos ficticios de proyectos
const proyectos = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    info: 'Información del Proyecto 1',
    imagen: 'imagen1.jpg',
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    info: 'Información del Proyecto 2',
    imagen: 'imagen2.jpg',
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    info: 'Información del Proyecto 2',
    imagen: 'imagen2.jpg',
  },
  {
    id: 4,
    titulo: 'Proyecto 4',
    info: 'Información del Proyecto 2',
    imagen: 'imagen2.jpg',
  },
  {
    id: 5,
    titulo: 'Proyecto 2',
    info: 'Información del Proyecto 2',
    imagen: 'imagen2.jpg',
  },
];

// Obtener todos los proyectos
app.get('/', (req, res) => {
  res.send('API REST PROYECTS');
});

// Obtener todos los proyectos
app.get('/proyectos', (req, res) => {
  res.json(proyectos);
});

// Obtener un proyecto por ID
app.get('/proyectos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto) {
    res.status(404).json({ message: 'Proyecto no encontrado' });
  } else {
    res.json(proyecto);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
