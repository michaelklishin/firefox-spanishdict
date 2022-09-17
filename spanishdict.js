function translationURL (input) {
  return `https://www.spanishdict.com/translate/${input}`
};

function openTranslationPage (input) {
  let url = translationURL(input);
  console.log(`spanishdict: will navigate to ${url}`);

  browser.tabs.create({
    "url": url
  });

  return url;
}

browser.runtime.onInstalled.addListener(() => {
  console.log(`SpanishDict extension has been loaded at ${Date.now()}`);

  browser.contextMenus.create({
    "id": "spanishdict",
    "title": "Look up on SpanishDict",
    "contexts": ["selection"]
  });
})


browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "spanishdict":
      let s = info.selectionText;
      openTranslationPage(s);

      break;
  }
})

browser.commands.onCommand.addListener((name) => {
  console.log(`onCommand: ${name}`);
  switch (name) {
    case "sd-lookup-on-spanishdict":
      console.log(`window.getSelection: ${window.getSelection().toString()}`);
      openTranslationPage(window.getSelection().toString());
      break;
  }
})