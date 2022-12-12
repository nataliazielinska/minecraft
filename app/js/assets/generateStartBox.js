import elementFactory from './elementFactory';
import generateCommandsBlock from "./generateCommandsBlock";
import {tags} from "./tags";
import {cssClasses} from "./cssClasses";

export default function generateStartBox (startBoxItems) {
  const startBox = elementFactory({tag: tags.div, className: [cssClasses.startBox, cssClasses.boxContainer]});
  const startBoxHeader = elementFactory({
    tag: tags.div,
    className: [cssClasses.boxHeader, startBoxItems.header.className]
  });

  startBoxHeader.append(elementFactory({
    tag: tags.p,
    className: [cssClasses.boxHeaderItem, cssClasses.startBoxHeaderItem],
    textNode: startBoxItems.header.textNode
  }));
  startBox.append(startBoxHeader);

  const startBoxContent = elementFactory({
    tag: tags.div,
    className: [cssClasses.boxContent, cssClasses.startBoxContent, startBoxItems.content.className ]
  });
  startBoxContent.append(elementFactory({
    tag: tags.p,
    className: [cssClasses.startBoxItemDescription],
    textNode: startBoxItems.content.description,
  }));

  const startBoxItemsContainer = elementFactory({tag: tags.div, className: [cssClasses.startBoxItemsContainer]});
  const startButtonsContainer = elementFactory({tag: tags.div, className: [cssClasses.startButtonsContainer]});
  startBoxItems.link && startButtonsContainer.append(elementFactory({
    tag: tags.a,
    className: [cssClasses.buttonPrimary, cssClasses.startBoxButton],
    textNode: startBoxItems.link.textNode,
    attr: [{'href': startBoxItems.link.href}, {'target': '_blank'}]
  }));

  startBoxItems.buttons.forEach(function (button) {
    startButtonsContainer.append(elementFactory({
      tag: tags.button,
      className: [cssClasses.buttonPrimary, cssClasses.startBoxButton, ...button.className],
      textNode: button.textNode,
      attr: button.attr,
      event: 'click',
      handler: button.handler
    }));
    button.commands && startButtonsContainer.append(generateCommandsBlock(button.commands));
  })
  startBoxItemsContainer.append(startButtonsContainer);

  const startImgContainer = elementFactory({tag: tags.div, className: [cssClasses.startBoxImgContainer]});
  startImgContainer.append(elementFactory({
    tag: tags.img,
    className: [cssClasses.startBoxImage, startBoxItems.image.className],
    attr: [{'src': startBoxItems.image.src}]
  }));
  startBoxItemsContainer.append(startImgContainer);
  startBoxContent.append(startBoxItemsContainer);

  startBox.append(startBoxContent);
  return startBox;
}

