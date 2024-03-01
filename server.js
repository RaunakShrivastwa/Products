import express from 'express';
import dotenv from 'dotenv';
import os from 'os';
import cluster from 'cluster'
import router from './router/HomeRouter.js';
import Db from './config/Db.js';
import { pid } from 'process';
dotenv.config();
if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {
    const PORT = process.env.PORT;
    const app = express();
    app.use(express.json());
    app.use('/',router)

    app.listen(PORT, (err) => {
        if (err) {
            return console.log('There is error with Server');
        }
        console.log(`Server is Running At ${PORT} serveing by ${pid}`);
    })
}


