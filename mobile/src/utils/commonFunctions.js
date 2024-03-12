
export function urlCreator(coverID, size = 'medium') {

    let mappedSize;
    switch(size.toLowerCase()) {
        case 'small':
            mappedSize = 'S'
            break;
        case 'medium':
            mappedSize = 'M'
            break;
        case 'large':
            mappedSize = 'L'
            break;  
        default: 
        mappedSize = 'M'
    }
    // console.log(`https://covers.openlibrary.org/b/id/${coverID}-${mappedSize}.jpg`)

    return `https://covers.openlibrary.org/b/id/${coverID}-${mappedSize}.jpg`;

}