import fs from 'fs';
import path from 'path';
import {remark} from "remark";
import html from "remark-html";
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getFileNames() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPostIds() {
  const fileNames = getFileNames();

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const content = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    id,
    content: content.toString(),
    ...matterResult.data
  }
}

export function getSortedPostsData() {
  const fileNames = getFileNames();
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data
    };
  });

  return allPostsData.sort(({date: a}, {date: b}) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
