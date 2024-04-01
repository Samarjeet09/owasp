const fs = require('fs');

const saveDataToJsonFile = (data, fileName) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(fileName, jsonData);
    console.log('Data saved to file successfully.');
  } catch (error) {
    console.error('Error saving data to file:', error);
  }
};

module.exports = { saveDataToJsonFile };
