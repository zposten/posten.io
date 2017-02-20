import * as iosNav from './ios-nav-controller.md'
import * as iosBreak from './ios-required-break-statements.md'
import * as iosStatic from './ios-storing-static-data.md'
import * as iosUiCreation from './ios-ui-creation-methods.md'
import * as iosPopover from './ios-ui-popover-controller.md'
import * as iosVarCopy from './ios-view-var-copy.md'



function parsePosts() {
  let posts = [iosNav, iosBreak, iosStatic, iosUiCreation, iosPopover, iosVarCopy];
  for (let post of posts) {
    parseDate(post);
    splitTags(post);
  }

  posts.sort(function (md1, md2) {
    let date1 = md1.dateObject;
    let date2 = md2.dateObject;

    if (date1 < date2) return 1;
    if (date1 > date2) return -1;
    return 0;
  });

  return posts;
}


function parseDate(md) {
  if (!md.date) return;
  let monthStrs = ['January', 'February', 'March', 'April', 'May',
                   'June', 'July', 'August', 'September', 'October',
                   'November', 'December'];
  let d = md.date.split('-');

  md.dateObject = new Date(d[0], d[1], d[2]);
  md.dateString = `${monthStrs[d[1]]} ${d[2]}, ${d[0]}`;
}

function splitTags(post) {
  let tagstr = post.tags;
  if (!tagstr) return [];
  let tagsArr = tagstr.split(',').map(tag => { if(tag) return tag.trim() });
  post.tags = tagsArr;
}


export default parsePosts();
