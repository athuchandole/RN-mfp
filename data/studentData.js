// data/studentData.js
const originalData = [
    { name: "Megan", lastname: "Chang", rollNumber: 1 },
    { name: "Robert", lastname: "Green", rollNumber: 2 },
    { name: "William", lastname: "Sullivan", rollNumber: 3 },
    { name: "Kristen", lastname: "Turner", rollNumber: 4 },
    { name: "Thomas", lastname: "Silva", rollNumber: 5 }
];

const studentData = Array.from({ length: 500 }, (_, i) => {
    const item = originalData[i % originalData.length];
    return {
        ...item,
        rollNumber: i + 1
    };
});

export default studentData;
