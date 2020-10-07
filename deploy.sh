rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update_gudu" &&
git branch -M master &&
git remote add origin git@gitee.com:fycyyy/gudu-ui.git &&
git push -f -u origin master &&
cd -
echo https://fycyyy.gitee.io/gudu-ui