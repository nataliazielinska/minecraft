import $ from 'jquery';
import elementFactory from './elementFactory';
import generateCommandsBlock from "./generateCommandsBlock";

export default function generateStartBox (startBoxItems) {
  let startBox = elementFactory({tag: 'div', className: ['start-box', 'box-container']});
  let startBoxHeader = elementFactory({tag: 'div', className: ['box-header', startBoxItems.header.className]});
  $(startBoxHeader).append(elementFactory({tag: 'p', className: ['box-header-item', 'start-box-header-item'], textNode: startBoxItems.header.textNode}));
  startBox.append(startBoxHeader);
  let startBoxContent = elementFactory({tag: 'div', className: ['box-content', 'start-box-content', startBoxItems.content.className ]});
  startBoxContent.append(elementFactory({
    tag: 'p',
    className: ['start-box-item-description'],
    textNode: startBoxItems.content.description,
  }));

  let startBoxItemsContainer = elementFactory({tag: 'div', className: ['start-box-items-container']});
  let startButtonsContainer = elementFactory({tag: 'div', className: ['start-buttons-container']});
  startBoxItems.link && startButtonsContainer.append(elementFactory({
    tag: 'a',
    className: ['button-primary', 'start-box-button'],
    textNode: startBoxItems.link.textNode,
    attr: [{'href': startBoxItems.link.href}, {'target': '_blank'}]
  }));

  startBoxItems.buttons.forEach(function (button) {
    startButtonsContainer.append(elementFactory({
      tag: 'button',
      className: ['button-primary', 'start-box-button', ...button.className],
      textNode: button.textNode,
      attr: button.attr,
      event: 'click',
      handler: button.handler
    }));
    button.commands && startButtonsContainer.append(generateCommandsBlock(button.commands));
  })
  startBoxItemsContainer.append(startButtonsContainer);

  let startImgContainer = elementFactory({tag: 'div', className: ['start-box-img-container']});
  startImgContainer.append(elementFactory({
    tag: 'img',
    className: ['start-box-image', startBoxItems.image.className],
    attr: [{'src': startBoxItems.image.src}]
  }));
  startBoxItemsContainer.append(startImgContainer);
  startBoxContent.append(startBoxItemsContainer);

  startBox.append(startBoxContent);
  return startBox;
}

