# grpc-chatroom  
  
gRpc聊天室實作

## How to use ?

```
building project by JAVA11 or up version
maven install
click chatroom-web\buildProto.bat
docker-compose build
docker-compose up -d
```

run `127.0.0.1:3000`

## Close

```
docker-compose down
```

### 如果 buildProto.bat 運行失敗

- 請至 chatroom-interface\src\main\proto 創建 `protofile` 資料夾
- 執行 `protoc chatroom.proto --js_out=import_style=commonjs:%cd%/protofile --grpc-web_out=import_style=commonjs,mode=grpcwebtext:%cd%/protofile`
- 之後將 `protofile` 資料夾移至 `chatroom-web\src`

<br>  
注意事項:  
  
- 專案使用環境為 win10
- 請確定環境中已安裝對應 JAVA / DOCKER / protoc，以利過程順利運作

<br>
使用技術:

- Java
- gRPC
- protoc
- React.js
- envoy
- Docker
- DockerCompose
