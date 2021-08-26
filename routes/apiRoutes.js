const express = require("express");
const router = express.Router();

router.get("/skills", (req, res) => {
  console.log('hi');
  const skills = [
    { skillName: "HTML5", precentage: 90, imp: "true" },
    { skillName: "CSS3", precentage: 90, imp: "true" },
    { skillName: "Javascript/Typescript", precentage: 90, imp: "true" },
    { skillName: "Flutter", precentage: 95, imp: "true" },
    { skillName: "React", precentage: 95, imp: "true" },
    { skillName: "React Native", precentage: 95, imp: "true" },
    { skillName: "MySQL/SQLite", precentage: 95, imp: "true" },
    { skillName: "SCSS", precentage: 90, imp: "true" },
    { skillName: "Python", precentage: 70 },
    { skillName: "C++", precentage: 75 },
    { skillName: "Native Android", precentage: 75 },
    { skillName: "Java", precentage: 80 },
    { skillName: "NodeJS", precentage: 80 },
    { skillName: "Unity", precentage: 65 },
  ];
  res.json({ skills });
});

module.exports = router;
