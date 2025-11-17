const fs = require('fs');
const { PDFParse } = require('pdf-parse'); // Destructure PDFParse class

const pdfPath = './public/sard_adr.pdf';

async function extractText() {
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const parser = new PDFParse(); // Instantiate the class
        const data = await parser.parse(dataBuffer); // Call the parse method
        console.log(data.text);
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
    }
}

extractText();