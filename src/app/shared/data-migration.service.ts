import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, updateDoc, doc } from '@angular/fire/firestore';

/**
 * Migration service for updating existing data with userId
 * Access via: window.migrationService in browser dev console
 */
@Injectable({
  providedIn: 'root',
})
export class DataMigrationService {
  private firestore = inject(Firestore);

  // Collections that need userId migration
  private readonly COLLECTIONS = [
    'groceries',
    'categories',
    'overview_tasks',
    'assignees',
    'shopping_history',
  ];

  /**
   * Migrate all existing data to a specific userId
   * Usage: window.migrationService.migrateAllDataToUser('user_xxx')
   */
  async migrateAllDataToUser(userId: string): Promise<
    {
      collection: string;
      updated: number;
      errors: number;
    }[]
  > {
    if (!userId) {
      console.error('❌ userId is required');
      return [];
    }

    console.log(`🔄 Starting data migration to userId: ${userId}`);
    const results: { collection: string; updated: number; errors: number }[] = [];

    for (const collectionName of this.COLLECTIONS) {
      const result = await this.migrateCollection(collectionName, userId);
      results.push(result);
    }

    console.log('✅ Migration complete!', results);
    return results;
  }

  /**
   * Migrate a single collection to a specific userId
   */
  async migrateCollection(
    collectionName: string,
    userId: string
  ): Promise<{ collection: string; updated: number; errors: number }> {
    console.log(`  📁 Migrating collection: ${collectionName}`);

    let updated = 0;
    let errors = 0;

    try {
      const colRef = collection(this.firestore, collectionName);
      const snapshot = await getDocs(colRef);

      const updatePromises = snapshot.docs.map(async (docSnapshot) => {
        const data = docSnapshot.data();

        // Skip if already has correct userId or is a system category
        if (data['userId'] === userId) {
          console.log(`    ⏭️ Skipping ${docSnapshot.id} (already has userId)`);
          return;
        }

        // Skip system categories
        if (data['userId'] === 'system' && collectionName === 'categories') {
          console.log(`    ⏭️ Skipping ${docSnapshot.id} (system category)`);
          return;
        }

        try {
          await updateDoc(doc(this.firestore, collectionName, docSnapshot.id), {
            userId: userId,
          });
          console.log(`    ✅ Updated ${docSnapshot.id}`);
          updated++;
        } catch (err) {
          console.error(`    ❌ Error updating ${docSnapshot.id}:`, err);
          errors++;
        }
      });

      await Promise.all(updatePromises);
    } catch (err) {
      console.error(`  ❌ Error reading collection ${collectionName}:`, err);
      errors++;
    }

    console.log(`  📊 ${collectionName}: ${updated} updated, ${errors} errors`);
    return { collection: collectionName, updated, errors };
  }

  /**
   * Preview what would be migrated (dry run)
   */
  async previewMigration(): Promise<void> {
    console.log('📋 Preview of data to migrate:');

    for (const collectionName of this.COLLECTIONS) {
      try {
        const colRef = collection(this.firestore, collectionName);
        const snapshot = await getDocs(colRef);

        const needsMigration = snapshot.docs.filter((d) => {
          const data = d.data();
          return (
            !data['userId'] || (data['userId'] !== 'system' && collectionName !== 'categories')
          );
        });

        console.log(
          `  📁 ${collectionName}: ${needsMigration.length}/${snapshot.docs.length} documents need migration`
        );
      } catch (err) {
        console.error(`  ❌ Error reading ${collectionName}:`, err);
      }
    }
  }
}
