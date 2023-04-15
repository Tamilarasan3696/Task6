class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if (rating == null) {
            return this.rating = "PG";
        }
        else {
            return this.rating = rating;
        }
    }
    getPG() {
        if (rating == "PG") {
            return this.rating;
        }
    }

}
var movie = new movie("Casino Royale", "Eon productions","PG13");
var movie1=new movie("vikrem","red gaint","PG12");
console.log(movie1);
console.log(movie);