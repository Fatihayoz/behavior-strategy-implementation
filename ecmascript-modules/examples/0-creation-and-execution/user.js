debugger;

/*

  files that export something will be evaluated before the file that imports them

*/

console.log('executing user.js');

const user = 'John';

// exports are evaluated at creation phase
//  they do not take a step of execution
export { user };

// export error occur during creation phase
//  uncomment this to see
// export { frog };
