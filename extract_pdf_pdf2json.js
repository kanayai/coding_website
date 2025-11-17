const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfPath = './public/sard_adr.pdf';

async function extractText() {
    try {
        const pdfParser = new PDFParser();
        let extractedText = '';

        pdfParser.on("pdfParser_dataReady", pdfData => {
            pdfData.Pages.forEach(page => {
                page.Texts.forEach(text => {
                    extractedText += text.R[0].T; // Removed decodeURIComponent
                });
            });
            console.log(extractedText);
        });

        pdfParser.on("pdfParser_dataError", errData => {
            console.error('Error extracting text from PDF:', errData.parserError);
        });

        pdfParser.loadPDF(pdfPath);

    } catch (error) {
        console.error('Error setting up PDF extraction:', error);
    }
}

extractText();