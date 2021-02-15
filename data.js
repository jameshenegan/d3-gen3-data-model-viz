const data = [
  {
    name: "Program",
    parent: "",
  },
  {
    name: "Project",
    parent: "Program",
  },
  {
    name: "Study",
    parent: "Project",
  },
  {
    name: "Participant",
    parent: "Study",
  },
  {
    name: "Demographic",
    parent: "Participant",
  },
  {
    name: "Visit",
    parent: "Participant",
  },
  {
    name: "Anthropometry",
    parent: "Visit",
  },
  {
    name: "Cognition",
    parent: "Visit",
  },
  {
    name: "Glucose",
    parent: "Visit",
  },
];

const demographicData = [
  { name: "Demographic", parent: "" },
  { name: "Sex", parent: "Demographic", amount: 1, source: "Form" },
  { name: "Race Group", parent: "Demographic", amount: 1, source: "Form" },
  {
    name: "Year of Birth",
    parent: "Demographic",
    amount: 1,
    source: "Derived",
  },
  {
    name: "Year of Enrollment",
    parent: "Demographic",
    amount: 1,
    source: "Derived",
  },
  {
    name: "Male Indicator",
    parent: "Demographic",
    amount: 1,
    source: "Derived",
  },
  {
    name: "Black Race Indicator",
    parent: "Demographic",
    amount: 1,
    source: "Derived",
  },
  { name: "Marital Status", parent: "Demographic", amount: 1, source: "Form" },
  {
    name: "Size of Household",
    parent: "Demographic",
    amount: 1,
    source: "Form",
  },
  { name: "Type of Housing", parent: "Demographic", amount: 1, source: "Form" },
  {
    name: "Born in the United States",
    parent: "Demographic",
    amount: 1,
    source: "Form",
  },
  {
    name: "English was first language",
    parent: "Demographic",
    amount: 1,
    source: "Form",
  },
  {
    name: "Years of Education",
    parent: "Demographic",
    amount: 1,
    source: "Form",
  },
];

const anthropometryData = [
  { name: "Anthropometry", parent: "" },
  { name: "BMI", parent: "Anthropometry", source: "Derived", amount: 1 },
  {
    name: "Waist Circumference",
    parent: "Anthropometry",
    source: "Form",
    amount: 1,
  },
  {
    name: "Weight",
    parent: "Anthropometry",
    source: "Instrument",
    amount: 1,
  },
  {
    name: "Weight loss since previous visit",
    parent: "Anthropometry",
    source: "Derived",
    amount: 1,
  },
  {
    name: "Height",
    parent: "Anthropometry",
    source: "Instrument",
    amount: 1,
  },
  {
    name: "Oral Body Temperature",
    parent: "Anthropometry",
    source: "Form",
    amount: 1,
  },
  {
    name: "Systolic Blood Pressure",
    parent: "Anthropometry",
    source: "Form",
    amount: 1,
  },
  {
    name: "Pulse",
    parent: "Anthropometry",
    source: "Form",
    amount: 1,
  },
];

const cognitionData = [
  { name: "Cognition", parent: "" },
  {
    name: "Dementia Status",
    parent: "Cognition",
    source: "Derived",
    amount: 1,
  },
  {
    name: "Mini-Mental State Exam Total",
    parent: "Cognition",
    source: "Derived",
    amount: 1,
  },
  {
    name: "Wide Range Achievement Test",
    parent: "Cognition",
    source: "Derived",
    amount: 1,
  },
  { name: "PMA Vocabulary", parent: "Cognition", source: "Form", amount: 1 },
  {
    name: "Benton Visual Retention Test",
    parent: "Cognition",
    source: "Form",
    amount: 1,
  },
  {
    name: "Verbal Fluency Test",
    parent: "Cognition",
    source: "Form",
    amount: 1,
  },
  {
    name: "WAIS Digit Symbol Substitution Test",
    parent: "Cognition",
    source: "Form",
    amount: 1,
  },
];

const visitData = [
  { name: "Visit", parent: "" },
  { name: "Visit Number", parent: "Visit", amount: 1 },
  { name: "Visit Date", parent: "Visit", source: "Form", amount: 1 },
  { name: "Type of Visit", parent: "Visit", source: "Form", amount: 1 },
  {
    name: "Home Visit Indicator",
    parent: "Visit",
    amount: 1,
    source: "Derived",
  },
  {
    name: "Visit Encounter Duration",
    parent: "Visit",
    amount: 1,
    source: "Derived",
  },
];

const participantData = [
  { name: "Participant", parent: "" },
  { name: "Participant ID", parent: "Participant", amount: 1 },
];

const studyData = [
  { name: "Study", parent: "" },
  { name: "Study Name", parent: "Study", amount: 1 },
  { name: "Study Description", parent: "Study", amount: 1 },
  { name: "Study Design", parent: "Study", amount: 1 },
];

const projectData = [
  { name: "Project", parent: "" },
  { name: "Project Name", parent: "Project", amount: 1 },
  { name: "Dbgap Accession Number", parent: "Project", amount: 1 },
  { name: "Principal Investigator", parent: "Project", amount: 1 },
];

const programData = [
  { name: "Program", parent: "" },
  { name: "Program Name", parent: "Program", amount: 1 },
];

const glucoseData = [
  { name: "Glucose", parent: "" },
  { name: "Diluation factor", parent: "Glucose", source: "Form", amount: 1 },
  {
    name: "Self-Reported History of Diabetes",
    parent: "Glucose",
    source: "Form",
    amount: 1,
  },
  {
    name: "Fasting Glucose",
    parent: "Glucose",
    source: "Instrument",
    amount: 1,
  },
  {
    name: "OGTT Glucose",
    parent: "Glucose",
    source: "Instrument",
    amount: 1,
  },
  {
    name: "Diabetes Categorization",
    parent: "Glucose",
    source: "Derived",
    amount: 1,
  },
];

const nodeNames = [
  "Demographic",
  "Anthropometry",
  "Cognition",
  "Visit",
  "Participant",
  "Study",
  "Project",
  "Program",
  "Glucose",
];

const dataKey = {
  Demographic: demographicData,
  Anthropometry: anthropometryData,
  Cognition: cognitionData,
  Visit: visitData,
  Participant: participantData,
  Study: studyData,
  Project: projectData,
  Program: programData,
  Glucose: glucoseData,
};
