// export default function (plop) {
//   // plop.setActionType('test', function (answers, config, api) {
//   //   console.log({answers, config, api})
//   // })
//   plop.setGenerator("plop-template", {
//     description : 'example',
//     prompts : [
//       {
//         name : 'language',
//         type : 'list',
//         message : "Choose Your Language? (use arrow)",
//         choices : ['php', 'react']
//       },
//       {
//         name : 'type',
//         type : 'list',
//         message : 'Choose type?',
//         choices:  ['atoms', 'molecules', 'organism', 'pages','templates']
//       },
//       {
//         name : 'path',
//         type : 'input',
//         message: 'Input preferred path'
//       },
//       {
//         name : 'component',
//         type : 'input',
//         message: 'Input preferred components'
//       }
//     ],
//     actions : function (data){
//       const actions = [];
//       if(data.type !== 'templates'){
//         actions.push({
//           type : 'add',
//           path : '{{dashCase path}}/{{dashCase component}}.{{dashCase language}}',
//           templateFile : 'plop-template/{{dashCase type}}/{{dashCase component}}.{{dashCase language}}.hbs'
//         })
//       } else {
//         actions.push({
//           type : 'addMany',
//           destination : '{{dashCase path}}',
//           templateFiles : 'plop-template/templates/**/*'
//         })
//       }
//       return actions;
//     }
//   })
// }

import inquirer from "inquirer";
export default async (plop) => {
  const promptModule = inquirer.createPromptModule();
  console.log(promptModule);
}
