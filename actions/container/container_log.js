const _type = ["log"];
const _provider = "docker";
const _thing = "container";
const _title = "log";
const _description = "some desc";

// used in log actijon
const _opId = 'ContainerLogs';

const _opServer = {
    'ContainerLogs': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerLogs': 'application/json'
};
const _opResponseMediaType = {
    'ContainerLogs': 'application/json'
};
const _opInputMap = {
    'ContainerLogs': {
        'request.path.id': input => input.data.Id,
        'request.query.follow': input => true,
        'request.query.stdout': input => true,
        'request.query.stderr': input => false,
        'request.query.since': input => Date.now() - (1000 * 10),
        'request.query.timestamp': input => true,
        'request.query.tail': input => true
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['Id'],
    properties: {
        Id: {
            ref: 'operation::ContainerLogs://request.path.properties.id'
        },
        Size: {
            ref: 'operation::ContainerLogs://request.query.properties.size'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ContainerLogs://response.body',
};


/*
 *

when click log
1. start stream(socket) server for provider

2. provider, acccount,  thing, remoteId,
2.1  get actionSpec => make url, path, .....
2.2 pass url, path ... => stream server to start fetch


3


3. start fetch, -> handle resp -> 




input.data = 



TODO: 
1. should make
provider\
- docker \
-- logActions/
-----  container_log.js


2. in container_log.js
- fetcher with streamHandler <--  socket.io


1. add fetchTimeout for each action to override
2. inject streamHandler with socket
https://www.npmjs.com/package/node-fetch#streams

action fetch <----- 

curl --unix-socket /var/run/docker.sock \
--output LOGFILE \
-X GET http://localhost/v1.33/containers/cign_test_container/logs?stdout=true





*/
