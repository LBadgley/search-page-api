import { writePageToQuery, readFromQuery } from './hash-query.js';
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    queryOptions.page--;
    const newQuery = writePageToQuery(existingQuery, queryOptions.page);
    window.location.hash = newQuery;
});

nextButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    queryOptions.page++;
    const newQuery = writePageToQuery(existingQuery, queryOptions.page);
    window.location.hash = newQuery;
});