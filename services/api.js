import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wlqevbjocqdpkzinmjla.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscWV2YmpvY3FkcGt6aW5tamxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3ODMwMzMsImV4cCI6MTk5MTM1OTAzM30.5fz04PHdeSqnaUoXzPimZsSis4PgeRlbJzy7i9UvMT8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscWV2YmpvY3FkcGt6aW5tamxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3ODMwMzMsImV4cCI6MTk5MTM1OTAzM30.5fz04PHdeSqnaUoXzPimZsSis4PgeRlbJzy7i9UvMT8"
    }
})