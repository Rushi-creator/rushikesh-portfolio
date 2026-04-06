const fs = require('fs');
const path = require('path');

console.log('🧹 Starting cleanup process...\n');

// Files to delete
const filesToDelete = [
  'pnpm-lock.yaml',
  'yarn.lock'
];

// Delete files in root
filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${file}`);
    } else {
      console.log(`ℹ️  Not found: ${file}`);
    }
  } catch (error) {
    console.log(`❌ Error deleting ${file}:`, error.message);
  }
});

// Delete .png.png files in My Projects folder
const projectsDir = path.join(__dirname, 'public', 'assets', 'My Projects');
try {
  const files = fs.readdirSync(projectsDir);
  const pngPngFiles = files.filter(f => f.endsWith('.png.png'));
  
  if (pngPngFiles.length > 0) {
    console.log(`\n📁 Found ${pngPngFiles.length} .png.png files to delete:`);
    pngPngFiles.forEach(file => {
      const filePath = path.join(projectsDir, file);
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${file}`);
    });
  } else {
    console.log('\nℹ️  No .png.png files found');
  }
} catch (error) {
  console.log('❌ Error processing project images:', error.message);
}

console.log('\n✨ Cleanup complete!');
console.log('\n📝 Next steps:');
console.log('1. Review the easter-eggs.tsx file - references to "Naresh" need manual update');
console.log('2. Delete this cleanup.js script when done');
