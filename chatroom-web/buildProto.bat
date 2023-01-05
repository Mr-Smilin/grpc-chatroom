cd ./src
rmdir /s/q protofileBackup
ren protofile protofileBackup
cd ../../chatroom-interface/src/main/proto
md protofile
protoc chatroom.proto --js_out=import_style=commonjs:%cd%/protofile --grpc-web_out=import_style=commonjs,mode=grpcwebtext:%cd%/protofile
move /y ./protofile ../../../../chatroom-web/src