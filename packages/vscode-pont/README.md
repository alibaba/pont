# pont

pont means bridge in French, and it's the bridge of backend and frontend! [pont](https://github.com/nefe/pont)

[![Version](https://vsmarketplacebadge.apphb.com/version/jasonHzq.vscode-pont.svg)](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/jasonHzq.vscode-pont.svg)](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/jasonHzq.vscode-pont.svg)](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)

## setup

Create a JSON file named `pont-config.json` in anywhere of your project. Once you create or change the file, `vscode-pont` will detect and start the extension process!

The configuration details in `pont-config.json`, please infer [pont](https://github.com/nefe/pont)

## terms definition

#### mod

Interfaces are divided into multiple modules.

#### bo

The entity class in backend, Like Employee、Department.

## usage

The backend will always change the interface params, url path, or response detail etc.. `vscode-pont` will detect and analysis the changed details.
You can choose the interface to update.

Once you create a valid file named `pont-config.json`, the status bar will show buttons as below:
![](https://img.alicdn.com/tfs/TB1kr7SGhjaK1RjSZFAXXbdLFXa-682-70.png)

#### sync

Fetch the interafces info, recalculate the diffs between local and newest in mod and bo.

#### all

Make all bos and mods be the same as your last sync.

#### mod

Select some mods to be the same as your last sync.

If you click mod(num), extension will show the mod diffs detail as below:
![](https://img.alicdn.com/tfs/TB1o_oxGmrqK1RjSZK9XXXyypXa-1746-386.png)

Select a mod you want to update.

#### bo

Select some bos to be the same as your last sync.

If you click mod(num), extension will show the mod diffs detail as below:
![](https://img.alicdn.com/tfs/TB15SUIGXzqK1RjSZSgXXcpAVXa-1762-680.png)

Select a bo you want to update.

#### generate

Generate the frontend code by the upgraded mods and bos.
