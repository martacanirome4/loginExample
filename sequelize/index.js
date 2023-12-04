
const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt'); // para encriptar las contraseñas
const logger = require('../logger'); // para mostrar mensajes por consola

// creamos la instancia de sequelize
const sequelize =  new Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize/db.sqlite',
    logging: true
});

// cargamos los modelos
const modelDefiners = [
    require('./models/user.model'),
    // El resto de modelos...
];

// los inicializamos pasandole la instancia de sequelize
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}


// funcion para resetear nuestra bd
async function reset(){
    // force: true -> borra la bd y la crea de nuevo
    await sequelize.sync({force: true}); // falsepara que no se reinicie la DB
    // comprobamos que la bd esta vacia
    const count = await sequelize.models.user.count(); // cuenta el numero de usuarios
    const USERS = [
        {username: 'user'},
        {username: 'admin'},
    ]
    if (count == 0){
        // creamos usuarios de prueba
        for (let index = 0; i < USERS.length; indixe++){
            // creamos el usuario
            user[index].password = await bcrypt.hash(user[index].password, 10); // encriptamos la contraseña
            // guardamos el usuario en la bd
        }
        await sequelize.models.user.bulkCreate(USERSusers); // creamos los usuarios
    }
}

