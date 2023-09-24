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
    titulo: 'Consultora Lyhem',
    info: 'Api rest creada & Web diseñada',
    imagen: 'ICONOCONSULTORA.png',
  },
  {
    id: 2,
    titulo: 'Consultora Atharmal',
    info: 'Web programada',
    imagen: 'ICONOCONSULTORA2.png',
  },
  {
    id: 3,
    titulo: 'Consultora Global ARG',
    info: 'Web programada y Backend',
    imagen: 'ICONOCONSULTORA3.png',
  },
  {
    id: 4,
    titulo: 'Peliculas ND',
    info: 'Aplicación para buscar películas',
    imagen: 'https://imgur.com/JVCffdx',
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
