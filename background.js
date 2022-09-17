browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    "id": "spanishdict",
    "title": "Look up on SpanishDict",
    "contexts": ["selection"]
  });
});


browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "spanishdict":
      let s = info.selectionText;
      SD.openTranslationPage(s);

      break;
  }
});
