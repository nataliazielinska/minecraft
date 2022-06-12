import $ from "jquery";
import elementFactory from "./elementFactory";
import copyCommand from "./copyCommand";

export default function generateCommandsBlock (item) {

  let commandsContainer = elementFactory({tag: 'div', className: ['commands-container']});
  commandsContainer.append(elementFactory({tag: 'span', className: ['commands-title'], textNode: 'Komendy:'}));
  let commandsObject = item;

  for (const key in commandsObject) {

    let command = elementFactory({tag: 'div', className: ['command']});
    command.append(elementFactory({tag: 'span', className: ['command-title'], textNode: `${key}:`}));

    let commandLineContainer = elementFactory({
      tag: 'div',
      className: ['command-line-container'],
      event: 'click',
      handler: copyCommand
    });
    commandLineContainer.append(elementFactory({
      tag: 'span',
      className: ['command-line'],
      textNode: commandsObject[key]
    }));

    let commandCopyButton = elementFactory({tag: 'button', className: ['button-secondary', 'command-copy-button'], textNode: 'Kopiuj'});
    commandCopyButton.append(elementFactory({tag: 'span', className: ['command-copy-alert'], textNode: 'Skopiowano'}));
    commandLineContainer.append(commandCopyButton);
    command.append(commandLineContainer);
    commandsContainer.append(command);
  }

  commandsContainer.append(elementFactory({
    tag: 'span',
    className: ['close-sign'],
    event: 'click',
    handler: function () {
      $(this).parent('.commands-container').removeClass('is-active');
      $('body').removeClass('modal-commands-active');
      $(this).parents('.lesson-content').removeClass('activated-commands');
    }}));

  return commandsContainer;
}
