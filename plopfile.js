export default function (plop) {
  plop.setGenerator("plop-template", {
    description : 'example',
    prompts : [
      {
        name : 'language',
        type : 'list',
        message : "Choose Your Language? (use arrow)",
        choices : ['php', 'js']
      },
      {
        name : 'type',
        type : 'list',
        message : 'Choose type? (use arrow)',
        choices:  ['atoms', 'molecules', 'organism', 'pages','templates']
      },
      {
        name : 'path',
        type : 'input',
        message: 'Input preferred path?'
      },
      {
        name : 'component',
        type : 'input',
        message: 'Input preferred components?',
        when : (answers) => {
          if(answers.type == 'templates'){
            return false
          }
          return true;
        }
      }
    ],
    actions : function (data){
      const actions = [];

      if(data.type !== 'templates'){
        actions.push({
          type : 'add',
          path : '{{dashCase path}}/{{dashCase component}}.{{dashCase language}}',
          templateFile : 'plop-template/{{dashCase type}}/{{dashCase component}}.{{dashCase language}}.hbs'
        })
      } else {
        actions.push({
          type : 'addMany',
          destination : '{{dashCase path}}',
          templateFiles : 'plop-template/templates/**/*'
        })
      }
      return actions;
    }
  })
}
