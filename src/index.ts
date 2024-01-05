import { http, Request, Response, } from "@google-cloud/functions-framework";
import * as admin from 'firebase-admin';


admin.initializeApp();

http('backup', (request: Request, response: Response) => {

  response.status(200).send("Testing!");
    
});
