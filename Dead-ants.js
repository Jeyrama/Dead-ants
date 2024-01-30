/*
An orderly trail of ants is marching across the park picnic area.

It looks something like this:
  ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..

But suddenly there is a rumour that a dropped sandwich has been spotted on the ground ahead. 
The ants surge forward! Oh No, it's an ant stampede!!
Some of the slower ants are trampled, and their little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:
  ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t

Can you find how many ants have died?

Notes:
  When in doubt, assume that the scattered bits are from the same ant. 
  e.g. 2 heads and 1 body = 2 dead ants, not 3
*/


// Solution

deadAntCount = function(ants) {
  if (!ants) return 0;
  let bodyParts = ants.split('ant').join('');

  function count(char) {
    return bodyParts.split(char).length - 1;
  }
  return Math.max(count('a'), count('n'), count('t'));
}

// or

deadAntCount = function(ants) {
  if (ants==null)
    return 0; 
  let an=ants.replace(/ant/gi,'');
  let a=0, n=0, t=0;
  for (let i=0; i<an.length; ++i)
  {
    if (an[i]=='a') a++;
    if (an[i]=='n') n++;
    if (an[i]=='t') t++;
  }
  let arr=[a,n,t];
  arr.sort((c,d)=>c-d)
  return arr[2];
}