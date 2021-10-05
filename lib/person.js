import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const filePath = path.join(process.cwd(), 'content/person.md');

export function getPersonData() {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContent);

  return {
    ...matterResult.data
  }
}
