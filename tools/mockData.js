const movies = [{
        id: 1,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 2,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 2,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    },
    {
        id: 3,
        name: "John Wick 3",
        slug: "john-wick-3",
        categoryId: 2,
        photo: "https://i.imgyukle.com/2019/07/15/keI84c.jpg"
    },
    {
        id: 4,
        name: "Batman Begins",
        slug: "batman-begins",
        categoryId: 2,
        photo: "https://cdn.wallpapersafari.com/46/21/szSE9r.jpg"
    },
    {
        id: 5,
        name: "Wolves",
        slug: "wolves",
        categoryId: 2,
        photo: "http://www.desktopimages.org/pictures/2014/0918/1/orig_64410.jpg"
    },
    {
        id: 6,
        name: "X Men",
        slug: "x-men",
        categoryId: 5,
        photo: "https://hdqwalls.com/download/x-men-days-of-future-past-banner-1920x1080.jpg"
    },
    {
        id: 7,
        name: "Holiday",
        slug: "holiday",
        categoryId: 4,
        photo: "https://images.wallpapersden.com/image/download/holiday-movie-wallpaper-banner-2014_39317_1920x1080.jpg"
    },
    {
        id: 8,
        name: "Batman",
        slug: "batman",
        categoryId: 6,
        photo: "http://all4desktop.com/data_images/original/4153458-the-dark-knight-rises-banner-HD.jpg"
    },
    {
        id: 9,
        name: "Hobbit",
        slug: "hobbit",
        categoryId: 6,
        photo: "http://getwallpapers.com/wallpaper/full/2/f/3/1363225-hd-wallpaper-1920x1080-of-movies-1920x1080-for-1080p.jpg"
    },
    {
        id: 10,
        name: "Mortal Kombat",
        slug: "mortal-kombat",
        categoryId: 6,
        photo: "https://images.alphacoders.com/983/983650.jpg"
    },
    {
        id: 11,
        name: "The Incredibles",
        slug: "the-incredibles",
        categoryId: 5,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 19,
        name: "Hangover",
        slug: "hangover",
        categoryId: 4,
        photo: "https://1920x1080hdwallpapers.com/image/201512/movies/3533/the-hangover-poster-bradley-cooper-comedy.jpg"
    },
    {
        id: 12,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 1,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 13,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 1,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    },
    {
        id: 14,
        name: "John Wick 3",
        slug: "john-wick-3",
        categoryId: 1,
        photo: "https://i.imgyukle.com/2019/07/15/keI84c.jpg"
    },
    {
        id: 15,
        name: "Batman Begins",
        slug: "batman-begins",
        categoryId: 1,
        photo: "https://cdn.wallpapersafari.com/46/21/szSE9r.jpg"
    },
    {
        id: 16,
        name: "Wolves",
        slug: "wolves",
        categoryId: 1,
        photo: "http://www.desktopimages.org/pictures/2014/0918/1/orig_64410.jpg"
    },
    {
        id: 17,
        name: "X Men",
        slug: "x-men",
        categoryId: 1,
        photo: "https://hdqwalls.com/download/x-men-days-of-future-past-banner-1920x1080.jpg"
    },
    {
        id: 18,
        name: "Holiday",
        slug: "holiday",
        categoryId: 5,
        photo: "https://images.wallpapersden.com/image/download/holiday-movie-wallpaper-banner-2014_39317_1920x1080.jpg"
    },
    {
        id: 20,
        name: "Hobbit",
        slug: "hobbit",
        categoryId: 3,
        photo: "http://getwallpapers.com/wallpaper/full/2/f/3/1363225-hd-wallpaper-1920x1080-of-movies-1920x1080-for-1080p.jpg"
    },
    {
        id: 21,
        name: "Mortal Kombat",
        slug: "mortal-kombat",
        categoryId: 6,
        photo: "https://images.alphacoders.com/983/983650.jpg"
    },
    {
        id: 22,
        name: "The Incredibles",
        slug: "the-incredibles",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 23,
        name: "Hangover",
        slug: "hangover",
        categoryId: 3,
        photo: "https://1920x1080hdwallpapers.com/image/201512/movies/3533/the-hangover-poster-bradley-cooper-comedy.jpg"
    },
    {
        id: 24,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 25,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 4,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    }, {
        id: 26,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 27,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 2,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    },
    {
        id: 28,
        name: "John Wick 3",
        slug: "john-wick-3",
        categoryId: 2,
        photo: "https://i.imgyukle.com/2019/07/15/keI84c.jpg"
    },
    {
        id: 29,
        name: "Batman Begins",
        slug: "batman-begins",
        categoryId: 2,
        photo: "https://cdn.wallpapersafari.com/46/21/szSE9r.jpg"
    },
    {
        id: 30,
        name: "Wolves",
        slug: "wolves",
        categoryId: 2,
        photo: "http://www.desktopimages.org/pictures/2014/0918/1/orig_64410.jpg"
    },
    {
        id: 31,
        name: "X Men",
        slug: "x-men",
        categoryId: 5,
        photo: "https://hdqwalls.com/download/x-men-days-of-future-past-banner-1920x1080.jpg"
    },
    {
        id: 32,
        name: "Holiday",
        slug: "holiday",
        categoryId: 4,
        photo: "https://images.wallpapersden.com/image/download/holiday-movie-wallpaper-banner-2014_39317_1920x1080.jpg"
    },
    {
        id: 33,
        name: "Batman",
        slug: "batman",
        categoryId: 6,
        photo: "http://all4desktop.com/data_images/original/4153458-the-dark-knight-rises-banner-HD.jpg"
    },
    {
        id: 34,
        name: "Hobbit",
        slug: "hobbit",
        categoryId: 6,
        photo: "http://getwallpapers.com/wallpaper/full/2/f/3/1363225-hd-wallpaper-1920x1080-of-movies-1920x1080-for-1080p.jpg"
    },
    {
        id: 35,
        name: "Mortal Kombat",
        slug: "mortal-kombat",
        categoryId: 6,
        photo: "https://images.alphacoders.com/983/983650.jpg"
    },
    {
        id: 36,
        name: "The Incredibles",
        slug: "the-incredibles",
        categoryId: 5,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 37,
        name: "Hangover",
        slug: "hangover",
        categoryId: 4,
        photo: "https://1920x1080hdwallpapers.com/image/201512/movies/3533/the-hangover-poster-bradley-cooper-comedy.jpg"
    },
    {
        id: 38,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 1,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 39,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 1,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    },
    {
        id: 40,
        name: "John Wick 3",
        slug: "john-wick-3",
        categoryId: 1,
        photo: "https://i.imgyukle.com/2019/07/15/keI84c.jpg"
    },
    {
        id: 41,
        name: "Batman Begins",
        slug: "batman-begins",
        categoryId: 1,
        photo: "https://cdn.wallpapersafari.com/46/21/szSE9r.jpg"
    },
    {
        id: 42,
        name: "Wolves",
        slug: "wolves",
        categoryId: 1,
        photo: "http://www.desktopimages.org/pictures/2014/0918/1/orig_64410.jpg"
    },
    {
        id: 43,
        name: "X Men",
        slug: "x-men",
        categoryId: 1,
        photo: "https://hdqwalls.com/download/x-men-days-of-future-past-banner-1920x1080.jpg"
    },
    {
        id: 44,
        name: "Holiday",
        slug: "holiday",
        categoryId: 5,
        photo: "https://images.wallpapersden.com/image/download/holiday-movie-wallpaper-banner-2014_39317_1920x1080.jpg"
    },
    {
        id: 45,
        name: "Hobbit",
        slug: "hobbit",
        categoryId: 3,
        photo: "http://getwallpapers.com/wallpaper/full/2/f/3/1363225-hd-wallpaper-1920x1080-of-movies-1920x1080-for-1080p.jpg"
    },
    {
        id: 46,
        name: "Mortal Kombat",
        slug: "mortal-kombat",
        categoryId: 6,
        photo: "https://images.alphacoders.com/983/983650.jpg"
    },
    {
        id: 47,
        name: "The Incredibles",
        slug: "the-incredibles",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 48,
        name: "Hangover",
        slug: "hangover",
        categoryId: 3,
        photo: "https://1920x1080hdwallpapers.com/image/201512/movies/3533/the-hangover-poster-bradley-cooper-comedy.jpg"
    },
    {
        id: 49,
        name: "Interstellar",
        slug: "interstellar",
        categoryId: 3,
        photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg"
    },
    {
        id: 50,
        name: "Harry Potter 7",
        slug: "harry-potter-7",
        categoryId: 4,
        photo: "https://i.pinimg.com/originals/9e/d5/41/9ed541a71ed31685de63858192d7820b.jpg"
    }
];

const categories = [
    { id: 1, name: "Korku", slug: "korku", photo: "http://www.desktopimages.org/pictures/2014/0918/1/orig_64410.jpg" },
    { id: 2, name: "Aksiyon", slug: "aksiyon", photo: "https://images.wallpapersden.com/image/download/holiday-movie-wallpaper-banner-2014_39317_1920x1080.jpg" },
    { id: 3, name: "Bilim Kurgu", slug: "bilim-kurgu", photo: "https://desktopwalls.net/wp-content/uploads/2015/03/Interstellar%20Matthew%20McConaughey%20Movie%20Poster%20Desktop%20Wallpaper.jpg" },
    { id: 4, name: "Komedi", slug: "komedi", photo: "https://1920x1080hdwallpapers.com/image/201512/movies/3533/the-hangover-poster-bradley-cooper-comedy.jpg" },
    { id: 5, name: "Animasyon", slug: "Animasyon", photo: "https://wallpapersmug.com/download/1920x1080/d8ea8c/the-incredibles-2-8k-poster.jpg" },
    { id: 6, name: "Savaş", slug: "savas", photo: "http://getwallpapers.com/wallpaper/full/2/f/3/1363225-hd-wallpaper-1920x1080-of-movies-1920x1080-for-1080p.jpg" }
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    movies,
    categories
};