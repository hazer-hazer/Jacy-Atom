# Jacy programming language grammar for Atom

Tree-Sitter based Atom plugin for Jacy programming language.

### Installation

1. Install Atom editor if you still haven't
2. Try to search for `language-jacy` package from editor
3. If package found -- install it 😅
4. If no package found:
 - Go to console and write `apm install language-jacy` (apm is the Atom Package Manager which likely be installed if Atom installed)
5. Restart Atom editor, you will see `Jacy` tab in top bar or in `packages` menu (depending on changes to this package)

### What's in the box?!

- Basic highlighting and autocompletion
- Increase/Decrease indent settings (e.g. after `{`) and enclosing delimiters autocompletion (e.g. write `'`, get `'_'`)
- Some simple snippets
- Code folds (supports folding for `{}`, `[]`, `<>` and block comments `/**/`)

### What's next?
This package was made "Just to be" and not for real-world usage as *Jacy* is VERY WIP.
Anyway, some things are planned for future and it is appreciated to contribute to this repo.

1. Stabilize and finish grammar (not `tree-sitter-jacy` but regexps for highlighting)
2. Add more snippets (at least one for each syntax-unit)
3. Write some tests (mostly about `tree-sitter-jacy`)
4. Maybe add some menu items, keymaps or styles?
