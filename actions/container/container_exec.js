const _type = ["log"];
const _provider = "docker";
const _thing = "container";
const _title = "exec";
const _description = "some desc";

// used in log actijon
const _opId = 'ContainerExec';

const _opServer = {
    'ContainerExec': '/v1.33'
};
const _opRequestMediaType = {
    'ContainerExec': 'application/json'
};
const _opResponseMediaType = {
    'ContainerExec': 'application/json'
};
const _opInputMap = {
    'ContainerExec': {
        'request.path.id': input => input.data.Id,
        'request.body.Cmd': input => {
            //if (input.connectData.detach !== false) {
            //    // to redirect to log
            //    //https://stackoverflow.com/questions/55444469/redirecting-script-output-to-docker-logs
            //    const cmd = JSON.parse(JSON.stringify(input.configData.command))
            //    cmd = cmd.concat([">>", "/proc/1/fd/1"])
            //    return cmd;
            //} else {
                return input.configData.command;
            //};
        },
        'request.body.User': input => input.configData.runUser,
        'request.body.WorkingDir': input => input.configData.runDirectory,
        'request.body.AttachStdin': input => false,
        'request.body.AttachStderr': input => true,
        'request.body.AttachStdout': input => true,
        'request.body.Tty': input => {
            if (input.connectData.detach === false) return false;
            return true;
        }
    }
};
const _inputDataSchema = {
    allOf: [{
            ref: 'operation::ContainerExec://request.body',
        },
        {
            ref: 'operation::ContainerExec://request.path'
        },
    ]
};
const _outputDataSchema = {
    ref: 'operation::ContainerExec://response.body',
};


const _outputInfoMap = null
let _output;
const _main = async (ContainerExec, container_execStart, streamResponseHandler, abortController) => {
    _output = await ContainerExec.fetch();
    let input = {
        connectData: _input.connectData,
        data: {
            Id: _output.body.Id
        }
    }
    if (_input.connectData.detach === false) {
        _output.data = await container_execStart.run(input, streamResponseHandler, abortController);
    } else {
        _output.data = await container_execStart.run(input);
    };
};
await _main(ContainerExec, container_execStart, streamResponseHandler, abortController);
return _output;
