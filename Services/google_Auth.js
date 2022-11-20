// // npm install googleapis@105 @google-cloud/local-auth@2.1.0
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile'];

const CREDENTIALS_PATH = "C:\\Users\\anura\\FinalProject\\credentials.json";

async function authorize() {
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH
  });
  return client;
}


const ser = google.people('v1');
async function getdata(auth)
{
  google.options({auth});

  const res = await ser.people.get({
    resourceName: 'people/me',
    personFields: 'emailAddresses,names',
  });
  data={mail:res.data.emailAddresses.at(0).value,name:res.data.names.at(0).displayName}
  return data
}

module.exports =authorize().then(getdata).catch(console.error)


