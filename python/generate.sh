printf 'Removing old generated files.\n\n'
rm -rf generated/
rm -rf ../../AgrirouterApiProtobufDefinitions

printf 'Create new output folders.\n\n'
mkdir generated
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Commons
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Message/Settings
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Cloud/Registration
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request/Payload/Account
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request/Payload/Endpoint
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response/Payload/Account
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response/Payload/Endpoint
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Request
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Response
mkdir -p ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Push/Notification


printf 'Generating files | Commons\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/commons/*.proto

printf 'Generating files | Message Settings\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/settings/*.proto

printf 'Generating files | Cloud Registration\n\n' 
protoc -Iagrirouter/protobuf/ --python_out=generated/ agrirouter/protobuf/cloud-provider-integration/*.proto

printf 'Generating files | Request\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --python_out=generated/ agrirouter/protobuf/messaging/request/*.proto

printf 'Generating files | Request Payload Account\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/messaging/request/payload/account/*.proto

printf 'Generating files | Request Payload Endpoint\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/messaging/request/payload/endpoint/*.proto

printf 'Generating files | Response\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --python_out=generated/ agrirouter/protobuf/messaging/response/*.proto

printf 'Generating files | Response Payload Account\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/messaging/response/payload/account/*.proto

printf 'Generating files | Response Payload Endpoint\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/messaging/response/payload/endpoint/*.proto

printf 'Generating files | Feed Request\n\n' 
protoc --python_out=generated/ agrirouter/protobuf/messaging/request/payload/feed/*.proto

printf 'Generating files | Feed Response\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --python_out=generated/ agrirouter/protobuf/messaging/response/payload/feed/feed-response.proto

printf 'Generating files | Feed Push Notification\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --python_out=generated/ agrirouter/protobuf/messaging/response/payload/feed/push-notification.proto

printf 'Copy into demo-ag dir.\n\n'
cp generated/agrirouter/protobuf/commons/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Commons/
cp generated/agrirouter/protobuf/settings/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Message/Settings/
cp generated/cloud_provider_integration/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Cloud/Registration/
cp generated/messaging/request/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request/
cp generated/agrirouter/protobuf/messaging/request/payload/account/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request/Payload/Account/
cp generated/agrirouter/protobuf/messaging/request/payload/endpoint/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Request/Payload/Endpoint/
cp generated/messaging/response/response_pb2.py ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response/
cp generated/agrirouter/protobuf/messaging/response/payload/account/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response/Payload/Account/
cp generated/agrirouter/protobuf/messaging/response/payload/endpoint/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Response/Payload/Endpoint/
cp generated/agrirouter/protobuf/messaging/request/payload/feed/* ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Request/
cp generated/messaging/response/payload/feed/feed_response_pb2.py ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Response/
cp generated/messaging/response/payload/feed/push_notification_pb2.py ../../AgrirouterApiProtobufDefinitions/Agrirouter/Feed/Push/Notification/

