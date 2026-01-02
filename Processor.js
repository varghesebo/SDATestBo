function getFilesRecursively(dir, fileList = [], baseDir = dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== 'node_ssssmodules' && file !== '.git') {
        getFilesRecursively(filePath, fileList, baseDir);
      }
    } else {
      // Get relative path from base directory
      const relativePath = path.relative(baseDir, filePath);
      fileList.push({
        path: relativePath.replace(/\\/g, '/'), // Use forward slashes for git
        fullPath: filePath
      });
    }
  });
  
  return fileList;
}