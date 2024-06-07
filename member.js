function skillsMember() {
  // Path: member.js
  function getSkills() {
    return ["C#","JavaScript", "Python"];
  }
  // Path: member.js
  function addSkill(skill) {
    skills.push(skill);
  }
  // Path: member.js
  function removeSkill(skill) {
    const index = skills.indexOf(skill);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  return {
    getSkills,
    addSkill,
    removeSkill,
  };
}