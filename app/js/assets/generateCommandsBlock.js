import elementFactory from "./elementFactory";
import copyCommand from "./copyCommand";
import {tags} from "./tags";
import {cssClasses} from "./cssClasses";
import {dataTags} from "./dataTags";

export default function generateCommandsBlock (item) {

  const commandsContainer = elementFactory({
    tag: tags.div,
    className: [cssClasses.commandsContainer],
    attr: [{'data-container':'commands-container'}]
  });
  commandsContainer.append(elementFactory({
    tag: tags.span,
    className: [cssClasses.commandsTitle],
    textNode: 'Komendy:'
  }));
  const commandsObject = item;

  for (const key in commandsObject) {

    const command = elementFactory({tag: tags.div, className: [cssClasses.command]});
    command.append(elementFactory({tag: tags.span, className: [cssClasses.commandsTitle], textNode: `${key}:`}));

    const commandLineContainer = elementFactory({
      tag: tags.div,
      className: [cssClasses.commandLineContainer],
      event: 'click',
      handler: copyCommand
    });
    commandLineContainer.append(elementFactory({
      tag: tags.span,
      className: [cssClasses.commandLine],
      textNode: commandsObject[key],
      attr: [{'data-container':'commands-line'}]
    }));

    const commandCopyButton = elementFactory({
      tag: tags.button,
      className: [cssClasses.buttonSecondary, cssClasses.commandCopyButton],
      textNode: 'Kopiuj'
    });
    commandCopyButton.append(elementFactory({
      tag: tags.span,
      className: [cssClasses.commandCopyAlert],
      textNode: 'Skopiowano'
    }));
    commandLineContainer.append(commandCopyButton);
    command.append(commandLineContainer);
    commandsContainer.append(command);
  }

  commandsContainer.append(elementFactory({
    tag: tags.span,
    className: [cssClasses.closeSign],
    event: 'click',
    handler: function () {
      this.closest(dataTags.commandsContainer)?.classList.remove(cssClasses.isActive);
      document.querySelector(tags.body)?.classList.remove(cssClasses.modalCommandsActive);
      this.closest(dataTags.lessonContent)?.classList.remove(cssClasses.activatedCommands);
    }}));

  return commandsContainer;
}
