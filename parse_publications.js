const fs = require('fs');

const extractedTextPath = './extracted_publications.txt';

async function parsePublications() {
    try {
        const fullText = fs.readFileSync(extractedTextPath, 'utf8');
        const publications = [];

        // 1. Isolate the "Research Publications" section
        const publicationsSectionStart = fullText.indexOf('5. Research Publications');
        if (publicationsSectionStart === -1) {
            console.error('Could not find "5. Research Publications" section.');
            return;
        }
        let relevantText = fullText.substring(publicationsSectionStart);

        // Find the first actual publication entry using a more robust pattern
        // This pattern looks for a date, followed by some text, then a title in single quotes, and then a DOI link
        const firstPublicationPattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})(.+?),\s*'(.+?)',\s*(.+?)(https:\/\/doi\.org\/10\.\d{4,9}\/[-._;()/:a-zA-Z0-9\.\/-]+)/;
        const firstMatch = relevantText.match(firstPublicationPattern);

        if (firstMatch) {
            relevantText = relevantText.substring(firstMatch.index);
        } else {
            console.error('Could not find the first publication entry in the relevant text.');
            return;
        }


        // Split the text into potential publication blocks based on the date pattern
        const publicationBlocks = relevantText.split(/(\d{1,2}\/\d{1,2}\/\d{2,4})/);

        for (let i = 1; i < publicationBlocks.length; i += 2) {
            const date = publicationBlocks[i];
            const content = publicationBlocks[i + 1];

            // Now, parse the content block more specifically
            // This regex looks for authors, title in single quotes, journal, and DOI link
            // The DOI regex is made more specific to avoid capturing extra text
            const contentRegex = /(.+?),\s*'(.+?)',\s*(.+?)(https:\/\/doi\.org\/10\.\d{4,9}\/[-._;()/:a-zA-Z0-9\.\/-]+)/;
            const match = content.match(contentRegex);

            if (match) {
                const preTitleContent = match[1].trim();
                const title = match[2].trim();
                let postTitleContent = match[3].trim();
                const link = match[4];

                // Further parsing of preTitleContent to separate authors and year
                let authors = preTitleContent;
                let year = '';
                const yearMatch = preTitleContent.match(/(\d{4})$/);
                if (yearMatch) {
                    year = yearMatch[1];
                    authors = preTitleContent.substring(0, yearMatch.index).trim();
                }

                // Remove percentage from journal if present
                const percentageMatch = postTitleContent.match(/\d{1,3}%$/);
                if (percentageMatch) {
                    postTitleContent = postTitleContent.substring(0, percentageMatch.index).trim();
                }
                const journal = postTitleContent;


                publications.push({
                    date: date,
                    authors: authors,
                    year: year,
                    title: title,
                    journal: journal,
                    link: link
                });
            }
        }

        console.log(JSON.stringify(publications, null, 2));

    } catch (error) {
        console.error('Error parsing publications:', error);
    }
}

parsePublications();