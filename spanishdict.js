function translationURL (input) {
  return `https://www.spanishdict.com/translate/${input}`
};

function openTranslationPage (input) {
  let url = translationURL(input);

  browser.tabs.create({
    "url": url
  });

  return url;
};

SD = {
  translationURL: translationURL,
  openTranslationPage: openTranslationPage
}