const hljs = require('highlight.js');
const fm = require('front-matter');

const MarkdownIt = require('markdown-it');
var taskLists = require('markdown-it-task-lists');

module.exports = function markdownLoader(source) {
  this.cacheable();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); } // eslint-disable-line no-console
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); } // eslint-disable-line no-console

      return '';
    },
  });

  md.use(taskLists, {enabled: true});

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
