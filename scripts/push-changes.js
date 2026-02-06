const { execSync } = require('child_process');

try {
  console.log('Configuring git...');
  execSync('git config user.email "v0@vercel.com"');
  execSync('git config user.name "v0"');

  console.log('Adding all changes...');
  execSync('git add .');

  console.log('Committing changes...');
  execSync('git commit -m "feat: add logo to navbar and footer, fix admin link removal, add updateContact function"');

  console.log('Pushing to GitHub...');
  execSync('git push origin add-logo-to-website');

  console.log('✅ Changes pushed successfully to add-logo-to-website branch!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
