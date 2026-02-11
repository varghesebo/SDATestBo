function readFilesAsBase64(files) {
  return files.map(file => {
    const content = fs.readFileSync(file.fullPath);
    return {
      path: file.path,
      content: content.toString('base64')
    };
  });
}