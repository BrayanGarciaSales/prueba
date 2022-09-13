function main(params) {
    var nm = params.name || 'stranger';
    return {
        statusCode: 200,
        body: {
            payload: 'Hello ' + nm
        }
    }
}

exports.main = main;