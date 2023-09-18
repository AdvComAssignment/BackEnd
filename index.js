const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

const db = new sqlite3.Database('./Database/Animal.sqlite');

app.use(express.json());
app.use(express.static(__dirname + '/Myproject'));

// สร้างตาราง AirAnimal
db.run(`CREATE TABLE IF NOT EXISTS AirAnimal (
    ID INTEGER PRIMARY KEY,
    Name TEXT,
    Data TEXT,
    Pic VARCHAR
)`);

// สร้างตาราง LandAnimal
db.run(`CREATE TABLE IF NOT EXISTS LandAnimal (
    ID INTEGER PRIMARY KEY,
    Name TEXT,
    Data TEXT,
    Pic VARCHAR 
)`);

// สร้างตาราง WaterAnimal
db.run(`CREATE TABLE IF NOT EXISTS WaterAnimal (
    ID INTEGER PRIMARY KEY,
    Name TEXT,
    Data TEXT,
    Pic VARCHAR 
)`);

//  CRUD สำหรับ AirAnimal
app.get('/airanimals', (req, res) => {
    db.all('SELECT * FROM AirAnimal', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/airanimals/:id', (req, res) => {
    db.get('SELECT * FROM AirAnimal WHERE ID = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!row) {
                res.status(404).send('AirAnimal Not found');
            } else {
                res.json(row);
            }
        }
    });
});

app.post('/airanimals', (req, res) => {
    const animal = req.body;
    db.run('INSERT INTO AirAnimal (Name, Data, Pic) VALUES (?, ?, ?)', animal.Name, animal.Data, animal.Pic, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            animal.ID = this.lastID;
            res.send(animal);
        }
    });
});

app.put('/airanimals/:id', (req, res) => {
    const animal = req.body;
    db.run('UPDATE AirAnimal SET Name = ?, Data = ?, Pic = ? WHERE ID = ?', animal.Name, animal.Data, animal.Pic, req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(animal);
        }
    });
});

app.delete('/airanimals/:id', (req, res) => {
    db.run('DELETE FROM AirAnimal WHERE ID = ?', req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({});
        }
    });
});

//  CRUD สำหรับ LandAnimal
app.get('/landanimals', (req, res) => {
    db.all('SELECT * FROM LandAnimal', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/landanimals/:id', (req, res) => {
    db.get('SELECT * FROM LandAnimal WHERE ID = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!row) {
                res.status(404).send('LandAnimal Not found');
            } else {
                res.json(row);
            }
        }
    });
});

app.post('/landanimals', (req, res) => {
    const animal = req.body;
    db.run('INSERT INTO LandAnimal (Name, Data, Pic) VALUES (?, ?, ?)', animal.Name, animal.Data, animal.Pic, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            animal.ID = this.lastID;
            res.send(animal);
        }
    });
});

app.put('/landanimals/:id', (req, res) => {
    const animal = req.body;
    db.run('UPDATE LandAnimal SET Name = ?, Data = ?, Pic = ? WHERE ID = ?', animal.Name, animal.Data, animal.Pic, req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(animal);
        }
    });
});

app.delete('/landanimals/:id', (req, res) => {
    db.run('DELETE FROM LandAnimal WHERE ID = ?', req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({});
        }
    });
});

//  CRUD สำหรับ WaterAnimal
app.get('/wateranimals', (req, res) => {
    db.all('SELECT * FROM WaterAnimal', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/wateranimals/:id', (req, res) => {
    db.get('SELECT * FROM WaterAnimal WHERE ID = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!row) {
                res.status(404).send('WaterAnimal Not found');
            } else {
                res.json(row);
            }
        }
    });
});

app.post('/wateranimals', (req, res) => {
    const animal = req.body;
    db.run('INSERT INTO WaterAnimal (Name, Data, Pic) VALUES (?, ?, ?)', animal.Name, animal.Data, animal.Pic, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            animal.ID = this.lastID;
            res.send(animal);
        }
    });
});

app.put('/wateranimals/:id', (req, res) => {
    const animal = req.body;
    db.run('UPDATE WaterAnimal SET Name = ?, Data = ?, Pic = ? WHERE ID = ?', animal.Name, animal.Data, animal.Pic, req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(animal);
        }
    });
});

app.delete('/wateranimals/:id', (req, res) => {
    db.run('DELETE FROM WaterAnimal WHERE ID = ?', req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({});
        }
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
