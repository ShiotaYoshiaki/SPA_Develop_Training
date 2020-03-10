# gitBash

## Install

1. Install
   1. winは[URL](https://gitforwindows.org/)よりInstall
   2. macは[URL](https://tracpath.com/bootcamp/git-install-to-mac.html#)を参照
2. チェックボックスはそのまま
3. 起動
4. コマンドが使えるか確認

```
git --version
```

## 事前準備
1. GitHubの登録


## ショートカットの登録
1. 右クリック
2. Optionsを選択
3. Mouseタブを選択
4. RightButtonを選択
5. Pasteを選択

## GitHubの設定

### ユーザアカウント
1. 既存設定の確認

```
git config --global --list
```

2. ユーザ名登録

```
git config --global user.name xxxx
```

3. メールアドレスを設定

```
git config --global user.email xxxx
```

### 公開/秘密鍵



1. 現在の持ち物を確認   

```
ls -al ~/.ssh
```

2. なければ、作成する
3. 新しい鍵を確認

```
ssh-keygen -t rsa -b 4096 -C "ここにメールアドレスを入れるのが一般的"
```

4. sshの格納場所や、鍵のパスワードを聞かれる。指定しないならば何もせずEnterを3回
5. 新規作成後、1のコマンドで作成できたか確認
6. 公開鍵をコピー
   1. winの方は下記

```
clip < ~/.ssh/id_rsa.pub
```

   2. macの方は下記
```
pbcopy < ~/.ssh/id_rsa.pub
```

7. 接続確認

```
ssh -T git@github.com
```

   1. Are you sure you want to continue connecting (yes/no/[fingerprint])?と聞かれたら、コンソールに下記を入力

```
yes
```

   2. 下記のように自分の名前が表示されればOK

```
Hi ShiotaYoshiaki! You've successfully authenticated, but GitHub does not provide shell access.
```


#### 参考

https://qiita.com/suthio/items/2760e4cff0e185fe2db9

