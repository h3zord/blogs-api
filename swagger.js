const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Blogs API',
    description: 'Esta documentação é destinada ao projeto Blogs API.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Login',
      description: 'Endpoints',
    },
    {
      name: 'User',
      description: 'Endpoints',
    },
    {
      name: 'Category',
      description: 'Endpoints',
    },
    {
      name: 'Post',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Login: {
      email: "lewishamilton@gmail.com",
      password: "123456"
    },
    User: {
      id: 1,
      email: "lewishamilton@gmail.com",
      displayName: "Lewis Hamilton",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    CreateUser: {
      displayName: "Cristiano Ronaldo",
      email: "test@test.com",
      password: "123456",
      image: "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo#/media/Ficheiro:Cristiano_Ronaldo_WC2022_-_01.jpg"
    },
    UserList: [
      {
        id: 1,
        email: "lewishamilton@gmail.com",
        displayName: "Lewis Hamilton",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
    ],
    CreateCategory: {
      name: "Tecnologia"
    },
    CategoryList: [
      {
        name: "Tecnologia"
      }
    ],
    CreatePost: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categoryIds: [1]
    },
    CreatedPost: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      userId: 1,
      updated: "2023-02-27T18:07:13.105Z",
      published: "2023-02-27T18:07:13.105Z"
    },
    UpdatePost: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    UpdatedPost: {
      userId: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      published: "2011-08-01T19:58:00.000Z",
      updated: "2011-08-01T19:58:51.000Z",
      user_id: 1,
      user: {
        id: 1,
        email: "lewishamilton@gmail.com",
        displayName: "Lewis Hamilton",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      categories: [
        {
          id: 1,
          name: "Inovação"
        }
      ]
    },
    PostObject: {
      id: 1,
      userId: 1,
      title: "Post do Ano",
      content: "Melhor post do ano",
      published: "2011-08-01T19:58:00.000Z",
      updated: "2011-08-01T19:58:51.000Z",
      user_id: 1,
      user: {
        id: 1,
        email: "lewishamilton@gmail.com",
        displayName: "Lewis Hamilton",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      categories: [
        {
          id: 1,
          name: "Inovação"
        }
      ]
    },
    PostList: [
      {
        id: 1,
        userId: 1,
        title: "Post do Ano",
        content: "Melhor post do ano",
        published: "2011-08-01T19:58:00.000Z",
        updated: "2011-08-01T19:58:51.000Z",
        user_id: 1,
        user: {
          id: 1,
          email: "lewishamilton@gmail.com",
          displayName: "Lewis Hamilton",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        categories: [
          {
            id: 1,
            name: "Inovação"
          }
        ]
      },
    ],
    ValidToken: { // 200 - 201 *
      authorizathion: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MTk4NTYxLCJleHAiOjI1NDExMTIxNjF9.se3YNe5wMW78JcwDYytPKfgaTRTGbYcO8e3Yk8fUWys"
    },
    InvalidTokenError: { // 401 *
      message: "Expired or invalid token"
    },
    TokenNotFoundError: { // 404 *
      message: "Token not found"
    },
    UserDoesNotExistError: { // 400 - 422*
      message: "User does not exist"
    },
    UserDeleteError: { // 400 *
      message: "User delete error"
    },
    UnauthorizedUserError: { // 409 *
      message: "Unauthorized user"
    },
    InvalidEmailError: { // 409 *
      message: "User already registered"
    },
    BodyNotFoundError: { // 400 - 404 *
      message: "Some required fields are missing"
    },
    InvalidFieldsBodyError: { // 400 *
      message: "Invalid fields"
    },
    PostDoesNotExistError: { // 400 *
      message: "Post does not exist"
    },
    CategoryNotFoundError: { // 422 *
      message: 'one or more "categoryIds" not found'
    },
  },
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = [
  './src/routes/loginRouter',
  './src/routes/userRouter',
  './src/routes/categoryRouter',
  './src/routes/blogPostRouter',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  require('./src/app.js'); // Your project's root file
});