# pont

pont means bridge in French. pont is a API code generator.

## usage

### swagger

- 1、make sure that your /v2/api-docs API is login for free

- 2、

### use as cmd

WIP

#### config

- originUrl(string)

swagger api url

- outDir(string)

auto generate code file path

- templatePath(string)

your custom template path

- prettierConfig(object)

generated code is formatted by prettier, your can config your prettier style here;

## vscode usage

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
