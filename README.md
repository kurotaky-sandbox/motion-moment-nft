# MotionMomentNFT

Upload sensor data at the moment of movement to NFT!

![Logo](https://raw.githubusercontent.com/kurotaky-sandbox/motion-moment-nft/main/public/MotionMoment.png)

## プロジェクト名
MotionMomentNFT

## プロジェクトについて（2-3行）

筋電センサーなどの人体をセンシングするデバイスのデータをアップロードして、スポーツや芸能などのスーパープレイの瞬間をNFTとして保存するプロジェクトです。
This project uploads data from myoelectric sensors and other human motion sensing devices to NFT and store moments of recordings of sports, entertainment, and other super-plays.

## 解決しようとしている課題

スポーツや芸能では感動的なプレイが沢山生まれます。

これまではスーパープレイの瞬間を映像や写真として歴史に残してきましたが、人間の体の動きを細かくブロックチェーン上に残す試みは少ないと考えております。

これからウェアラブルデバイスを始めとするセンサが人間の体に常時取り付けられ、スポーツを行っている最中の動きをセンシングしデータ化する試みは増えていくでしょう。

感動的なプレイの数値データをNFTとして記録することで、世界中どこにいてもスーパープレイの記録を閲覧することが出来るようにしたいです。

Many inspiring plays are created in sports and entertainment.
Until now, the moment of a super play has been preserved in history as a video or photograph, but we believe that there have been few attempts to preserve the movements of the human body on the blockchain in detail.
In the future, wearable devices and other sensors will be attached to the human body at all times, and more and more attempts will be made to sense and digitize the movements of the human body during sports activities.
We would like to record the numerical data of inspiring plays as NFT so that the record of super plays can be viewed anywhere in the world.

## 使用した技術

- hardhat
- Next.js
- Solidity
- Filecoin and IPFS
- Polygon testnet

## スマートコントラクトのPolygonscanリンク
- https://mumbai.polygonscan.com/address/0x910efbF269308D9F252aA2231D89F08b5311dd2E

## 直面した課題
- Mintするところまではできたが、UIのインタラクションを工夫する時間は無かった
- ethers.getContractFactoryでNFTをMintする時に `npx hardhat run scripts/mint-nft.mjs` を使わないでethersをどうやって使えばいいか分からなかった

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
