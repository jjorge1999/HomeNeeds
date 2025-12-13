import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly MAX_WIDTH = 400;
  private readonly MAX_HEIGHT = 400;
  private readonly QUALITY = 0.7;

  /**
   * Compress an image file and return as base64 data URL
   */
  async compressImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            let { width, height } = img;

            // Calculate new dimensions while maintaining aspect ratio
            if (width > height) {
              if (width > this.MAX_WIDTH) {
                height = Math.round((height * this.MAX_WIDTH) / width);
                width = this.MAX_WIDTH;
              }
            } else {
              if (height > this.MAX_HEIGHT) {
                width = Math.round((width * this.MAX_HEIGHT) / height);
                height = this.MAX_HEIGHT;
              }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
              reject(new Error('Could not get canvas context'));
              return;
            }

            // Draw resized image
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to compressed JPEG
            const compressedDataUrl = canvas.toDataURL('image/jpeg', this.QUALITY);
            resolve(compressedDataUrl);
          } catch (error) {
            reject(error);
          }
        };

        img.onerror = () => {
          reject(new Error('Failed to load image'));
        };

        img.src = event.target?.result as string;
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsDataURL(file);
    });
  }

  /**
   * Validate if file is an image
   */
  isValidImageFile(file: File): boolean {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return validTypes.includes(file.type);
  }

  /**
   * Get file size in human readable format
   */
  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }
}
