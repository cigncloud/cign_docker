const _type = ["log"];
const _provider = "docker";
const _thing = "container";
const _title = "upload";
const _description = "some desc";


// used in log actijon
const _opId = 'ContainerArchive';

const _opServer = {
    'ContainerArchive': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerArchive': 'application/x-tar'
};
const _opResponseMediaType = {
    'ContainerArchive': 'application/json'
};
const _opInputMap = {
    'ContainerArchive': {
        // input: {
        //   user: ..,
        //   source: ...,
        //   destination: ...,
        //    data: <thinsData.data>
        // }
        'request.path.id': input => input.data.Id,
        'request.query.noOverwriteDirNonDir': input => true,
        'request.query.path': input => input.configData.destination,
        'request.body': input => input.configData.source
    }
};
const _inputDataSchema = {
    type: 'object',
    required: ['path'],
    properties: {
        id: {
            type: 'string'
        },
        source: {
            type: 'string'
        },
        destination: {
            type: 'string'
        }
    }
};
const _outputDataSchema = {
    ref: 'operation::ContainerArchive://response.body',
};

const _outputInfoMap = null
let _output;
const _main = async (ContainerArchive, abortController) => {
    _output = await ContainerArchive.fetch(abortController);
    _output.data = _output.body;
    //****  wait for a moment
    await new Promise(resolve => setTimeout(resolve, 5000));
};
await _main(ContainerArchive, abortController);
return _output;


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
