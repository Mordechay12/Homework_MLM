// Required modules
const tl = require("azure-pipelines-task-lib/task");
const fs = require('fs');

// File path to the AssemblyInfo.cs file
const filePath = 'D://a//1//s//SortAndPrint//SortAndPrint//Properties//AssemblyInfo.cs';

// Access the input parameters passed from the task.json file
const newDescription = tl.getInput("description", true);
const newCompany = tl.getInput("company", true);
const newProduct = tl.getInput("product", true);

// Log the input parameters to the console
console.log("New Description:", newDescription);
console.log("New Company:", newCompany);
console.log("New Product:", newProduct);

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    // Replace the necessary values in the AssemblyInfo.cs content
    const modifiedContent = data
      .replace(/\[assembly: AssemblyDescription\(".*"\)\]/, `[assembly: AssemblyDescription("${newDescription}")]`)
      .replace(/\[assembly: AssemblyCompany\(".*"\)\]/, `[assembly: AssemblyCompany("${newCompany}")]`)
      .replace(/\[assembly: AssemblyProduct\(".*"\)\]/, `[assembly: AssemblyProduct("${newProduct}")]`);

    // Extract the current version numbers from the AssemblyInfo.cs content
    const currentVersionMatch = modifiedContent.match(/\[assembly: AssemblyVersion\("(\d+\.\d+\.\d+\.)(\d+)"\)\]/);
    const currentFileVersionMatch = modifiedContent.match(/\[assembly: AssemblyFileVersion\("(\d+\.\d+\.\d+\.)(\d+)"\)\]/);
    const currentVersion = currentVersionMatch ? parseInt(currentVersionMatch[2]) : 0;
    const currentFileVersion = currentFileVersionMatch ? parseInt(currentFileVersionMatch[2]) : 0;

    // Increment the version number by 1 for each run
    const newVersion = currentVersion + 1;
    const newFileVersion = currentFileVersion + 1;

    // Replace the necessary value in the AssemblyInfo.cs content
    const finalContent = modifiedContent
      .replace(/\[assembly: AssemblyVersion\("\d+\.\d+\.\d+\..*"\)\]/, `[assembly: AssemblyVersion("${currentVersionMatch[1]}${newVersion}")]`)
      .replace(/\[assembly: AssemblyFileVersion\("\d+\.\d+\.\d+\..*"\)\]/, `[assembly: AssemblyFileVersion("${currentFileVersionMatch[1]}${newFileVersion}")]`);

    // Write the modified content back to the file
    fs.writeFile(filePath, finalContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('AssemblyInfo.cs file updated successfully.');

        // Read the file again and print its content to the screen
        fs.readFile(filePath, 'utf8', (err, updatedData) => {
          if (err) {
            console.error('Error reading the file:', err);
          } else {
            console.log('Updated file content:');
            console.log(updatedData);
          }
        });
      }
    });
  }
});
