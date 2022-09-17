browser.runtime.onInstalled.addListener(() => {
  console.log(`SpanishDict extension has been loaded at ${Date.now()}`);

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

browser.commands.onCommand.addListener((name) => {
  console.log(`onCommand: ${name}, ${window.getSelection().toString()}`);
  switch (name) {
    case "sd-lookup-on-spanishdict":
      let selection = window.getSelection().toString();
      console.log(`window.getSelection: ${selection}`);
      SD.openTranslationPage(selection);
      break;
  }
});