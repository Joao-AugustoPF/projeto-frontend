const multer = require('multer');
const express = require('express');
const path = require('path')
const cors = require('cors')

// Configuração do storage do multer para especificar o destino e o nome do arquivo
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Escolher a pasta com base em alguma lógica, ou sempre usar 'public'
        cb(null, 'public/images');
    },
    filename: function(req, file, cb) {
        // Usar o timestamp no nome do arquivo para evitar conflitos de nome
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const corsOptions = {
    origin: 'http://localhost:5173',
}

const app = express();
  
app.use(cors(corsOptions))
// Rota para upload de arquivos
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.status(200).json({ message: 'Imagem carregada com sucesso!', path: req.file.path });
    } else {
        res.status(400).json({ message: 'Erro ao fazer upload da imagem' });
    }
});

app.listen(3001, () => {
    console.log(`Servidor express rodando na porta 3001`);
});