export interface MoviesList {
    id: string;
    title: string;
    duration: string;
    budget: string;
    release_date: string;
}


export interface Movie extends MoviesList {
    box_office: string;
    cinematographers: string[];
    poster: string;
    producers: string[];
    summary: string;}
