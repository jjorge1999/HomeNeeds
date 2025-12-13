import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Global()
@Module({
  providers: [
    {
      provide: 'FIREBASE_APP',
      useFactory: () => {
        // Build the credential object from environment variables
        // This is a secure way to handle credentials in production without committing the file
        const firebaseConfig = {
          type: process.env.FIREBASE_TYPE,
          projectId: process.env.FIREBASE_PROJECT_ID,
          privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          clientId: process.env.FIREBASE_CLIENT_ID,
          authUri: process.env.FIREBASE_AUTH_URI,
          tokenUri: process.env.FIREBASE_TOKEN_URI,
          authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
          clientC509CertUrl: process.env.FIREBASE_CLIENT_CERT_URL,
        } as admin.ServiceAccount;

        // Fallback for local development if a serviceAccountKey.json is preferred
        // if (!firebaseConfig.projectId) {
        //   try {
        //     const serviceAccount = require('../../serviceAccountKey.json');
        //     return admin.initializeApp({
        //       credential: admin.credential.cert(serviceAccount),
        //     });
        //   } catch (error) {
        //      console.warn('No serviceAccountKey.json found and environment variables are missing.');
        //   }
        // }

        if (
          !firebaseConfig.privateKey ||
          firebaseConfig.privateKey.includes(
            '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
          )
        ) {
          console.warn(
            'YOUR BACKEND IS NOT CONNECTED TO FIREBASE: Missing or Placeholder FIREBASE_PRIVATE_KEY in .env',
          );
          console.warn(
            'Please provide a valid service account private key to enable backend Firebase features.',
          );
          // Return null or a mock if strict dependency injection is not required,
          // or just let it return undefined and handle it in services.
          // For now we just return a dummy object or avoid crashing.
          return null;
        }

        return admin.initializeApp({
          credential: admin.credential.cert(firebaseConfig),
        });
      },
    },
  ],
  exports: ['FIREBASE_APP'],
})
export class FirebaseModule {}
