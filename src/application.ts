import Server from './server';

class Application {
   private server?: Server;

   async start(): Promise<void> {
      const port: string = '3000';
      this.server = new Server(port);
      return this.server?.start();
   }

   async stop(): Promise<void> {
      return this.server?.stop();
   }
}

export default Application;
