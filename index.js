// Your code here
function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`    
}

const mondayWork = function(activity="go to the office") {
   return `This Monday, I will ${activity}.`    
}

const wrapAdjective = function(hl="*") {
   return function(adj="special") {
      return `You are ${hl}${adj}${hl}!`;    
   } 
}

const Calculator = {
   add: function(num1, num2) {
      return num1 + num2;    
   },
   
   subtract: function(num1, num2) {
      return num1 - num2;    
   },

   multiply: function(num1, num2) {
      return num1 * num2;    
   },

   divide: function(num1, num2) {
      return num1 / num2;    
   }
};

const actionApplyer = function(start, func) {
   if(func.length === 0) {
      return start;
   }

   for(let i = 0; i < func.length; i++) {
      const action = func[i];
      start = action(start); 
   }

   return start;
}