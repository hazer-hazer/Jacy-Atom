'use babel';

import LanguageJacyView from './language-jacy-view';
import { CompositeDisposable } from 'atom';

export default {

  languageJacyView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.languageJacyView = new LanguageJacyView(state.languageJacyViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageJacyView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-jacy:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.languageJacyView.destroy();
  },

  serialize() {
    return {
      languageJacyViewState: this.languageJacyView.serialize()
    };
  },

  toggle() {
    console.log('LanguageJacy was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
