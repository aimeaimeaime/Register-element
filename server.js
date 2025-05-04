// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route pour afficher le formulaire (optionnel si tu ouvres form.html directement)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Traitement du formulaire
app.post('/register', (req, res) => {
  const { name, dob, class: studentClass, aspiring, phone, amount } = req.body;

  const insertQuery = `
    INSERT INTO brightstar_users 
    (name, \`Date of Birth\`, class, aspiring, phone, amount) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(insertQuery, [
    name,
    dob || null,
    studentClass,
    aspiring ? 1 : 0,
    phone || null,
    amount || null
  ], (err, result) => {
    if (err) {
      console.error('Erreur lors de l’enregistrement :', err);
      return res.status(500).send('Erreur serveur');
    }
    res.send('<h2>Inscription réussie ! 🌟</h2><a href="/">Retour</a>');
  });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});











