cp -r packages/vscode-pont .
cd vscode-pont
cp ../yarn.lock .
yarn
npm run build
vsce publish
rm -rf ../vscode-pont