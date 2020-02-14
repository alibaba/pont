cp -r packages/vscode-pont .
cd vscode-pont
yarn
npm run build
vsce publish
cd ..
rm -rf vscode-pont