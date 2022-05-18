const _type = ["get"];
const _provider = "docker";
const _thing = "image";
const _title = "create";
const _description = "some desc";
const _opServer = {
    'ImageCreate': '/v1.33'
};
const _opRequestMediaType = {
    'ImageCreate': 'text/plain'
};
const _opResponseMediaType = {
    'ImageCreate': 'text/plain'
};

const _opInputMap = {
    'ImageCreate': {
        'request.query.fromImage': input => {
            if (Array.isArray(input.connected.registryImage) && input.connected.registryImage.length > 0) {
                return input.connected.registryImage[0].data.Name;
            } else {
                let name = input.data.Name;
                // if no tag, it will pull all related images
                if (name.split(':').legnth == 1) name += ":latest";
                return name;
            };
        },
        //'request.query.repo': input => {
        //    return input.data.Repo;
        //},
    }
};

const _outputInfoMap = {
    id: data => data.Id,
    status: data => 'started'
};


const _inputDataSchema = {
    type: 'object',
    properties: {
        Name: {
            type: 'string',
            example: 'cetnos:latest'
        }
    }
};
const _outpuDataSchema = {
    ref: 'operation::ImageCreate://response'
};


//let _noResultResponse = {
//    status: 404,
//    statusText: 'Not Found',
////{"message":"pull access denied for fuckkk, repository does not exist or may require 'docker login': denied: requested access to the resource is denied"}
//}



let _output;
const _main = async (ImageCreate, image_get) => {
    const Name = _input.data.Name;
    // 1. first  pull
    let result = await ImageCreate.fetch();
    if (result.status == 'success' && result.code == 404) {
        // couldnt find image, body is empty
        throw new Error(`Couldnt find image "${_input.data.Name}`)
    };
    // 2. get
    let input = {
        data: {
            Name: Name
        }
    }
    _output = await image_get.run(input);
    _output.data = _output.body;

};
await _main(ImageCreate, image_get);
return _output;

/*


https://hub.docker.com/support/doc/how-do-i-authenticate-with-the-v2-api
https://gist.github.com/patrickmslatteryvt/1d9e5212fe96e19f111cb7a0f8d498fb
https://www.arthurkoziel.com/dockerhub-registry-api/


curl \
  --silent \
  --unix-socket /var/run/docker.sock \
  "http:/containers/create?name=${CONTAINER_NAME}" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "Image": "openjdk:8u111-jre-alpine", "Cmd": [ "java", "-version" ] }' | jq '.'

  {
    "Id": "602995e0d277e67417d9ad142959db7853a788bcd079ac33a72e24fb2db2f33c",
    "Warnings": null
  }


curl \
  --unix-socket /var/run/docker.sock \
"http://localhost/v1.33/images/create?fromImage=fuckkk:5" \
  -X POST \
  -H "Content-Type: application/json" 

*/
