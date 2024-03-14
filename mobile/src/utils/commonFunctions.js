export function urlCreator(coverID = '', size = 'medium') {
  if (!coverID || coverID === '') {
    // return ''; // or return default
    coverID = '';
  }
  let mappedSize;
  switch (size.toLowerCase()) {
    case 'small':
      mappedSize = 'S';
      break;
    case 'medium':
      mappedSize = 'M';
      break;
    case 'large':
      mappedSize = 'L';
      break;
    default:
      mappedSize = 'M';
  }
  // console.log(`https://covers.openlibrary.org/b/id/${coverID}-${mappedSize}.jpg`)

  return `https://covers.openlibrary.org/b/id/${coverID}-${mappedSize}.jpg`;
}

export function fetchRandomFromArray(array, fetchNumber) {
  let randomNumArray = [];
  while (randomNumArray.length != fetchNumber) {
    num = Math.floor(Math.random() * array.length);
    !randomNumArray.includes(num) ? randomNumArray.push(num) : null;
  }
  const finalArr = [];
  for (let i = 0; i < randomNumArray.length; i++) {
    finalArr.push(array[randomNumArray[i]]);
  }

  return finalArr;
}

export function fetchValuesFromItem(item) {
  let authorName, final_url, author_key, ratings, publishedYear, coverID;
  // let authorName =
  // item?.author_name === undefined
  //   ? item?.authors[0]?.name
  //   : item?.author_name[0];

  if (item?.ratings_average) {
    ratings = item?.ratings_average;
  } else {
    ratings = null;
  }

  if (item?.first_publish_year) {
    publishedYear = item?.first_publish_year;
  } else {
    publishedYear = null;
  }

  if (!item?.authors && !item?.author_name) {
    authorName = '';
  } else if (!item?.author_name) {
    authorName = item?.authors[0]?.name;
  } else {
    authorName = item?.author_name[0];
  }
  final_url =
    item?.cover_i === undefined
      ? urlCreator(item?.cover_id, 'medium')
      : urlCreator(item?.cover_i, 'medium');

  if (!item?.cover_i && !item?.cover_id) {
    coverID = '';
  } else if (item?.cover_i) {
    coverID = item?.cover_i;
  } else {
    coverID = item?.cover_id;
  }

  let titleName = item?.title;

  // let author_key =
  //   item?.author_key === undefined ? item?.authors[0]?.key : item?.author_key;

  if (!item?.author_key && !item?.authors) {
    author_key = '';
  } else if (!item?.author_key) {
    author_key = item?.authors[0]?.key;
  } else {
    author_key = item?.author_key;
  }
  const authorString = 'authors';
  if (typeof author_key == 'object') {
    author_key = author_key[0];
  }
  if (!author_key.includes(authorString)) {
    author_key = `/authors/${author_key}`;
  }

  let key = item?.key;

  // console.log(author_key);
  // console.log(key);

  return {
    authorName,
    final_url,
    titleName,
    author_key,
    key,
    publishedYear,
    ratings,
    coverID,
  };
}
