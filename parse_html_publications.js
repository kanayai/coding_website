const cheerio = require('cheerio');

function parsePublicationsHtml(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const publications = [];

    console.log('Loaded HTML into Cheerio. Number of .publication-item found:', $('.publication-item').length);

    $('.publication-item').each((i, element) => {
        console.log('Processing publication item:', i);
        const title = $(element).find('.title').text().trim();
        const authors = $(element).find('.authors').text().trim();
        const journal = $(element).find('.journal').text().trim();
        const link = $(element).find('a.link').attr('href'); // Corrected selector
        const date = $(element).find('.date').text().trim(); // Assuming date is available

        console.log('Title:', title);
        console.log('Authors:', authors);
        console.log('Journal:', journal);
        console.log('Link:', link);
        console.log('Date:', date);


        if (title && link) {
            publications.push({
                date: date,
                authors: authors,
                year: '', // Will need to extract year from authors or date
                title: title,
                journal: journal,
                link: link
            });
        }
    });

    return publications;
}

// Placeholder for HTML content
const placeholderHtml = `
<html>
<body>
    <div class="publication-item">
        <h2 class="title">Example Publication Title 1</h2>
        <p class="authors">Author One, Author Two</p>
        <p class="journal">Journal of Examples</p>
        <p class="date">2023-01-01</p>
        <a class="link" href="https://example.com/pub1">Link 1</a>
    </div>
    <div class="publication-item">
        <h2 class="title">Example Publication Title 2</h2>
        <p class="authors">Author Three</p>
        <p class="journal">Another Journal</p>
        <p class="date">2022-05-15</p>
        <a class="link" href="https://example.com/pub2">Link 2</a>
    </div>
</body>
</html>
`;

const parsedPublications = parsePublicationsHtml(placeholderHtml);
console.log('Final parsed publications:', JSON.stringify(parsedPublications, null, 2)); // Corrected line