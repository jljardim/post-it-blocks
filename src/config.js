const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "cadastro-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://1ixuwkae7g.execute-api.us-east-1.amazonaws.com/prod/cadastro",
    },
  };
  
  export default config;