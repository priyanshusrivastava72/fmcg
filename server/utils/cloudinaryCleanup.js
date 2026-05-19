import cloudinary from '../config/cloudinary.js';

/**
 * Deletes a file from Cloudinary using its public_id
 * @param {string} public_id - The Cloudinary public ID of the file
 */
export const deleteFromCloudinary = async (public_id) => {
  if (!public_id) return;
  
  try {
    await cloudinary.uploader.destroy(public_id);
    console.log(`Successfully deleted file from Cloudinary: ${public_id}`);
  } catch (error) {
    console.error(`Failed to delete file from Cloudinary: ${public_id}`, error);
  }
};
