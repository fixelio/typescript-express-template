import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import * as http from 'http';

const version = '/v1';

class Server {
   private port: string;
   private app: express.Express;
   private httpServer?: http.Server;

   constructor(port: string) {
      this.port = port;
      this.app = express();
      this.app.use(json());
      this.app.use(urlencoded({ extended: true }));
      this.app.use(morgan('dev'));
   }

   async start(): Promise<void> {
      return new Promise<void>(resolve => {
         this.httpServer = this.app.listen(this.port, () => console.log(`[INFO]: Server started in port ${this.port}`));
         resolve();
      });
   }

   async stop(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
         if(this.httpServer) {
            this.httpServer.close(err => {
               if(err) {
                  return reject();
               }

	       return resolve();
	    });
	 }

	 return resolve();
      });
   }
}

export default Server;
