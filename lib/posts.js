import fs from 'fs';
import path from 'path';
import {reporter} from 'vfile-reporter';
import {remark} from "remark";
import html from "remark-html";
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getFileNames() {
  return fs.readdirSync(postsDirectory);
}

function getAllFiles() {
  return getFileNames().map(name => {
    const content = matter(fs.readFileSync(path.join(postsDirectory, name), 'utf8'));
    return {
      name: name,
      content: content.content,
      ...content.data,
    };
  });
}

function excludeDrafts(files) {
  return files.filter(file => !file.draft);
}

// NOTE: Consider changing name
export function getAllPostIds() {
  const fileNames = getFileNames();

  return fileNames.map(fileName => {
    const parsedContent = matter(fs.readFileSync(path.join(postsDirectory, fileName), 'utf8'));
    
    return {
      params: {
        id: parsedContent.data.slug
      }
    };
  });
}

export async function getPostData(id) {
  const file = getAllFiles().find(file => file.slug === id);
  
  const fullPath = path.join(postsDirectory, file.name);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  }
}

export function getSortedPostsData() {
  const files = getAllFiles();

  return excludeDrafts(files
    .sort(({date: a}, {date: b}) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }));
}
